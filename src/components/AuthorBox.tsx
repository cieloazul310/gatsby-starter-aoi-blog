import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/Github';
import PublicIcon from '@material-ui/icons/Public';
import { AuthorsJson } from '../../graphql-types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper
    },
    item: {
      marginRight: theme.spacing(0.5),
      verticalAlign: 'sub'
    }
  })
);

interface Props {
  author: Pick<AuthorsJson, 'id' | 'name' | 'url' | 'twitter' | 'github'>;
}

function AuthorBox({ author: { name, url, twitter, github } }: Props) {
  const classes = useStyles();
  return (
    <Box py={4}>
      <Box p={4} className={classes.root}>
        <Typography variant="h6" component="small">
          author: {name}
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
        </Typography>
      </Box>
    </Box>
  );
}

export default AuthorBox;
