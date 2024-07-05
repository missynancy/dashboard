import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import './LoginPage.css'; // Reuse the same CSS for simplicity

const EmployeeLoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate employee login process
    if (email === 'employee@example.com' && password === 'employeepassword') {
      onLogin({ email, role: 'employee' });
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Employee Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
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
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button-submit">
          Login
        </button>
      </form>
    </div>
  );
};

EmployeeLoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default EmployeeLoginPage;
