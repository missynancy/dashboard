import React, { useState } from 'react';

const AdminLoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate admin login process
    if (email == 'admin@example.com' && password == 'adminpassword') {
      onLogin({ email, role: 'admin' });
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
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

export default AdminLoginPage;
