import * as React from 'react';
import Box from '@material-ui/core/Box';
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export function AdInDrawer() {
  React.useEffect(() => {
    if (window) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  });
  return (
    <Box p={2} overflow="hidden">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7323207940463794"
        data-ad-slot="2525174843"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </Box>
  );
}

export function AdInArticle() {
  React.useEffect(() => {
    if (window) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  });
  return (
    <Box px={1} py={2} overflow="hidden">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-7323207940463794"
        data-ad-slot="9174058264"
      />
    </Box>
  );
}

export function AdInFooter() {
  React.useEffect(() => {
    if (window) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    }
  });
  return (
    <Box px={1} py={2} overflow="hidden">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7323207940463794"
        data-ad-slot="3332658358"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </Box>
  );
}
