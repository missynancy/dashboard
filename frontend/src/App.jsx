import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout.jsx';
import Secondary from './layout/Secondary.jsx';
import Home from './pages/Home.jsx';
import Payroll from './pages/Payroll.jsx';
import EmployeeForm from './pages/EmployForm.jsx';
import Checklist from './pages/Checklist.jsx';
import AdminLoginPage from './pages/Start.jsx'; // Ensure the correct import path
import EmployeeLoginPage from './pages/EmployeeLoginPage.jsx';
import Login from './pages/Login.jsx'
//import EmployeeDashboard from './pages/EmployeeDashboard.jsx';
import './index.css';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  return (
    <Router>
      <Routes>
        <Route path="/admin-login" element={<AdminLoginPage onLogin={handleLogin} />} />
        <Route path="/employee-login" element={<EmployeeLoginPage onLogin={handleLogin} />} />
        <Route path="/payroll" element={user && user.role === 'admin' ? <Payroll /> : <Navigate to="/admin-login" />} />
        <Route path="/employee-dashboard" element={user && user.role === 'employee' ? <EmployeeDashboard /> : <Navigate to="/employee-login" />} />
        <Route path="/" element={<Navigate to={user ? (user.role === 'admin' ? "/payroll" : "/employee-dashboard") : "/admin-login"} />} />
        <Route path='/' element={<Secondary />}>
          
            <Route path='/employee' element={<EmployeeForm />} />
            <Route path='/checklist' element={<Checklist />} />
            <Route path='/payroll' element={<Payroll />} />
          
          
          {/* <Route path='/payrollTable' element={<PayrollTable />} */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
