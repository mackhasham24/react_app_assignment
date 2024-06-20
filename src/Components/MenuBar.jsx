import React from 'react';
import { Box, Typography, Button, IconButton, InputBase, Paper, Card, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import WorkIcon from '@mui/icons-material/Work';

const MenuBar = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Monthly
        </Button>
        <Box>
          <Button variant="outlined" sx={{ mr: 2 }}>
            Export
          </Button>
          <Button variant="contained" color="secondary">
            + New entry
          </Button>
        </Box>
      </Box>
  );
}
export default MenuBar;