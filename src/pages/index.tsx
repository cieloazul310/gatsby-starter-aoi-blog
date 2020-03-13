import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import AppLink, { AppLinkButton } from 'gatsby-theme-aoi/src/components/AppLink';
import Layout from 'gatsby-theme-aoi/src/layout';
import { useAppState } from 'gatsby-theme-aoi-top-layout/src/utils/AppStateContext';

function IndexPage() {
  const { count } = useAppState();
  return (
    <Layout maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Gatsby Theme Aoi Example
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        This is an example page using Gatsby Theme Aoi.
      </Typography>
      <section>
        <Typography variant="h4" component="h3" gutterBottom>
          Features
        </Typography>
        <Typography component="ul" paragraph>
          <Typography component="li">TypeScript</Typography>
          <Typography component="li">Material-UI</Typography>
          <Typography component="li">Mobile friendlly responsive UI layout</Typography>
          <Typography component="li">Holding App State / Count: {count}</Typography>
          <Typography component="li">Dark Mode</Typography>
          <Typography component="li">Storybook</Typography>
        </Typography>
      </section>
      <section>
        <Typography variant="h4" component="h3" gutterBottom>
          Layouts
        </Typography>
        <Typography component="ul" paragraph>
          <Typography component="li">Simple with Drawer</Typography>
          <Typography component="li">
            Tab Layout <AppLink to="/tab-page/">Example</AppLink>
          </Typography>
          <Typography component="li">
            Jumbotron <AppLink to="/jumbotron/">Example</AppLink>
          </Typography>
          <Typography component="li">
            Without Drawer <AppLink to="/without-drawer/">Example</AppLink>
          </Typography>
        </Typography>
      </section>
      <AppLinkButton to="/page-2/">Go to Page 2</AppLinkButton>
    </Layout>
  );
}

export default IndexPage;
