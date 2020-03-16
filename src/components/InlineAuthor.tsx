import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MuiLink from '@material-ui/core/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/Github';
import PublicIcon from '@material-ui/icons/Public';

import { AuthorsJson } from '../../graphql-types';

const useStyles = makeStyles((theme: Theme) => createStyles({
  title: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  item: {
    marginRight: theme.spacing(.5),
    verticalAlign: 'sub'
  }
}));

interface Props {
  author: AuthorsJson;
}

function InlineAuthor({ author }: Props) {
  const classes = useStyles();
  const { name, twitter, github, url } = author;
  return (
    <span>
      <span className={classes.title}>
        posted by <strong>{name}</strong>
      </span>
      {twitter ? (
        <MuiLink className={classes.item} href={`https://twitter.com/${twitter}`} color="inherit">
          <TwitterIcon />
        </MuiLink>
      ) : null}
      {url ? (
        <MuiLink className={classes.item} href={url} color="inherit">
          <PublicIcon />
        </MuiLink>
      ) : null}
      {github ? (
        <MuiLink className={classes.item} href={`https://github.com/${github}`} color="inherit">
          <GithubIcon />
        </MuiLink>
      ) : null}
    </span>
  );
}

export default InlineAuthor;
