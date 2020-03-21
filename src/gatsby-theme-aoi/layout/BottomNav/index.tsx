import * as React from 'react';
import { navigate, withPrefix } from 'gatsby';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useLocation } from '@reach/router';
// icons
import { HomeIcon, AllPostsIcon, CategoryIcon, AuthorIcon } from '../../../icons';

function BottomNav() {
  const { pathname } = useLocation();
  const _onChange = (event: React.ChangeEvent, value: string) => {
    navigate(value.replace(withPrefix(''), ''));
  };
  return (
    <BottomNavigation value={pathname} onChange={_onChange} showLabels>
      <BottomNavigationAction label="Top" value={withPrefix('/')} icon={<HomeIcon />} />
      <BottomNavigationAction label="All Posts" value={withPrefix('/blog/')} icon={<AllPostsIcon />} />
      <BottomNavigationAction label="Category" value={withPrefix('/category/')} icon={<CategoryIcon />} />
      <BottomNavigationAction label="Author" value={withPrefix('/author/')} icon={<AuthorIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
