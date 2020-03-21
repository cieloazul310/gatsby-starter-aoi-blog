import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(1)
    }
  })
);

interface Props {
  avatar?: string;
  title: string;
}

function JumbotronAvatarTitle({ avatar, title }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {avatar ? <Avatar className={classes.avatar} alt={title} src={avatar} /> : null}
      <span>
        {title}
      </span>
    </div>
  );
}

export default JumbotronAvatarTitle;
