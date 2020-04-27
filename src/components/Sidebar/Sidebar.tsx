import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ExtensionIcon from '@material-ui/icons/Extension';

import { useStyles } from './Sidebar.styles';

export default function Sidebar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState('');


  const toggleSlider = (slider: string) => () => {
    if (open) {
      setOpen('');
    } else {
      setOpen(slider);
    }
  };

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <List>
          {[
            { Icon: ProfileIcon, text: 'Profile' }
          ].map(({ Icon, text }) => (
            <ListItem button key={text}>
              <ListItemIcon onClick={toggleSlider(text)}>
                <Icon />
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {[
            { Icon: ExtensionIcon, text: 'Extensions' },
            { Icon: PlayArrowIcon, text: 'Start session' },
          ].map(({ Icon, text }) => (
            <ListItem button key={text}>
              <ListItemIcon onClick={toggleSlider(text)}>
                <Icon />
              </ListItemIcon>

              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
