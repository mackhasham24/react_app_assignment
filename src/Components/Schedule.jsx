import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@mui/styles';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Typography
} from "@mui/material";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableCell: {
    borderRight: '1px solid rgba(224, 224, 224, 1)',
    padding: '8px',
    height: '50px',
  },
  eventCell: {
    padding: '4px',
    fontSize: '0.8rem',
  },
});

const Schedule = () => {
  const classes = useStyles();

  const timeSlots = ['9 AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];
  const days = ['MON 20', 'TUE 21', 'WED 22', 'THU 23', 'FRI 24'];

  const events = [
    { day: 'MON 20', time: '10 AM', event: 'Onboarding Session', color: '#FFCCCB' },
    { day: 'MON 20', time: '12 AM', event: 'Lunch break', color: '#E6E6FA' },
    { day: 'MON 20', time: '2 PM', event: 'Town Hall Meeting', color: '#90EE90' },
    { day: 'TUE 21', time: '11 AM', event: 'Monthly Performance', color: '#ADD8E6' },
    { day: 'TUE 21', time: '1 PM', event: 'Lunch break', color: '#E6E6FA' },
    { day: 'TUE 21', time: '3 PM', event: 'Benefits Orientation', color: '#90EE90' },
    { day: 'TUE 21', time: '4 PM', event: 'Recruitment Strategy', color: '#FFCCCB' },
    { day: 'WED 22', time: '9 AM', event: 'Interview with D...', color: '#ADD8E6' },
    { day: 'WED 22', time: '12 AM', event: 'Lunch break', color: '#E6E6FA' },
    { day: 'THU 23', time: '10 AM', event: 'Interview for ma...', color: '#ADD8E6' },
    { day: 'THU 23', time: '1 PM', event: 'Lunch break', color: '#E6E6FA' },
    { day: 'THU 23', time: '5 PM', event: 'Department Hea...', color: '#ADD8E6' },
    { day: 'FRI 24', time: '11 AM', event: 'Project Kickoff', color: '#90EE90' },
    { day: 'FRI 24', time: '12 AM', event: 'Lunch break', color: '#E6E6FA' },
    { day: 'FRI 24', time: '3 PM', event: 'Performance Re...', color: '#90EE90' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="schedule table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>TIME</TableCell>
            {days.map((day) => (
              <TableCell key={day} align="center" className={classes.tableCell}>
                {day}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {timeSlots.map((time) => (
            <TableRow key={time}>
              <TableCell component="th" scope="row" className={classes.tableCell}>
                {time}
              </TableCell>
              {days.map((day) => (
                <TableCell key={`${day}-${time}`} className={classes.tableCell}>
                  {events.filter(event => event.day === day && event.time === time).map((event, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      style={{ backgroundColor: event.color }}
                      className={classes.eventCell}
                    >
                      {event.event}
                    </Typography>
                  ))}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Schedule;