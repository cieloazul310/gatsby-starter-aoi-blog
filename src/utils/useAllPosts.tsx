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
              year: date(formatString: "YYYY")
              month: date(formatString: "MM")
              categories
              author {
                name
              }
            }
          }
        }
      }
    }
  `);
  return React.useMemo(() => data.allMdx.edges, []);
}

export default useAllPosts;

type Month = {
  year: string;
  month: string;
  key: string;
  totalCount: number;
};

export function useAllMonths(): Month[] {
  const posts = useAllPosts();
  return React.useMemo(() => {
    return posts.reduce((accum, { node }) => {
      const { year, month } = node.frontmatter;
      const index = accum.map((d) => d.key).indexOf(`${year}/${month}`);
      if (index < 0) {
        return [
          ...accum,
          {
            year,
            month,
            key: `${year}/${month}`,
            totalCount: posts.filter((post) => post.node.frontmatter.year === year && post.node.frontmatter.month === month).length,
          },
        ];
      } else {
        return accum;
      }
    }, []);
  }, []);
}
