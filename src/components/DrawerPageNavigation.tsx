import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ListItemAppLink from 'gatsby-theme-aoi/src/components/ListItemAppLink';

interface Navigation {
  to: string;
  title: string;
}

interface Props {
  previous?: Navigation;
  next?: Navigation;
}

function DrawerPageNavigation({ previous, next }: Props) {
  return (
    <List subheader={<ListSubheader>Navigation</ListSubheader>}>
      {previous ? (
        <ListItemAppLink button to={previous.to}>
          <ListItemIcon>
            <ArrowBackIcon />
          </ListItemIcon>
          <ListItemText primary={previous.title} secondary="prev" />
        </ListItemAppLink>
      ) : null}
      {next ? (
        <ListItemAppLink button to={next.to}>
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
          <ListItemText primary={next.title} secondary="next" />
        </ListItemAppLink>
      ) : null}
    </List>
  );
}

export default DrawerPageNavigation;
