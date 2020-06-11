import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AppLink from 'gatsby-theme-aoi/src/components/AppLink';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      marginRight: theme.spacing(1),
    },
  })
);

interface Props {
  date: string;
  categories: string[];
  tags?: string[];
}

function BlogPostFooter({ date, categories, tags }: Props) {
  const classes = useStyles();
  return (
    <Box py={4}>
      <Typography>Date: {date}</Typography>
      {categories && categories.length ? (
        <Typography>
          Category:{' '}
          {categories.map((category, index) => (
            <AppLink key={category} className={classes.link} to={`/category/${category}`}>
              {category}
            </AppLink>
          ))}
        </Typography>
      ) : null}
      {tags && tags.length ? (
        <Typography>
          Tags:{' '}
          {tags.map((tag) => (
            <AppLink key={tag} className={classes.link} to={`/tag/${tag}`}>{`#${tag}`}</AppLink>
          ))}
        </Typography>
      ) : null}
    </Box>
  );
}

export default BlogPostFooter;
