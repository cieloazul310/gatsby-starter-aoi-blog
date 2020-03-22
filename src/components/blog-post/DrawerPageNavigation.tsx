import * as React from 'react';
import DrawerPageNavigation from '../DrawerPageNavigation';
import { SitePageContext } from '../../../graphql-types';

type Props = Pick<SitePageContext, 'previous' | 'next'>;

function BlogPostDrawerPageNavigation({ previous, next }: Props) {
  return (
    <DrawerPageNavigation
      previous={previous ? { to: previous.fields.slug, title: previous.frontmatter.title } : null}
      next={next ? { to: next.fields.slug, title: next.frontmatter.title } : null}
    />
  );
}

export default BlogPostDrawerPageNavigation;
