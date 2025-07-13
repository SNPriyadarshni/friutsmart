import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignInPage.css"; // Reusing same styles

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "priyadarshni" && password === "12345678") {
      navigate("/payment");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="signin-container">
      <div className="glass-card">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-text" style={{ color: "#ffaaaa", fontSize: "14px" }}>{error}</p>}
        <button onClick={handleLogin}>Login</button>
        <div className="login-link">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signin")}>Sign In</span>
        </div>
      </div>
       <button className="back-button" onClick={() => navigate("/")}>⬅️ Back to Home</button>
    </div>
  );
}

export default LoginPage;
