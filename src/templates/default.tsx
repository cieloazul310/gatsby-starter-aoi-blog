import * as React from 'react';
import Layout from 'gatsby-theme-aoi/src/layout';
import { MDXProvider } from '@mdx-js/react';
import muiComponents from '../utils/muiComponents';
import { SitePageContext } from '../../graphql-types';

interface Props {
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
  pageContext: SitePageContext;
}

function DefaultTemplate({ children, pageContext }: Props) {
  return (
    <Layout maxWidth="md" title={pageContext.frontmatter?.title ?? 'Title'}>
      <MDXProvider components={muiComponents}>{children}</MDXProvider>
    </Layout>
  );
}

export default DefaultTemplate;
