import React, { useState, useEffect } from 'react';

const EmployeeForm = () => {
  const [employeeId, setEmployeeID] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('Active');
  const [team, setTeam] = useState('');
  const [department, setDepartment] = useState('');
  const [employees, setEmployees] = useState([]);

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

    // Update employees state with new employee
    setEmployees([...employees, newEmployee]);

    // Store employees in localStorage
    localStorage.setItem('userData', JSON.stringify([...employees, newEmployee]));

    // Clear form fields
    setEmployeeID('');
    setEmployeeName('');
    setEmail('');
    setRole('');
    setStatus('Active');
    setTeam('');
    setDepartment('');
  };

  const displayEmployees = () => {
    // Render employee details in a table format
    return (
      <div className="employee-list">
        <h2>Employee Details</h2>
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Team</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.employeeId}</td>
                <td>{emp.employeeName}</td>
                <td>{emp.email}</td>
                <td>{emp.role}</td>
                <td>{emp.status}</td>
                <td>{emp.team}</td>
                <td>{emp.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="home">
        <h2>Add Employee</h2>
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
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
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

      {/* Conditionally render employee details */}
      {employees.length > 0 && displayEmployees()}
    </div>
  );
};

export default EmployeeForm;
