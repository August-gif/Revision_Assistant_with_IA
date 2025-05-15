import React from 'react';
import './loginPage.css'; // Import a CSS file for styling

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome back</h1>
        <div className="input-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Your email address" required />
        </div>
        <button className="continue-button">Continue</button>
        <p className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </p>
        <div className="separator">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <div className="social-login">
          <button className="social-button google">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
            Continue with Google
          </button>
          <button className="social-button microsoft">
            <img src="https://img.icons8.com/color/16/000000/microsoft-logo.png" alt="Microsoft" />
            Continue with Microsoft Account
          </button>
          <button className="social-button apple">
            <img src="https://img.icons8.com/ios-filled/16/000000/apple-logo.png" alt="Apple" />
            Continue with Apple
          </button>
          <button className="social-button phone">
            <img src="https://img.icons8.com/material-outlined/16/000000/phone.png" alt="Phone" />
            Continue with phone
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;