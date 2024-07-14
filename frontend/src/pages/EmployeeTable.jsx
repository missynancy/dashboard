import React from 'react';
import PropTypes from 'prop-types';
import StatusButton from './Status';
import Index from '../components/Index';

const EmployeeTable = ({ employees }) => {
  return (
    <>
    <Index/>
    <div className="home">
        <table>
            <thead>
                <tr>
                    <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Team</th>
                <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                <tr key={index}>
                    <td>{employee.employeeId}</td>
                    <td>{employee.employeeName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.role}</td>
                    <td><StatusButton status={employee.status} /></td>
                    <td>{employee.team}</td>
                    <td>{employee.department}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  );
};

EmployeeTable.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      employeeName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      team: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EmployeeTable;
