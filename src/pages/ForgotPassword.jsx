import "./ForgotPassword.css";
import AuthLayout from "../components/auth/AuthLayout";
import { Link } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <AuthLayout
      title="Forgot Your Password? 🔐"
      subtitle="No worries. Enter your email and we'll help you get back into your account."
    >

      <div className="forgot-box">

        <h2>Reset Password</h2>

        <p className="forgot-text">
          Enter the email address connected to your account.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="reset-button"
            >
              Send Reset Link
            </button>

          </form>
        ) : (
          <div className="reset-success">
            <p>
              A password reset link has been sent to your email.
            </p>
          </div>
        )}

        <p className="back-login">
          Remember your password?

          <Link to="/login">
            Back to Login
          </Link>
        </p>

      </div>

    </AuthLayout>
  );
}

export default ForgotPassword;