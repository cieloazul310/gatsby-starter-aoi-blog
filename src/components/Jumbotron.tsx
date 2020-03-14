import * as React from 'react';
import { makeStyles, createStyles, useTheme, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { MdxFrontmatter } from '../../graphql-types';

const useStyles = makeStyles<Theme, { bgImg: string }>((theme: Theme) =>
  createStyles({
    jumbotronBg: ({ bgImg }) => ({
      height: '100%',
      backgroundImage: bgImg ? `url(${bgImg})` : null,
      backgroundColor: bgImg ? null : theme.palette.type !== 'dark' ? theme.palette.secondary.light : theme.palette.background.paper,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      filter: bgImg ? 'blur(8px) brightness(0.8)' : null,
      transform: bgImg ? 'scale(1.1)' : null,
      transition: theme.transitions.create("background")
    }),
    jumbotronText: {
      height: 280,
      color: 'white',
      position: 'absolute',
      transform: 'translate(0, -100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 2,
      padding: theme.spacing(4)
    },
    jumbotronTitle: {
      fontWeight: 'bold'
    }
  })
);

interface Props {
  frontmatter: MdxFrontmatter;
}

function Jumbotron({ frontmatter: { title, date, subtitle, author, featuredImage } }: Props) {
  const classes = useStyles({ bgImg: featuredImage ? featuredImage.childImageSharp.fluid.src : null });

  return (
    <Box height={280} overflow="hidden">
      <Box className={classes.jumbotronBg} />
      <Box className={classes.jumbotronText}>
        <Typography variant="subtitle2">
          <time>{date}</time>  post by {author}
        </Typography>
        <Typography variant="h2" className={classes.jumbotronTitle}>
          {title}
        </Typography>
        {subtitle ? <Typography variant="subtitle1">{subtitle}</Typography> : null}
      </Box>
    </Box>
  );
}

export default Jumbotron;
