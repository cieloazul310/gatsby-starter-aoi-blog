import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemLink from 'gatsby-theme-aoi/src/components/ListItemLink';
import { useAllMonths } from '../utils/useAllPosts';

interface Props {
  current?: string;
  button?: boolean;
  inset?: boolean;
  subheader?: boolean;
}

function ArchiveList({ current, subheader = false, button = false, inset = false }: Props) {
  const allMonths = useAllMonths();

  return (
    <List subheader={subheader ? <ListSubheader>Archive</ListSubheader> : undefined}>
      {allMonths.map((item) => (
        <ListItemLink
          key={item.key}
          to={`/blog/${item.year}/${item.month}`}
          primaryText={item.key}
          secondaryText={`${item.totalCount} posts`}
          button={button}
          inset={inset}
          selected={item.key === current}
        />
      ))}
    </List>
  );
}

export default ArchiveList;
