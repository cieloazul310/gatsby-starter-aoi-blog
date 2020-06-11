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

function BlogPostTemplate({ pageContext, data }: Props) {
  const { mdx } = data;
  if (!mdx || !mdx.frontmatter) return null;
  const { title, subtitle, date, fullWidth, featuredImage, author, categories, tags } = mdx.frontmatter;
  const { previous, next } = pageContext;
  const componentViewports = viewportsHelper({
    Fab: fullWidth ? true : 'smDown',
    PermanentDrawer: fullWidth ? false : 'mdUp',
  });
  const image = featuredImage?.childImageSharp?.fluid?.src ?? undefined;
  const jumbotron = (
    <Jumbotron
      title={title ?? 'Title'}
      header={`${date} post by ${author?.name ?? 'Author'}`}
      subtitle={subtitle ?? undefined}
      image={image}
    />
  );

  return (
    <Layout
      maxWidth="md"
      title={title ?? 'Title'}
      image={image ? image.replace(withPrefix(''), '/') : undefined}
      componentViewports={componentViewports}
      jumbotron={jumbotron}
      drawerContents={<DrawerPageNavigation previous={previous} next={next} />}
    >
      <MDXProvider components={{ ...muiComponents, ...shortcodes }}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      <Divider />
      <BlogPostFooter date={date} categories={(categories as string[]) ?? []} tags={(tags as string[]) ?? []} />
      <Divider />
      <AuthorBox author={author ?? undefined} py={4} />
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
