import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import Jumbotron from '../components/Jumbotron';
import AuthorBox from '../components/AuthorBox';
import PageNavigation, { createNavigationProps } from '../components/PageNavigation';
import DrawerPageNavigation from '../components/DrawerPageNavigation';
import BlogListTemplate from './blog-list';

import { AuthorQuery, SitePageContext } from '../../graphql-types';

interface Props {
  data: AuthorQuery;
  pageContext: SitePageContext;
}

function AllPostsTemplate({ data, pageContext }: Props) {
  const { authorsJson } = data;
  const { edges } = data.allMdx;
  const { numPages, currentPage, fieldValue, type, previous, next } = pageContext;
  const avatar = authorsJson?.avatar?.childImageSharp?.fluid?.src;

  return (
    <Layout
      title={fieldValue ?? 'Author'}
      maxWidth="md"
      jumbotron={
        <Jumbotron
          title={fieldValue ?? 'Author'}
          header={type ?? 'Author'}
          subtitle={`${edges.length} posts`}
          image={avatar ?? undefined}
        />
      }
      drawerContents={<DrawerPageNavigation {...createNavigationProps(previous, next, '/author')} />}
    >
      <AuthorBox author={authorsJson ?? null} disableLink p={2} />
      <BlogListTemplate edges={edges} numPages={numPages ?? 0} currentPage={currentPage ?? 0} basePath={`/author/${fieldValue}`} />
      <PageNavigation {...createNavigationProps(previous, next, '/author')} center={{ to: '/author/', title: 'Author' }} />
    </Layout>
  );
}

export default AllPostsTemplate;

export const authorQuery = graphql`
  query author($fieldValue: String!, $skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" }, frontmatter: { author: { name: { eq: $fieldValue } } } }
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
    authorsJson(name: { eq: $fieldValue }) {
      id
      name
      description
      twitter
      url
      github
      avatar {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`;
