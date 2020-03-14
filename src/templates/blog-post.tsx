import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import Jumbotron from '../components/Jumbotron';
import DrawerPageNavigation from '../components/DrawerPageNavigation';
import PageNavigation from '../components/PageNavigation';
import muiComponents from '../utils/muiComponents';
import { BlogPostQueryQuery, SitePageContext } from '../../graphql-types';

interface Props {
  data: BlogPostQueryQuery;
  pageContext: SitePageContext;
}

function BlogPostTemplate({ pageContext, data: { mdx } }: Props) {
  const { title, fullWidth, featuredImage } = mdx.frontmatter;
  const { previous, next } = pageContext;
  
  return (
    <Layout
      maxWidth="md"
      title={title}
      image={featuredImage ? featuredImage.childImageSharp.fluid.src : null}
      disableDrawer={fullWidth || false}
      disableFab={fullWidth || false}
      jumbotron={<Jumbotron frontmatter={mdx.frontmatter} />}
      drawerContents={<DrawerPageNavigation previous={previous} next={next} />}
    >
      <MDXProvider components={muiComponents}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      <PageNavigation previous={previous} next={next} />
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
        author
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
