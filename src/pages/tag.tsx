import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import AppLink from 'gatsby-theme-aoi/src/components/AppLink';
import Jumbotron from '../components/Jumbotron';
import { AllTagQuery } from '../../graphql-types';

const useStyles = makeStyles((theme: Theme) => createStyles({
  tag: {
    marginRight: theme.spacing(1)
  }
}));

function TagPage() {
  const data = useStaticQuery<AllTagQuery>(graphql`
    query AllTag {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  const { group } = data.allMdx;
  const classes = useStyles();
  return (
    <Layout title="Tag" maxWidth="md" jumbotron={<Jumbotron title="Tag" />}>
      {group
        .sort((a, b) => b.totalCount - a.totalCount)
        .map((tag, index) => (
          <Typography key={index} component="span" className={classes.tag}>
            <AppLink to={`/tag/${tag.fieldValue}`}>
              {`#${tag.fieldValue}`}
            </AppLink>
          </Typography>
        ))}
    </Layout>
  );
}

export default TagPage;
