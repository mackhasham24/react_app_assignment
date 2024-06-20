import React from 'react';
import { Box, Typography, Button, IconButton, InputBase, Paper, Card, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import WorkIcon from '@mui/icons-material/Work';
import MenuBar from "./MenuBar";
import InfoCards from "./InfoCards";

const TopBar = () => {
  return (
    <Box >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography sx={{textAlign: 'left'}} variant="h6">Good morning, Dean!</Typography>
        <Box display="flex" alignItems="center">
          <Paper component="form" sx={{ display: 'flex', alignItems: 'center', mr: 2, pl: 1 }}>
            <SearchIcon />
            <InputBase placeholder="Quick search" sx={{ ml: 1 }} />
          </Paper>
          <IconButton>
            <CalendarTodayIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Box>
      <MenuBar />
      <InfoCards />
    </Box>
  )};

export default TopBar;