import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const submitHandler = async () => {
    try {
      await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, { password });
      alert("Password reset successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4 auth-container">
          <h3>Reset Password</h3>

          <input
            type="password"
            className="form-control my-3"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn btn-primary w-100" onClick={submitHandler}>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}