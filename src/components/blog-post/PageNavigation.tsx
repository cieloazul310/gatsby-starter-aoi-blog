import * as React from 'react';
import PageNavigation from '../PageNavigation';
import { SitePageContext } from '../../../graphql-types';

type Props = Pick<SitePageContext, 'previous' | 'next'>;

function BlogPostPageNavigation({ previous, next }: Props) {
  return (
    <PageNavigation
      previous={previous ? { to: previous?.fields?.slug ?? '#', title: previous?.frontmatter?.title ?? 'Title' } : undefined}
      next={next ? { to: next?.fields?.slug ?? '#', title: next?.frontmatter?.title ?? 'Title' } : undefined}
      center={{ to: '/blog/', title: 'All Posts' }}
    />
  );
}

export default BlogPostPageNavigation;
