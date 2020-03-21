import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import Jumbotron from '../components/Jumbotron';
import PageNavigation from '../components/PageNavigation';
import BlogListTemplate from './blog-list';

import { CategoryQuery, SitePageContext } from '../../graphql-types';

interface Props {
  data: CategoryQuery;
  pageContext: SitePageContext;
}

function AllPostsTemplate({ data, pageContext }: Props) {
  const { edges } = data.allMdx;
  const { numPages, currentPage, fieldValue, type, previous, next } = pageContext;
  return (
    <Layout title={fieldValue} jumbotron={<Jumbotron title={fieldValue} header={type} />}>
      <BlogListTemplate edges={edges} numPages={numPages} currentPage={currentPage} basePath={`/category/${fieldValue}`} />
      <PageNavigation
        previous={previous ? { to: `/category/${previous.fieldValue}`, title: previous.fieldValue } : null}
        next={next ? { to: `/category/${next.fieldValue}`, title: next.fieldValue } : null}
        center={{ to: '/category', title: 'Category' }}
      />
    </Layout>
  );
}

export default AllPostsTemplate;

export const categoryQuery = graphql`
  query category($fieldValue: String!, $skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" }, frontmatter: { categories: { eq: $fieldValue } } }
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
