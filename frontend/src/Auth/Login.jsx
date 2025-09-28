// src/Pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setRole }) {
  const [role, setSelectedRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!role || !username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    //  Mock authentication
    if (password === "1234") {
      setRole(role); // update role in App.jsx
      // redirect based on role
      switch (role) {
        case "collector":
          navigate("/record-collection");
          break;
        case "lab":
          navigate("/upload-lab");
          break;
        case "manufacturer":
          navigate("/processing-step");
          break;
        case "ministry":
          navigate("/compliance-reports");
          break;
        default:
          navigate("/");
      }
    } else {
      alert("Invalid credentials. Try username + 1234 as password.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">🔑 Stakeholder Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Select Role:</label>
          <select value={role} onChange={(e) => setSelectedRole(e.target.value)}>
            <option value="">-- Select --</option>
            <option value="collector">Collector</option>
            <option value="lab">Lab</option>
            <option value="manufacturer">Manufacturer</option>
            <option value="ministry">Ayush Ministry</option>
          </select>
        </div>

        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
}
