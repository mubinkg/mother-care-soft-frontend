"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
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
                  <Link style={{textDecoration: "none" , fontWeight: "bold", fontSize: "20px", textAlign:"center"}} href='users'>
                      <ListItemButton sx={{width: "230px", textAlign:"center"}}>
                        User List
                      </ListItemButton>
                  </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    
    </Box>
  );
}
