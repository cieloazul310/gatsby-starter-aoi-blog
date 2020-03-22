import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box, { BoxProps } from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
import AppLink from 'gatsby-theme-aoi/src/components/AppLink';
import { AuthorIcon } from '../icons';
import { AuthorsJson } from '../../graphql-types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(9),
      height: theme.spacing(9)
    },
    item: {
      marginRight: theme.spacing(1),
    }
  })
);

type Props = {
  author: Pick<AuthorsJson, 'id' | 'name' | 'url' | 'twitter' | 'github' | 'description' | 'avatar'>;
  disableLink?: boolean;
} & BoxProps;

function AuthorBox({ author: { name, url, twitter, github, avatar, description }, disableLink = false, ...props }: Props) {
  const classes = useStyles();
  const img = avatar && avatar.childImageSharp ? avatar.childImageSharp.fluid.src : null;

  return (
    <Box display="flex" alignItems="center" {...props}>
      <Avatar className={classes.avatar} alt={name} src={img}>
        {!img ? <AuthorIcon /> : null}
      </Avatar>
      <Box display="flex" flexDirection="column" pl={2}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
        <Typography variant="body2">
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
              <GitHubIcon />
            </MuiLink>
          ) : null}
        </Typography>
        {!disableLink ? (
          <Typography variant="body2">
            <AppLink to={`/author/${name}`}>記事一覧へ</AppLink>
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
}

export default AuthorBox;
