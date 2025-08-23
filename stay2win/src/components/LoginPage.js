import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if username and password match the expected values
    if (username === 'admin' && password === '123') {
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      setError('Invalid username or password'); // Show error message
    }
  };

  return (
    <div className="login-page d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="login-card p-4 shadow-lg">
        <h2 className="text-center mb-4">Welcome to Stay2Win</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <i className="fas fa-user"></i> Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Capture username input
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <i className="fas fa-lock"></i> Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          {error && <div className="text-danger text-center mb-3">{error}</div>} 
          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
