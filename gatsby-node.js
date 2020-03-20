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
      component: path.resolve('./src/templates/blog-list.tsx'),
      context: {
        title: 'All Posts',
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    });
  });
};
