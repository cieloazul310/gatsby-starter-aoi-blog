import * as React from 'react';
import MuiLink from '@material-ui/core/Link';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PublicIcon from '@material-ui/icons/Public';

import { AuthorsJson } from '../../graphql-types';

interface Props {
  author: AuthorsJson;
}

function InlineAuthor({ author }: Props) {
  const { name, twitter, facebook, url } = author;
  return (
    <span>
      posted by <strong>{name}</strong>{' '}
      {twitter ? (
        <MuiLink href={`https://twitter.com/${twitter}`} color="inherit">
          <TwitterIcon />
        </MuiLink>
      ) : null}
      {facebook ? (
        <MuiLink href={`https://www.facebook.com/${facebook}`} color="inherit">
          <FacebookIcon />
        </MuiLink>
      ) : null}
      {url ? (
        <MuiLink href={url} color="inherit">
          <PublicIcon />
        </MuiLink>
      ) : null}
    </span>
  );
}

export default InlineAuthor;
