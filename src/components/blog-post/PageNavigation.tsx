import * as React from 'react';
import PageNavigation from '../PageNavigation';
import { SitePageContext } from '../../../graphql-types';

type Props = Pick<SitePageContext, 'previous' | 'next'>;

function BlogPostPageNavigation({ previous, next }: Props) {
  return (
    <PageNavigation
      previous={previous ? { to: previous.fields.slug, title: previous.frontmatter.title } : null}
      next={next ? { to: next.fields.slug, title: next.frontmatter.title } : null}
      center={{ to: '/blog/', title: 'All Posts' }}
    />
  );
}

export default BlogPostPageNavigation;
