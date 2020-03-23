const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node);

  const { createNodeField } = actions;
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: `/blog${value}`
    });
  }
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;
  const typeDefs = [
    'type Mdx implements Node { frontmatter: Frontmatter }',
    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        author: {
          type: 'AuthorsJson',
          resolve: (source, args, context, info) => {
            // If you were linking by ID, you could use `getNodeById` to
            // find the correct author:
            // return context.nodeModel.getNodeById({
            //   id: source.author,
            //   type: "AuthorJson",
            // })
            // But since the example is using the author email as foreign key,
            // you can use `runQuery`, or get all author nodes
            // with `getAllNodes` and manually find the linked author
            // node:
            return context.nodeModel.getAllNodes({ type: 'AuthorsJson' }).find(author => author.name === source.author);
          }
        }
      }
    })
  ];
  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query CreateMdxPages {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
        edges {
          node {
            id
            frontmatter {
              title
              year: date(formatString: "YYYY")
              month: date(formatString: "MM")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const posts = result.data.allMdx.edges;

  // generate Each post pages
  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: { previous, next, id: node.id }
    });
  });

  // generate All posts pages
  const postsPerPage = 15;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/all-posts.tsx'),
      context: {
        title: 'All Posts',
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    });
  });

  // generate each category Pages
  const categoriesResult = await graphql(`
    query Categories {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
        group(field: frontmatter___categories) {
          totalCount
          fieldValue
          field
        }
      }
    }
  `);
  if (categoriesResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const categories = categoriesResult.data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount);

  categories.forEach((category, index) => {
    const next = index === categories.length - 1 ? null : categories[index + 1];
    const previous = index === 0 ? null : categories[index - 1];
    const numPages = Math.ceil(category.totalCount / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/category/${category.fieldValue}` : `/category/${category.fieldValue}/${i + 1}`,
        component: path.resolve('./src/templates/category.tsx'),
        context: {
          previous,
          next,
          type: 'Category',
          fieldValue: category.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      });
    });
  });

  // generate each author Pages
  const authorResult = await graphql(`
    query Authors {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
        group(field: frontmatter___author___name) {
          totalCount
          fieldValue
        }
      }
    }
  `);
  if (authorResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const authors = authorResult.data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount);

  authors.forEach((author, index) => {
    const next = index === authors.length - 1 ? null : authors[index + 1];
    const previous = index === 0 ? null : authors[index - 1];
    const numPages = Math.ceil(author.totalCount / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/author/${author.fieldValue}` : `/author/${author.fieldValue}/${i + 1}`,
        component: path.resolve('./src/templates/author.tsx'),
        context: {
          previous,
          next,
          type: 'Author',
          fieldValue: author.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      });
    });
  });

  // generate each tag pages
  const tagsResult = await graphql(`
    query Tags {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
        }
      }
    }
  `);
  if (tagsResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const tags = tagsResult.data.allMdx.group.sort((a, b) => b.totalCount - a.totalCount);

  tags.forEach((tag, index) => {
    const next = index === tags.length - 1 ? null : tags[index + 1];
    const previous = index === 0 ? null : tags[index - 1];
    const numPages = Math.ceil(tag.totalCount / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/tag/${tag.fieldValue}` : `/author/${tag.fieldValue}/${i + 1}`,
        component: path.resolve('./src/templates/tag.tsx'),
        context: {
          previous,
          next,
          type: 'Tag',
          fieldValue: tag.fieldValue,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      });
    });
  });

  const months = posts.reduce((accum, { node }) => {
    const { year, month } = node.frontmatter;
    const index = accum.map(d => d.key).indexOf(`${year}/${month}`);
    if (index < 0) {
      return [
        ...accum,
        {
          year,
          month,
          key: `${year}/${month}`,
          totalCount: posts.filter(post => post.node.frontmatter.year === year && post.node.frontmatter.month === month).length
        }
      ];
    } else {
      return accum;
    }
  }, []);

  months.forEach(({ year, month, totalCount }, index) => {
    const next = index === 0 ? null : months[index - 1];
    const previous = index === months.length - 1 ? null : months[index + 1];
    const numPages = Math.ceil(totalCount / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog/${year}/${month}` : `/blog/${year}/${month}/${i + 1}`,
        component: path.resolve('./src/templates/archive.tsx'),
        context: {
          previous,
          next,
          type: 'Archive',
          year,
          month,
          gte: `${year}-${month}`,
          lt:
            month === '12'
              ? `${(parseInt(year, 10) + 1).toString().padStart(2, '0')}-01`
              : `${year}-${(parseInt(month, 10) + 1).toString().padStart(2, '0')}`,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      });
    });
  });
};
