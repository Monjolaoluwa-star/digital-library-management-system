import "./Signup.css";
import AuthLayout from "../components/auth/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // For now, simulate successful signup
    navigate("/login");
  };

  return (
    <AuthLayout
      title="Create Your Account ✨"
      subtitle="Join ReadSphere and start your reading journey."
    >

      <div className="signup-box">

        <h2>Sign Up</h2>

        <p className="signup-text-top">
          Create an account to get started
        </p>

        <form onSubmit={handleSignup}>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>


          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <div className="form-group">
            <label>Password</label>

            <div className="password-field">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>

            </div>
          </div>


          <div className="form-group">
            <label>Confirm Password</label>

            <div className="password-field">

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>

            </div>
          </div>


          <label className="terms-checkbox">
            <input type="checkbox" required />
            <span>
              I agree to the Terms and Conditions
            </span>
          </label>


          <button
            type="submit"
            className="signup-button"
          >
            Create Account
          </button>

        </form>


        <p className="already-account">
          Already have an account?

          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </AuthLayout>
  );
}

export default Signup;