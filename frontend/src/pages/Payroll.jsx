import React, { useState, useEffect } from 'react';

const Payroll = ({ addPayroll }) => {

  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [hoursWorked, setHoursWorked] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [deductions, setDeductions] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const employeeData = {
      employeeId,
      employeeName,
      hoursWorked,
      hourlyRate,
      deductions,
    };

    localStorage.setItem('employeeData', JSON.stringify(employeeData));
    alert('Employee data saved!');
  };

  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('employeeData');

    if (storedData) {
      setEmployeeData(JSON.parse(storedData));
    }
  }, []);



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const hours = parseFloat(hoursWorked);
//     const rate = parseFloat(hourlyRate);
//     const deduction = parseFloat(deductions);

//     if (employeeId && employeeName && hours > 0 && rate > 0 && deduction >= 0) {
//       addPayroll({ employeeId, employeeName, hoursWorked: hours, hourlyRate: rate, deductions: deduction });
//       setEmployeeId('');
//       setEmployeeName('');
//       setHoursWorked('');
//       setHourlyRate('');
//       setDeductions('');
//     } else {
//       alert('Please enter valid payroll details.');
//     }
//   };

  return (
    <div className='home'>
      <div >
        <form onSubmit={handleSubmit} className='payroll-form'>
          <div className='form-group'>
            <label>Employee ID:</label>
            <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Employee Name:</label>
            <input type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Hours Worked:</label>
            <input type="number" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Hourly Rate ($):</label>
            <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} required />
          </div>
          <div className='form-group'>
            <label>Deductions ($):</label>
            <input type="number" value={deductions} onChange={(e) => setDeductions(e.target.value)} required />
          </div>
          <button type="submit" className='button-submit'>Add Payroll</button>
        </form>
      </div>

      <div>
          {employeeData ? (
            <div>
              <h2>User Information</h2>
              <p>Name: {employeeData.employeeId}</p>
              <p>Username: {employeeData.employeeName}</p>
              <p>Age: {employeeData.deductions}</p>
            </div>
          ) : (
            <p>No user data found</p>
          )}
      </div>

    </div>


  );
};

export default Payroll;
