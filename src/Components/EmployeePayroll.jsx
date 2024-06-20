import React from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Avatar, Typography, Box, Card, CardContent, Grid
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const employees = [
  { name: 'Darrel Steward', id: '#E3041', email: 'darrelste@mail.com', role: 'Sr. Project Manager', status: 'Active' },
  { name: 'Wade Warren', id: '#E3042', email: 'wadewarr@mail.com', role: 'Jr. Developer', status: 'Active' },
  { name: 'Jerome Bell', id: '#E3043', email: 'jeromebell@mail.com', role: 'Sr. Human Resources', status: 'Active' },
  { name: 'Marvin McKinney', id: '#E3043', email: 'marvinmck@mail.com', role: 'Sr. Developer', status: 'Active' },
  { name: 'Brooklyn Simmons', id: '#E3044', email: 'brooklynsimm@mail.com', role: 'Sr. Product Designer', status: 'Active' },
];

const payrolls = [
  { title: 'Total payrolls', value: 268, icon: '🏢' },
  { title: 'Draft', value: 13, icon: '📄' },
  { title: 'Overdue', value: 7, icon: '🔒' },
  { title: 'Failed', value: 5, icon: '📃' },
  { title: 'Scheduled', value: 24, icon: '📅' },
  { title: 'Paid', value: 312, icon: '✓' },
];

const EmployeePayroll = () => {
  return (
    <Box sx={{ padding: 3 }}>
      

      <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2, textAlign: "left" }}>Employee payrolls</Typography>
      <Grid container spacing={2}>
        {payrolls.map((payroll) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={payroll.title}>
            <Card sx={{ minWidth: '110px', }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {payroll.icon} {payroll.value}
                </Typography>
                <Typography color="text.secondary">
                  {payroll.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EmployeePayroll;