import React from "react";
import "./SignInPage.css";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
    const navigate = useNavigate();
  return (
    <div className="signin-container">
      <div className="glass-card">
        <h2>Sign In</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      <div className="or-divider">OR</div>

       <button className="glass-google-btn">
  <div className="google-icon-wrapper">
    <img src="/images/google.png" alt="Google" className="glass-google-logo" />
  </div>
  <span className="glass-google-text">Sign in with Google</span>
</button>



        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
       <button className="back-button" onClick={() => navigate("/")}>⬅️ Back to Home</button>
    </div>
  );
};

export default SignInPage;