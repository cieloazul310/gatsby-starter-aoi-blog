import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { AuthorsJson } from '../../graphql-types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  })
);

interface Props {
  author: AuthorsJson;
}

function InlineAuthor({ author: { name } }: Props) {
  const classes = useStyles();
  return (
    <span>
      <span className={classes.title}>posted by {name}</span>
    </span>
  );
}

export default InlineAuthor;
