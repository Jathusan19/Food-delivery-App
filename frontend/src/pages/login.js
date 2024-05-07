import React, { useState } from 'react';
import './login.css'; // Custom CSS file for styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        name,
        password,
      });

      // Check the response for authentication success or failure
      if (response.status === 200) {
        alert('Login successful');
        nav("/H");
      } else {
        setError('Login failed. Please check your email and password.');
      }
    } catch (error) {
      setError('Error: Unable to log in.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card mt-5">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form>
                <div className="form-group mt-3">
                  <label htmlFor="email">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-dark btn-block mt-2"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

