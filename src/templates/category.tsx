import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import Jumbotron from '../components/Jumbotron';
import PageNavigation, { createNavigationProps } from '../components/PageNavigation';
import DrawerPageNavigation from '../components/DrawerPageNavigation';
import BlogListTemplate from './blog-list';

import { CategoryQuery, SitePageContext } from '../../graphql-types';

interface Props {
  data: CategoryQuery;
  pageContext: SitePageContext;
}

function CategoryTemplate({ data, pageContext }: Props) {
  const { edges } = data.allMdx;
  const { numPages, currentPage, fieldValue, type, previous, next } = pageContext;
  return (
    <Layout
      title={fieldValue}
      maxWidth="md"
      jumbotron={<Jumbotron title={fieldValue} header={type} subtitle={`${edges.length} posts`} />}
      drawerContents={<DrawerPageNavigation {...createNavigationProps(previous, next, '/category')} />}
    >
      <BlogListTemplate edges={edges} numPages={numPages} currentPage={currentPage} basePath={`/category/${fieldValue}`} />
      <PageNavigation {...createNavigationProps(previous, next, '/category')} center={{ to: '/category', title: 'Category' }} />
    </Layout>
  );
}

export default CategoryTemplate;

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
