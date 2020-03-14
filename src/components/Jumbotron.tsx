import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';

interface Props {
  title: string;
  subtitle?: string;
}

function Jumbotron({ title, subtitle }: Props) {
  const paletteType = useTheme().palette.type;
  return (
    <Box
      height={280}
      p={4}
      bgcolor={paletteType === 'dark' ? 'background.paper' : 'secondary.light'}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      {subtitle ? <Typography variant="subtitle1">{subtitle}</Typography> : null}
      <Typography variant="h2">{title}</Typography>
    </Box>
  );
}

export default Jumbotron;
