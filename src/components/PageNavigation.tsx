import * as React from 'react';
import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { AppLinkButton } from 'gatsby-theme-aoi/src/components/AppLink';

interface Navigation {
  to: string;
  title: string;
}

interface Props {
  previous?: Navigation;
  next?: Navigation;
  center: Navigation;
}

function PageNavigation({ previous, next, center }: Props) {
  return (
    <Box py={4}>
      <Box textAlign="left" py={1}>
        {previous ? (
          <AppLinkButton to={previous.to}>
            <ArrowBackIcon /> {previous.title}
          </AppLinkButton>
        ) : null}
      </Box>
      <Box textAlign="right" py={1}>
        {next ? (
          <AppLinkButton to={next.to}>
            {next.title} <ArrowForwardIcon />
          </AppLinkButton>
        ) : null}
      </Box>
      <Box textAlign="center">
        <AppLinkButton to={center.to}>{center.title}</AppLinkButton>
      </Box>
    </Box>
  );
}

export default PageNavigation;

interface HelperProps {
  fieldValue?: string;
}

function navigationHelper(input: HelperProps, basePath: string = '') {
  return input
    ? {
        to: `${basePath}/${input.fieldValue}`,
        title: input.fieldValue
      }
    : null;
}

export function createNavigationProps(previous: HelperProps, next: HelperProps, basePath: string = ''): Pick<Props, 'previous' | 'next'> {
  return {
    previous: navigationHelper(previous, basePath),
    next: navigationHelper(next, basePath)
  };
}
