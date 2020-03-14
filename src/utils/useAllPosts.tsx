import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AllPostsQuery } from '../../graphql-types';

function useAllPosts() {
  const data = useStaticQuery<AllPostsQuery>(graphql`
    query AllPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
              categories
            }
          }
        }
      }
    }
  `);
  return React.useMemo(() => data.allMdx.edges, []);
}

export default useAllPosts;
