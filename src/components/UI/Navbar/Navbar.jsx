import React from 'react'
import { ReactDOM } from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MyButton from '../button/MyButton';

function Navbar() {
    return (
        <Box >
      <AppBar position="static" sx={{
        background:'#fdfdfd',
      }}>
        <Toolbar sx={{
            display:'flex',
            alignItems:'center',
            display:'flex',
        }}>
            <Link  to={'/'} ><MyButton variant="text">Main </MyButton></Link>
            <Link  to={'/about'} ><MyButton variant="text">About </MyButton></Link>
            <Link  to={'/Posts'} ><MyButton variant="text">Posts </MyButton></Link>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Navbar
