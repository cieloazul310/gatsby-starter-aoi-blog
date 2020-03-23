import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import Jumbotron from '../components/Jumbotron';
import BlogListTemplate from './blog-list';

import { BlogListQuery, SitePageContext } from '../../graphql-types';

interface Props {
  data: BlogListQuery;
  pageContext: SitePageContext;
}

function AllPostsTemplate({ data, pageContext }: Props) {
  const { edges } = data.allMdx;
  const { title, numPages, currentPage } = pageContext;
  return (
    <Layout title={title} maxWidth="md" jumbotron={<Jumbotron title={title} />}>
      <BlogListTemplate edges={edges} numPages={numPages} currentPage={currentPage} basePath="/blog" />
    </Layout>
  );
}

export default AllPostsTemplate;

export const blogListQuery = graphql`
  query blogList($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            author {
              name
            }
          }
        }
      }
    }
  }
`;
