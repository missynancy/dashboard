import React, { useState, useEffect } from 'react';

const EmployeeForm = () => {
  const [employeeId, setEmployeeID] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('Active');
  const [team, setTeam] = useState('');
  const [department, setDepartment] = useState('');

 
  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (Array.isArray(parsedData)) {
        setEmployees(parsedData);
      } else {
        console.error('Stored data is not an array:', parsedData);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

   const newEmployee = {
      employeeId,
      employeeName,
      email,
      role,
      status,
      team,
      department,
    };

    localStorage.setItem('userData', JSON.stringify(newEmployee));
    alert('User data saved!');

    // Clear form fields
    setEmployeeId('');
    setEmployeeName('');
    setEmail('');
    setRole('');
    setStatus('');
    setTeam('');
    setDepartment('');

  };

  

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label>Employee ID:</label>
          <input
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeID(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="Active">Active</option>
            <option value="Probation">Probation</option>
            <option value="Onboarding">Onboarding</option>
            <option value="On Leave">On Leave</option>
          </select>
        </div>
        <div className="form-group">
          <label>Team:</label>
          <input
            type="text"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button-submit">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
