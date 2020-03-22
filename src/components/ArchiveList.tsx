import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemLink from 'gatsby-theme-aoi/src/components/ListItemLink';
import { useAllMonths } from '../utils/useAllPosts';

interface Props {
  button?: boolean;
  inset?: boolean;
}

function ArchiveList({ button = false, inset = false }: Props) {
  const allMonths = useAllMonths();
  return (
    <List subheader={<ListSubheader>Archive</ListSubheader>}>
      {allMonths.map(item => (
        <ListItemLink
          key={item.key}
          to={`/blog/${item.year}/${item.month}`}
          primaryText={item.key}
          secondaryText={`${item.totalCount} posts`}
          button={button}
          inset={inset}
        />
      ))}
    </List>
  );
}

export default ArchiveList;
