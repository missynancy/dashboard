import React, { useState, useEffect } from 'react';
import PayslipModal from './Payslip'; // Import the modal component
import Index from '../components/Index';

const Payroll = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [hoursWorked, setHoursWorked] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [deductions, setDeductions] = useState('');
  const [payrolls, setPayrolls] = useState([]);
  const [selectedPayroll, setSelectedPayroll] = useState(null); // State for selected payroll
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  useEffect(() => {
    const storedData = localStorage.getItem('employeePayroll');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (Array.isArray(parsedData)) {
        setPayrolls(parsedData);
      } else {
        console.error('Stored data is not an array:', parsedData);
      }
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPayroll = {
      employeeId,
      employeeName,
      hoursWorked: parseFloat(hoursWorked),
      hourlyRate: parseFloat(hourlyRate),
      deductions: parseFloat(deductions),
      generated: false,
    };

    const updatedPayrolls = [...payrolls, newPayroll];
    setPayrolls(updatedPayrolls);
    localStorage.setItem('employeePayroll', JSON.stringify(updatedPayrolls));
    alert('Employee data saved!');

    // Clear form fields
    setEmployeeId('');
    setEmployeeName('');
    setHoursWorked('');
    setHourlyRate('');
    setDeductions('');
  };

  const generatePayslip = (index) => {
    setPayrolls((prevPayrolls) =>
      prevPayrolls.map((payroll, i) =>
        i === index ? { ...payroll, generated: true } : payroll
      )
    );
    setSelectedPayroll(payrolls[index]); // Set selected payroll
    setModalVisible(true); // Show modal
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedPayroll(null);
  };

  return (
    <>
    <Index/>
    <div className='home'>
      <div className='payroll'>
        <h1>Payroll System</h1>
        <form onSubmit={handleSubmit} className='employeePayroll-form'>
          <div className='form-group'>
            <label>Employee ID:</label>
            <input
              type='text'
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Employee Name:</label>
            <input
              type='text'
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Hours Worked:</label>
            <input
              type='number'
              value={hoursWorked}
              onChange={(e) => setHoursWorked(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Hourly Rate ($):</label>
            <input
              type='number'
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              required
            />
          </div>
          <div className='form-group'>
            <label>Deductions ($):</label>
            <input
              type='number'
              value={deductions}
              onChange={(e) => setDeductions(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='button-submit'>
            Add Payroll
          </button>
        </form>
      </div>

      <div>
        {payrolls.length > 0 ? (
          <div>
            <div className='table-head'>
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
                    {payroll && (
                      <>
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
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No payroll data found</p>
        )}
      </div>

      {modalVisible && (
        <PayslipModal payroll={selectedPayroll} onClose={closeModal} />
      )}
    </div>
    </>
  );
};

export default Payroll;
