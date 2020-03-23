import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvater from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avater from '@material-ui/core/Avatar';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import AppLink from 'gatsby-theme-aoi/src/components/AppLink';
import ListItemLink from 'gatsby-theme-aoi/src/components/ListItemLink';
import Jumbotron from '../components/Jumbotron';
import { AuthorIcon } from '../icons';
import { AuthorsQuery } from '../../graphql-types';

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

function AuthorsPage() {
  const data = useStaticQuery<AuthorsQuery>(graphql`
    query Authors {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/blog/" } }, sort: { fields: [frontmatter___date], order: DESC }) {
        group(field: frontmatter___author___name, limit: 5) {
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
      allAuthorsJson {
        edges {
          node {
            name
            avatar {
              childImageSharp {
                fluid(maxWidth: 240) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);
  const { group } = data.allMdx;
  const authors = data.allAuthorsJson.edges;
  const classes = useStyles();
  return (
    <Layout title="Author" maxWidth="md" jumbotron={<Jumbotron title="Author" />}>
      <List>
        {group
          .sort((a, b) => b.totalCount - a.totalCount)
          .map((author, i) => {
            const authorJson = authors[authors.map(({ node }) => node.name).indexOf(author.fieldValue)].node;
            return (
              <React.Fragment key={i}>
                <ListItem>
                  <ListItemAvater>
                    <Avater src={authorJson.avatar ? authorJson.avatar.childImageSharp.fluid.src : null} alt={author.fieldValue}>
                      {!authorJson.avatar ? <AuthorIcon /> : null}
                    </Avater>
                  </ListItemAvater>
                  <ListItemText
                    primary={
                      <AppLink to={`/author/${author.fieldValue}`} color="inherit">
                        {author.fieldValue}
                      </AppLink>
                    }
                    secondary={`${author.totalCount}posts`}
                  />
                </ListItem>
                <List>
                  {author.edges.map(({ node }, index) => (
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
                  <ListItemLink className={classes.footer} primaryText="More" to={`/author/${author.fieldValue}`} color="secondary" />
                </List>
              </React.Fragment>
            );
          })}
      </List>
    </Layout>
  );
}

export default AuthorsPage;
