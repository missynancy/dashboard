import React, { useState } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx'
import Employee from './pages/Employee.jsx'
import Payroll  from './pages/Payroll.jsx';
import PayrollTable from './pages/Payrolltable.jsx';
import EmployeeForm from './pages/Employee.jsx';
import EmployeeTable from './pages/EmployeeTable.jsx';
import ErrorBoundary from './pages/ErrorBoundaries.jsx';

import './index.css'
const router = createBrowserRouter(
    createRoutesFromElements
    (
      <Route path='/' element={<MainLayout />}>
           <Route index element={<Home />}/> 
           <Route path='/employee' element={<Employee />}/> 
           <Route path='/payroll' element={<Payroll />}/> 
      </Route>
    )
) 
const App = () => {

    const [payrolls, setPayrolls] = useState([]);

  const addPayroll = (payroll) => {
    setPayrolls([...payrolls, { ...payroll, generated: false }]);
  };

  const generatePayslip = (index) => {
    const payroll = payrolls[index];
    const newPayrolls = payrolls.map((pay, idx) =>
      idx === index ? { ...pay, generated: true } : pay
    );
    setPayrolls(newPayrolls);

    const payslipWindow = window.open('', 'Payslip', 'width=600,height=400');
    payslipWindow.document.write(`
      <html>
      <head>
        <title>Payslip</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1, h3 { text-align: center; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
          th { background-color: #f4f4f4; }
          button { padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px; }
          button.print { background-color: #007bff; color: white; }
          button.share { background-color: #28a745; color: white; }
        </style>
      </head>
      <body>
        <h1>C.E.F</h1>
        <h3>Payslip</h3>
        <table>
          <tr><th>Employee ID</th><td>${payroll.employeeId}</td></tr>
          <tr><th>Employee Name</th><td>${payroll.employeeName}</td></tr>
          <tr><th>Hours Worked</th><td>${payroll.hoursWorked.toFixed(2)}</td></tr>
          <tr><th>Hourly Rate</th><td>$${payroll.hourlyRate.toFixed(2)}</td></tr>
          <tr><th>Total Pay</th><td>$${(payroll.hoursWorked * payroll.hourlyRate).toFixed(2)}</td></tr>
          <tr><th>Deductions</th><td>$${payroll.deductions.toFixed(2)}</td></tr>
          <tr><th>Net Pay</th><td>$${((payroll.hoursWorked * payroll.hourlyRate) - payroll.deductions).toFixed(2)}</td></tr>
        </table>
        <button class="print" onclick="window.print()">Print</button>
        <button class="share" onclick="sharePayslip()">Share</button>
        <script>
          function sharePayslip() {
            const payslipDetails = {
              title: 'Payslip for ${payroll.employeeName}',
              text: 'Payslip Details:\\nEmployee ID: ${payroll.employeeId}\\nEmployee Name: ${payroll.employeeName}\\nHours Worked: ${payroll.hoursWorked.toFixed(2)}\\nHourly Rate: $${payroll.hourlyRate.toFixed(2)}\\nTotal Pay: $${(payroll.hoursWorked * payroll.hourlyRate).toFixed(2)}\\nDeductions: $${payroll.deductions.toFixed(2)}\\nNet Pay: $${((payroll.hoursWorked * payroll.hourlyRate) - payroll.deductions).toFixed(2)}',
            };
            if (navigator.share) {
              navigator.share(payslipDetails)
                .then(() => console.log('Payslip shared successfully'))
                .catch(error => console.error('Error sharing payslip', error));
            } else {
              alert('Web Share API is not supported in your browser.');
            }
          }
        </script>
      </body>
      </html>
    `);
    payslipWindow.document.close();
  };
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  }
  
    
    return(
        <>
            <RouterProvider router={router} />
            
            
            <div className="container">
                <h1>Employee List System</h1>
                <EmployeeForm addEmployee={addEmployee} />
                <EmployeeTable employees={employees} />
            </div>
            <div className="container">
                <h1>Payroll management</h1>
                <Payroll addPayroll={addPayroll} />
                <PayrollTable payrolls={payrolls} generatePayslip={generatePayslip} />
            </div>
           
            
            
        </>
    );
}

export default App;
