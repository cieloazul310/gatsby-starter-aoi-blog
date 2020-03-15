import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import AppLink from 'gatsby-theme-aoi/src/components/AppLink';
import Jumbotron from '../../components/Jumbotron';

import useAllPosts from '../../utils/useAllPosts';

function BlogIndexPage() {
  const allPosts = useAllPosts();
  return (
    <Layout title="Blog" jumbotron={<Jumbotron frontmatter={{ title: "All Posts", featuredImage: null }} />}>
      {allPosts.map(({ node }) => (
        <Box py={3} key={node.id}>
          <Typography variant="subtitle1">{node.frontmatter.date}</Typography>
          <Typography variant="h4" component="h3">
            <AppLink color="textPrimary" to={node.fields.slug}>
              {node.frontmatter.title}
            </AppLink>
          </Typography>
        </Box>
      ))}
    </Layout>
  );
}

export default BlogIndexPage;
