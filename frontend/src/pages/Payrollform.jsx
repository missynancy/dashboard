import React, { useState } from 'react';

const PayrollForm = ({ addPayroll }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [hoursWorked, setHoursWorked] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [deductions, setDeductions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const hours = parseFloat(hoursWorked);
    const rate = parseFloat(hourlyRate);
    const deduction = parseFloat(deductions);

    if (employeeId && employeeName && hours > 0 && rate > 0 && deduction >= 0) {
      addPayroll({ employeeId, employeeName, hoursWorked: hours, hourlyRate: rate, deductions: deduction });
      setEmployeeId('');
      setEmployeeName('');
      setHoursWorked('');
      setHourlyRate('');
      setDeductions('');
    } else {
      alert('Please enter valid payroll details.');
    }
  };

  return (
    <div className="home">
        <form onSubmit={handleSubmit}>
            <div>
                <label>Employee ID:</label>
                <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required />
            </div>
            <div>
                <label>Employee Name:</label>
                <input type="text" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} required />
            </div>
            <div>
                <label>Hours Worked:</label>
                <input type="number" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} required />
            </div>
            <div>
                <label>Hourly Rate ($):</label>
                <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} required />
            </div>
            <div>
                <label>Deductions ($):</label>
                <input type="number" value={deductions} onChange={(e) => setDeductions(e.target.value)} required />
            </div>
            <button type="submit">Add Payroll</button>
        </form>
    </div>
  );
};




export default PayrollForm;
