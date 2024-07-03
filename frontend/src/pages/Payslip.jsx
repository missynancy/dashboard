import React from 'react';

const PayslipModal = ({ payroll, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Payslip',
        text: `Payslip for ${payroll.employeeName}`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Sharing is not supported in your browser.');
    }
  };

  if (!payroll) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Payslip for {payroll.employeeName}</h2>
        <p>Employee ID: {payroll.employeeId}</p>
        <p>Hours Worked: {payroll.hoursWorked.toFixed(2)}</p>
        <p>Hourly Rate: ${payroll.hourlyRate.toFixed(2)}</p>
        <p>Total Pay: ${(payroll.hoursWorked * payroll.hourlyRate).toFixed(2)}</p>
        <p>Deductions: ${payroll.deductions.toFixed(2)}</p>
        <p>Net Pay: ${((payroll.hoursWorked * payroll.hourlyRate) - payroll.deductions).toFixed(2)}</p>
        <button onClick={handlePrint}>Print</button>
        <button onClick={handleShare}>Share</button>
      </div>
    </div>
  );
};

export default PayslipModal;
