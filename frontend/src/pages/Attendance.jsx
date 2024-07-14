// src/components/Attendance.js
// import React, { useState, useEffect } from 'react';
// import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
// import attendanceService from '../services/attendanceService';

// const Attendance = () => {
//   const [attendance, setAttendance] = useState([]);

//   useEffect(() => {
//     const fetchAttendance = async () => {
//       const data = await attendanceService.getAll();
//       setAttendance(data);
//     };
//     fetchAttendance();
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h4">Attendance</Typography>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Employee ID</TableCell>
//             <TableCell>Date</TableCell>
//             <TableCell>Status</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {attendance.map((record) => (
//             <TableRow key={record.id}>
//               <TableCell>{record.employeeId}</TableCell>
//               <TableCell>{record.date}</TableCell>
//               <TableCell>{record.status}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Container>
//   );
// };

// export default Attendance;
