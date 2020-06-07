import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from 'gatsby-theme-aoi/src/layout';

function Page() {
  return (
    <Layout>
      <Typography variant="h2" gutterBottom>
        Hello, World
      </Typography>
      <Typography paragraph>This is Gatsby Theme Aoi layout example.</Typography>
    </Layout>
  );
}

export default Page;
