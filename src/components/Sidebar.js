import React from 'react'
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

import '../styles/Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <h3>Categories</h3>
          <Divider />
        <Link  to="/tv">
          <ListItem className="sidebar__category" button>
            <ListItemIcon>
              <TvIcon />
            </ListItemIcon>
            <ListItemText primary="TVs" />
          </ListItem>
        </Link>

        <Link to="/camera" >
          <ListItem className="sidebar__category" button>
            <ListItemIcon>
              <CameraAltIcon />
            </ListItemIcon>
            <ListItemText primary="Cameras" />
          </ListItem>
        </Link>

        <Link to="/smartphones" >
          <ListItem className="sidebar__category" button>
            <ListItemIcon>
              <SmartphoneIcon />
            </ListItemIcon>
            <ListItemText primary="Smartphones" />
          </ListItem>
        </Link>

        <Link to="/headphones" >
          <ListItem className="sidebar__category" button>
            <ListItemIcon>
              <HeadsetIcon />
            </ListItemIcon>
            <ListItemText primary="HeadPhones" />
          </ListItem>
        </Link>

        <Link to="/speakers_hometheatres" >
          <ListItem className="sidebar__category" button>
            <ListItemIcon>
              <SpeakerIcon />
            </ListItemIcon>
            <ListItemText primary="Speakers & Home Theatres" />
          </ListItem>
        </Link>

      </List>
    </div>
  )
}

export default Sidebar
