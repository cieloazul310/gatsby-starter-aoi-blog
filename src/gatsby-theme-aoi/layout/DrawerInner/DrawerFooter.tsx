import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function DrawerFooter() {
  return (
    <div>
      <Box px={2} py={4}>
        <Typography variant="subtitle2" gutterBottom>
          Gatsby Theme Aoi Blog
        </Typography>
        <Typography variant="body2" paragraph>
          Gatsby Theme Aoi by cieloazul310
        </Typography>
      </Box>
    </div>
  );
}

export default DrawerFooter;
