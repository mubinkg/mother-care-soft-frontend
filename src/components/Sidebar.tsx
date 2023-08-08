"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
    
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['User List'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <Link style={{textDecoration: "none" , fontWeight: "bold", fontSize: "20px"}} href='users'>User List</Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    
    </Box>
  );
}
