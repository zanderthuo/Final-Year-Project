import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {Link} from 'react-router-dom';

import TvIcon from '@material-ui/icons/Tv';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import HeadsetIcon from '@material-ui/icons/Headset';
import SpeakerIcon from '@material-ui/icons/Speaker';
import SmartphoneIcon from '@material-ui/icons/Smartphone';

import '../styles/NavMenu.css'

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  navLink: {
    textDecoration: 'none',
    color: 'black'
  }
});


const NavMenu = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h3>Categories</h3>
          <Divider />
        <Link className={classes.navLink} to="/tv">
          <ListItem button>
            <ListItemIcon>
              <TvIcon />
            </ListItemIcon>
            <ListItemText primary="TVs" />
          </ListItem>
        </Link>

        <Link to="/camera" className={classes.navLink}>
          <ListItem button>
            <ListItemIcon>
              <CameraAltIcon />
            </ListItemIcon>
            <ListItemText primary="Cameras" />
          </ListItem>
        </Link>

        <Link to="/smartphones" className={classes.navLink}>
          <ListItem button>
            <ListItemIcon>
              <SmartphoneIcon />
            </ListItemIcon>
            <ListItemText primary="Smartphones" />
          </ListItem>
        </Link>

        <Link to="/headphones" className={classes.navLink}>
          <ListItem button>
            <ListItemIcon>
              <HeadsetIcon />
            </ListItemIcon>
            <ListItemText primary="HeadPhones" />
          </ListItem>
        </Link>

        <Link to="/speakers_hometheatres" className={classes.navLink}>
          <ListItem button>
            <ListItemIcon>
              <SpeakerIcon />
            </ListItemIcon>
            <ListItemText primary="Speakers & Home Theatres" />
          </ListItem>
        </Link>

      </List>
      <Divider />
    </div>
  );

  return (
    <div className="navMenu">
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>

          <MenuIcon className="header__nav__menu__icon" onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

export default NavMenu
