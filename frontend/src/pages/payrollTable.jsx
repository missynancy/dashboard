import React from 'react';
import Index from '../components/Index';

const PayrollTable = ({ payrolls, generatePayslip }) => {
  return (
    <>
    <Index/>
    <div className="home">
        <div className="table-head">
            <h1>Payroll</h1>
        </div>
        <table>
            <thead>
                <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Hours Worked</th>
                <th>Hourly Rate ($)</th>
                <th>Total Pay ($)</th>
                <th>Deductions ($)</th>
                <th>Net Pay ($)</th>
                <th>Payslip</th>
                </tr>
            </thead>
            <tbody>
                {payrolls.map((payroll, index) => (
                <tr key={index}>
                    <td>{payroll.employeeId}</td>
                    <td>{payroll.employeeName}</td>
                    <td>{payroll.hoursWorked.toFixed(2)}</td>
                    <td>${payroll.hourlyRate.toFixed(2)}</td>
                    <td>${(payroll.hoursWorked * payroll.hourlyRate).toFixed(2)}</td>
                    <td>${payroll.deductions.toFixed(2)}</td>
                    <td>${((payroll.hoursWorked * payroll.hourlyRate) - payroll.deductions).toFixed(2)}</td>
                    <td>
                    <button
                        className={payroll.generated ? 'generated' : ''}
                        onClick={() => generatePayslip(index)}
                        disabled={payroll.generated}
                    >
                        {payroll.generated ? 'Generated' : 'Generate Payslip'}
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  );
};

export default PayrollTable;
