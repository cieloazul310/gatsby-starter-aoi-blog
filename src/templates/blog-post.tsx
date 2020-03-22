import * as React from 'react';
import { graphql, withPrefix } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Divider from '@material-ui/core/Divider';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import Jumbotron from '../components/Jumbotron';
import DrawerPageNavigation from '../components/blog-post/DrawerPageNavigation';
import BlogPostFooter from '../components/blog-post/BlogPostFooter';
import AuthorBox from '../components/AuthorBox';
import PageNavigation from '../components/blog-post/PageNavigation';
import { AdInArticle, AdInFooter } from '../components/ads';
import muiComponents from '../utils/muiComponents';
import { viewportsHelper } from 'gatsby-theme-aoi/src/utils/layoutViewports';
import { BlogPostQueryQuery, SitePageContext } from '../../graphql-types';

const shortcodes = { AdInArticle };

interface Props {
  data: BlogPostQueryQuery;
  pageContext: SitePageContext;
}

function BlogPostTemplate({ pageContext, data: { mdx } }: Props) {
  const { title, subtitle, date, fullWidth, featuredImage, author, categories, tags } = mdx.frontmatter;
  const { previous, next } = pageContext;
  const componentViewports = viewportsHelper({
    Fab: fullWidth ? true : 'smDown',
    PermanentDrawer: fullWidth ? false : 'mdUp'
  });
  const image = featuredImage && featuredImage.childImageSharp ? featuredImage.childImageSharp.fluid.src : null;
  const jumbotron = <Jumbotron title={title} header={`${date} post by ${author.name}`} subtitle={subtitle} image={image} />;

  return (
    <Layout
      maxWidth="md"
      title={title}
      image={image ? image.replace(withPrefix(''), '/') : null}
      componentViewports={componentViewports}
      jumbotron={jumbotron}
      drawerContents={<DrawerPageNavigation previous={previous} next={next} />}
    >
      <MDXProvider components={{ ...muiComponents, ...shortcodes }}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      <Divider />
      <BlogPostFooter date={date} categories={categories} tags={tags} />
      <Divider />
      <AuthorBox author={author} py={4} />
      <PageNavigation previous={previous} next={next} />
      <AdInFooter />
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        subtitle
        categories
        tags
        date(formatString: "YYYY-MM-DD")
        author {
          id
          name
          description
          url
          twitter
          github
          avatar {
            childImageSharp {
              fluid(maxWidth: 240) {
                src
              }
            }
          }
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              srcSet
              src
            }
          }
        }
        fullWidth
      }
    }
  }
`;
