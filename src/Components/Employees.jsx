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

const EmployeeDashboard = () => {
  return (
    <Box component={Paper} sx={{  borderRadius:'10px',  width: '100%' }}>
      <Typography variant="h5" sx={{ padding: 2, marginBottom: 2, textAlign: "left" }}>Employees</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>EMPLOYEE NAME</TableCell>
              <TableCell>EMPLOYMENT ID</TableCell>
              <TableCell>EMAIL</TableCell>
              <TableCell>ROLE</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ marginRight: 1 }} />
                    {employee.name}
                  </Box>
                </TableCell>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircleOutlineIcon color="success" sx={{ marginRight: 0.5 }} />
                    {employee.status}
                  </Box>
                </TableCell>
                <TableCell>
                  <KeyboardArrowDownIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EmployeeDashboard;