import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import { MDXProvider } from '@mdx-js/react';
import muiComponents from '../utils/muiComponents';
import { SitePageContext } from '../../graphql-types';

interface Props {
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
  pageContext: SitePageContext;
}

function BlogPostTemplate({ children, pageContext }: Props) {
  const paletteType = useTheme().palette.type;
  const { title, date } = pageContext.frontmatter;
  const jumbotron = (
    <Box height={280} p={4} bgcolor={paletteType === 'dark' ? 'background.paper' : 'secondary.light'} display="flex" flexDirection="column" justifyContent="center">
      <Typography variant="subtitle1">{date}</Typography>
      <Typography variant="h2">{title}</Typography>
    </Box>
  );
  return (
    <Layout maxWidth="md" disableDrawer title={pageContext.frontmatter.title} jumbotron={jumbotron}>
      <MDXProvider components={muiComponents}>{children}</MDXProvider>
    </Layout>
  );
}

export default BlogPostTemplate;
