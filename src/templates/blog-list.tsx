import * as React from 'react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import ListItemLink from 'gatsby-theme-aoi/src/components/ListItemLink';
import Jumbotron from '../components/Jumbotron';
import { AdInFooter } from '../components/ads';
import { BlogListQuery, SitePageContext } from '../../graphql-types';

const useStyles = makeStyles((theme: Theme) => createStyles({
  ul: {
    justifyContent: 'center'
  }
}));

interface Props {
  data: BlogListQuery;
  pageContext: SitePageContext;
}

function BlogListTemplate({ data, pageContext }: Props) {
  const { edges } = data.allMdx;
  const { title, numPages, currentPage } = pageContext;
  const classes = useStyles();
  return (
    <Layout title={title} jumbotron={<Jumbotron title={title} header="type" />}>
      <List>
        {edges.map(({ node }) => (
          <ListItemLink
            key={node.id}
            to={node.fields.slug}
            primaryText={node.frontmatter.title}
            secondaryText={`${node.frontmatter.date} post by ${node.frontmatter.author.name}`}
            divider
          />
        ))}
      </List>
      <Box textAlign="center" px={2} py={4}>
        <Pagination
          classes={classes}
          count={numPages}
          defaultPage={currentPage}
          color="primary"
          renderItem={(item: any) => (
            <PaginationItem component={GatsbyLink} to={`/blog/${item.page === 1 ? '' : `${item.page}`}`} {...item} />
          )}
        />
      </Box>
      <AdInFooter />
    </Layout>
  );
}

export default BlogListTemplate;

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
