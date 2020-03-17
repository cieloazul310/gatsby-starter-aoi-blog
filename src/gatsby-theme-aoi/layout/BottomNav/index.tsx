import * as React from 'react';
import { navigate, withPrefix } from 'gatsby';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// icons
import Home from '@material-ui/icons/Home';
import SubjectIcon from '@material-ui/icons/Subject';
import { useLocation } from '@reach/router';

function BottomNav() {
  const { pathname } = useLocation();
  const _onChange = (event: React.ChangeEvent, value: string) => {
    navigate(value.replace(withPrefix(''), ''));
  };
  return (
    <BottomNavigation component="nav" value={pathname} onChange={_onChange} showLabels>
      <BottomNavigationAction label="Top" value={withPrefix('/')} icon={<Home />} />
      <BottomNavigationAction label="All Posts" value={withPrefix('/blog/')} icon={<SubjectIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
