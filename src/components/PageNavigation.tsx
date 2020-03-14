import * as React from 'react';
import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { AppLinkButton } from 'gatsby-theme-aoi/src/components/AppLink';
import { SitePageContext } from '../../graphql-types';

type Props = Partial<Pick<SitePageContext, 'previous' | 'next'>>;

function PageNavigation({ previous, next }: Props) {
  return (
    <Box py={4}>
      <Box textAlign="left" py={1}>
        {previous ? (
          <AppLinkButton to={previous.fields.slug}>
            <ArrowBackIcon /> {previous.frontmatter.title}
          </AppLinkButton>
        ) : null}
      </Box>
      <Box textAlign="right" py={1}>
        {next ? (
          <AppLinkButton to={next.fields.slug}>
            {next.frontmatter.title} <ArrowForwardIcon />
          </AppLinkButton>
        ) : null}
      </Box>
      <Box textAlign="center">
        <AppLinkButton to="/blog/">All Posts</AppLinkButton>
      </Box>
    </Box>
  );
}

export default PageNavigation;
