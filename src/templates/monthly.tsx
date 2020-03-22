import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import Jumbotron from '../components/Jumbotron';
import ArchiveList from '../components/ArchiveList';
import BlogListTemplate from './blog-list';
import { MonthlyQuery, SitePageContext } from '../../graphql-types';

interface Props {
  data: MonthlyQuery;
  pageContext: SitePageContext;
}

function MonthlyTemplate({ data, pageContext }: Props) {
  const { edges } = data.allMdx;
  const { numPages, currentPage, year, month, type, previous, next } = pageContext;
  return (
    <Layout
      title={`${year}/${month}`}
      jumbotron={<Jumbotron title={`${year}/${month}`} header={type} subtitle={`${edges.length} posts`} />}
      drawerContents={<ArchiveList button inset />}
    >
      <BlogListTemplate edges={edges} numPages={numPages} currentPage={currentPage} basePath={`/blog/${year}/${month}`} />
    </Layout>
  );
}

export default MonthlyTemplate;

export const query = graphql`
  query Monthly($gte: Date!, $lt: Date!, $skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" }, frontmatter: { date: { gte: $gte, lt: $lt } } }
      sort: { order: DESC, fields: frontmatter___date }
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
