import React from "react";
import logo from "./logo.svg";
import Container from "@mui/material/Container";
// import Grid from '@mui/material/Grid';
import TaskList from "./Components/TaskList";
import Schedule from "./Components/Schedule";
import TopBar from "./Components/TopBar";
import Employees from "./Components/Employees";
import EmployeePayroll from "./Components/EmployeePayroll";
import SideBar from "./Components/SideBar";

import Box from "@mui/material/Box";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Paper,
} from "@mui/material";

import "./App.css";
import Sidebar from "./Components/SideBar";


function App() {
  return (
    <div className="App">
      <Box style={{background: '#EEE'}} sx={{ flexGrow: 1 }} >
        <Grid container spacing={2}>
          <Grid item xs={0} md={4}>
            <Sidebar />
          </Grid>
          <Grid component={Paper} item xs={12} md={8} p={3}>
            <TopBar />

            <Grid container spacing={2} p={1}>
              
              <Grid container xs={12}>
              </Grid>
              <Grid item xs={12} md={6}>
                <TaskList />
              </Grid>
              <Grid item xs={12} md={6}>
                <Schedule />
              </Grid>
            </Grid>
            <Grid container p={3} spacing={2}>
            <Employees />
            </Grid>
            <Grid container p={3} spacing={2}>
            <EmployeePayroll />
            </Grid>
          </Grid>
          {/* <Grid item xs={12}> */}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
