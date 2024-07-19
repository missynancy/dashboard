import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, TextField, MenuItem, Select, FormControl, InputLabel, CircularProgress } from '@mui/material';
import attendanceService from './Services';
import Index from '../components/Index';

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [statusFilter, setStatusFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAttendance = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await attendanceService.getDailyAttendance(date);
        console.log('Fetched data:', data);
        setAttendance(data);
      } catch (error) {
        console.error('Failed to fetch daily attendance data:', error);
        setError('Failed to fetch daily attendance data');
      } finally {
        setLoading(false);
      }
    };
    fetchAttendance();
  }, [date]);

  const filteredAttendance = attendance.filter(record => 
    statusFilter ? record.status === statusFilter : true
  );

  return (
    <>
      <Index />
      <div className="home">
        <Container style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px'
        }}>
          <Typography variant="h4">Daily Attendance</Typography>
          <div style={{
            width: '80%',
            alignItems:'center',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <TextField
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                style={{
                marginBottom: '20px',
                marginTop: '20px',
                boxShadow: '0 0 25px green',
                border: 'none'
                }}
            />
            <FormControl fullWidth style={{
                                                boxShadow: '0 0 25px green',
                                                width: '300px',
                                                border: 'none'
                                            }}>
                <InputLabel>Status</InputLabel>
                <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                label="Status"
                >
                <MenuItem value=""><em>All</em></MenuItem>
                <MenuItem value="Present">Present</MenuItem>
                <MenuItem value="Absent">Absent</MenuItem>
                <MenuItem value="Late">Late</MenuItem>
                </Select>
            </FormControl>
          </div>
          {loading ? (
            <CircularProgress />
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Employee ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Department</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredAttendance.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No records found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredAttendance.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.employeeId}</TableCell>
                      <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
                      <TableCell>{record.status}</TableCell>
                      <TableCell>{record.department}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          )}
        </Container>
      </div>
    </>
  );
};

export default Attendance;
