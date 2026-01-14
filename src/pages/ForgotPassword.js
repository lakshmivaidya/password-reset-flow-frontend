import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const submitHandler = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      alert("Reset link sent! Check your email.");
    } catch (err) {
      alert(err.response?.data?.message || "Request failed");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 auth-container">
          <h3>Forgot Password</h3>

          <input
            className="form-control my-3"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="btn btn-primary w-100" onClick={submitHandler}>
            Send Reset Link
          </button>
        </div>
      </div>
    </div>
  );
}