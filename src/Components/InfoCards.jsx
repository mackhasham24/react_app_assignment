import React from 'react';
import { Box, Typography, Button, IconButton, InputBase, Paper, Card, CardContent } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import WorkIcon from '@mui/icons-material/Work';
import {
  Grid,
} from "@mui/material";

const InfoCards = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Grid container spacing={2}>
<Grid item xs={12} sm={6} md={3}>
        <InfoCard 
          icon={<PersonIcon />}
          title="Total employee"
          value="234"
          change="+5% last month"
        />
        </Grid>

<Grid item xs={12} sm={6} md={3}>
<InfoCard
          icon={<PersonAddIcon />}
          title="New employee"
          value="42"
          change="+5% last month"
        />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <InfoCard
          icon={<PersonRemoveIcon />}
          title="Resigned employee"
          value="12"
          change="+2% last month"
        />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <InfoCard
          icon={<WorkIcon />}
          title="Job applicants"
          value="367"
          change="+10% last month"
        />
        </Grid>
      </Grid>
       
      </Box>
  );
}

const InfoCard = ({ icon, title, value, change }) => {
  return (
    <Card sx={{ flex: 1, m: 1 }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={1}>
          {icon}
          <Typography variant="subtitle1" ml={1}>
            {title}
          </Typography>
        </Box>
        <Typography variant="h4" mb={1}>
          {value}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {change}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default InfoCards;