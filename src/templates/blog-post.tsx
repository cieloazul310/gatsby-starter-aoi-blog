import * as React from 'react';
import { graphql, withPrefix } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import Jumbotron from '../components/Jumbotron';
import DrawerPageNavigation from '../components/DrawerPageNavigation';
import AuthorBox from '../components/AuthorBox';
import PageNavigation from '../components/PageNavigation';
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
  const { title, fullWidth, featuredImage, author } = mdx.frontmatter;
  const { previous, next } = pageContext;
  const componentViewports = viewportsHelper({
    Fab: fullWidth ? true : 'smDown',
    PermanentDrawer: fullWidth ? false : 'mdUp'
  });
  
  return (
    <Layout
      maxWidth="md"
      title={title}
      image={featuredImage ? featuredImage.childImageSharp.fluid.src.replace(withPrefix(''), '') : null}
      componentViewports={componentViewports}
      jumbotron={<Jumbotron frontmatter={mdx.frontmatter} />}
      drawerContents={<DrawerPageNavigation previous={previous} next={next} />}
    >
      <MDXProvider components={{ ...muiComponents, ...shortcodes }}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      <AuthorBox author={author} />
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
        date(formatString: "YYYY-MM-DD")
        author {
          id
          name
          url
          twitter
          github
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
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
