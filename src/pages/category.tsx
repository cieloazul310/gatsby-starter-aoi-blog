import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import AppLink from 'gatsby-theme-aoi/src/components/AppLink';
import ListItemLink from 'gatsby-theme-aoi/src/components/ListItemLink';
import Jumbotron from '../components/Jumbotron';
import { CategoriesQuery } from '../../graphql-types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(4)
    },
    footer: {
      textAlign: 'right'
    }
  })
);

function CategoriesPage() {
  const data = useStaticQuery<CategoriesQuery>(graphql`
    query Categories {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/blog/" } }, sort: { fields: [frontmatter___date], order: DESC }) {
        group(field: frontmatter___categories, limit: 5) {
          fieldValue
          totalCount
          edges {
            node {
              frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
                author {
                  name
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `);
  const { group } = data.allMdx;
  const classes = useStyles();
  return (
    <Layout title="Category" jumbotron={<Jumbotron title="Category" />}>
      <List>
        {group
          .sort((a, b) => b.totalCount - a.totalCount)
          .map((category, i) => (
            <React.Fragment key={i}>
              <ListItem>
                <ListItemText
                  primary={
                    <AppLink to={`/category/${category.fieldValue}`} color="inherit">
                      {category.fieldValue}
                    </AppLink>
                  }
                  secondary={`${category.totalCount}posts`}
                />
              </ListItem>
              <List>
                {category.edges.map(({ node }, index) => (
                  <ListItemLink
                    className={classes.nested}
                    dense
                    key={index}
                    primaryText={node.frontmatter.title}
                    secondaryText={`${node.frontmatter.date} post by ${node.frontmatter.author.name}`}
                    to={node.fields.slug}
                    divider
                  />
                ))}
                <ListItemLink className={classes.footer} primaryText="More" to={`/category/${category.fieldValue}`} color="secondary" />
              </List>
            </React.Fragment>
          ))}
      </List>
    </Layout>
  );
}

export default CategoriesPage;
