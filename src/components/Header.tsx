"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from './Navbar';

export default function Header() {

  return (
    <>
    <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <ResponsiveAppBar/>
      </AppBar>
    </>
  );
}
