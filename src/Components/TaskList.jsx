import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, LinearProgress, AvatarGroup, Avatar, Paper } from '@mui/material';

const tasks = [
  { id: 1, task: 'Create branded collateral', due: 'Oct 30, 2023', members: [1, 2, 3, 4], progress: 25 },
  { id: 2, task: 'Develop brand guidelines document', due: 'Nov 04, 2023', members: [5, 6, 7], progress: 25 },
  { id: 3, task: 'Refine UX/UI for product pages', due: 'Nov 10, 2023', members: [8, 9, 10], progress: 10 },
  { id: 4, task: 'Collaborate on website redesign', due: 'Oct 23, 2023', members: [1, 2, 3, 4], progress: 100, completed: true },
  { id: 5, task: 'Conduct A/B testing on homepage', due: 'Oct 23, 2023', members: [7, 8], progress: 100, completed: true },
  { id: 6, task: 'Develop social-media graphics', due: 'Oct 30, 2023', members: [9, 10, 1], progress: 100, completed: true },
  { id: 7, task: 'Finalize logo variations', due: 'Nov 04, 2023', members: [2, 3, 4], progress: 100, completed: true },
];

const memberAvatars: { [key: number]: string } = {
  1: '/path/to/avatar1.jpg',
  2: '/path/to/avatar2.jpg',
  3: '/path/to/avatar3.jpg',
  4: '/path/to/avatar4.jpg',
  5: '/path/to/avatar5.jpg',
  6: '/path/to/avatar6.jpg',
  7: '/path/to/avatar7.jpg',
  8: '/path/to/avatar8.jpg',
  9: '/path/to/avatar9.jpg',
  10: '/path/to/avatar10.jpg',
};

const TaskTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Due</TableCell>
            <TableCell>Member</TableCell>
            <TableCell>Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Checkbox checked={task.completed || false} />
              </TableCell>
              <TableCell>
                {task.completed ? <del>{task.task}</del> : task.task}
              </TableCell>
              <TableCell>{task.due}</TableCell>
              <TableCell>
                <AvatarGroup max={4}>
                  {task.members.map((memberId) => (
                    <Avatar key={memberId} alt={`Member ${memberId}`} src={memberAvatars[memberId]} />
                  ))}
                </AvatarGroup>
              </TableCell>
              <TableCell>
                <LinearProgress variant="determinate" value={task.progress} color="secondary" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
