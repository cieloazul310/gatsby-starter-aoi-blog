import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import List from '@material-ui/core/List';
import Layout from 'gatsby-theme-aoi/src/layouts/JumbotronLayout';
import ListItemLink from 'gatsby-theme-aoi/src/components/ListItemLink';
import Jumbotron from '../components/Jumbotron';
import { CategoriesQuery } from '../../graphql-types';

function CategoriesPage() {
  const data = useStaticQuery<CategoriesQuery>(graphql`
    query Categories {
      allMdx {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `);
  const { group } = data.allMdx;
  return (
    <Layout title="Categories" jumbotron={<Jumbotron title="Categories" />} >
      <List>
        {group
          .sort((a, b) => b.totalCount - a.totalCount)
          .map((d, i) => (
            <ListItemLink key={i} primaryText={d.fieldValue} secondaryText={`${d.totalCount}posts`} to="#" divider />
          ))}
      </List>
    </Layout>
  );
}

export default CategoriesPage;
