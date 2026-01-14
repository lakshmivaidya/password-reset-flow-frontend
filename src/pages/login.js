import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      alert("Login successful!");
      console.log(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 auth-container">
          <h3>Login</h3>

          <input
            type="email"
            className="form-control my-2"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control my-2"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100 mt-3" onClick={submitHandler}>
            Login
          </button>

          <div className="text-center mt-3">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}