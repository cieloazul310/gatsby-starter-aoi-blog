import * as React from 'react';
import { graphql } from 'gatsby';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import Jumbotron from '../components/Jumbotron';
import ArchiveList from '../components/ArchiveList';
import PageNavigation from '../components/PageNavigation';
import BlogListTemplate from './blog-list';
import { ArchiveIcon } from '../icons';
import { MonthlyQuery, SitePageContext } from '../../graphql-types';

interface DrawerArchiveProps {
  current?: string;
}

function DrawerArchive({ current }: DrawerArchiveProps) {
  const [open, setOpen] = React.useState(true);
  const _onClick = () => {
    setOpen(!open);
  };
  return (
    <List>
      <ListItem button onClick={_onClick}>
        <ListItemIcon>
          <ArchiveIcon />
        </ListItemIcon>
        <ListItemText primary="Archive" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open}>
        <ArchiveList button inset current={current} />
      </Collapse>
    </List>
  );
}

interface Props {
  data: MonthlyQuery;
  pageContext: SitePageContext;
}

function MonthlyTemplate({ data, pageContext }: Props) {
  const { edges } = data.allMdx;
  const { numPages, currentPage, year, month, type, previous, next } = pageContext;
  return (
    <Layout
      title={`${year}/${month}`}
      maxWidth="md"
      jumbotron={<Jumbotron title={`${year}/${month}`} header={type ?? 'Archive'} subtitle={`${edges.length} posts`} />}
      drawerContents={<DrawerArchive current={`${year}/${month}`} />}
    >
      <BlogListTemplate edges={edges} numPages={numPages ?? 0} currentPage={currentPage ?? 0} basePath={`/blog/${year}/${month}`} />
      <PageNavigation
        previous={previous ? { to: `/blog/${previous.year}/${previous.month}`, title: `${previous.year}/${previous.month}` } : undefined}
        next={next ? { to: `/blog/${next.year}/${next.month}`, title: `${next.year}/${next.month}` } : undefined}
        center={{ to: '/archive/', title: 'Archive' }}
      />
    </Layout>
  );
}

export default MonthlyTemplate;

export const query = graphql`
  query Monthly($gte: Date!, $lt: Date!, $skip: Int!, $limit: Int!) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/blog/" }, frontmatter: { date: { gte: $gte, lt: $lt } } }
      sort: { order: DESC, fields: frontmatter___date }
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
