import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from 'gatsby-theme-aoi/src/layout';
import { AppLinkButton } from 'gatsby-theme-aoi/src/components/AppLink';

function SecondPage() {
  return (
    <Layout title="Second Page">
      <Typography variant="h2" gutterBottom>
        Hi People
      </Typography>
      <Typography paragraph>Welcome to page 2</Typography>
      <AppLinkButton to="/">Go back to the homepage</AppLinkButton>
    </Layout>
  );
}

export default SecondPage;
