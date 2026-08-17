import "./Login.css";

import AuthLayout from "../components/auth/AuthLayout";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import {
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

import { loginUser } from "../auth";


function Login() {

  const [showPassword, setShowPassword] =
    useState(false);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const navigate =
    useNavigate();


  const handleLogin = (e) => {

    e.preventDefault();

    setError("");

    if (!email || !password) {

      setError(
        "Please enter your email and password."
      );

      return;
    }

    setLoading(true);

    try {

      loginUser(
        email,
        password
      );

      navigate("/");

    } catch (error) {

      setError(
        error.message
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Continue your reading journey with ReadSphere."
    >

      <div className="login-box">

        <h2>Login</h2>

        <p className="login-text">
          Sign in to your account
        </p>


        {error && (
          <p className="auth-error">
            {error}
          </p>
        )}


        <form onSubmit={handleLogin}>


          {/* EMAIL */}

          <div className="form-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

          </div>


          {/* PASSWORD */}

          <div className="form-group">

            <label>
              Password
            </label>

            <div className="password-field">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >

                {showPassword
                  ? <FiEyeOff />
                  : <FiEye />
                }

              </button>

            </div>

          </div>


          {/* REMEMBER / FORGOT */}

          <div className="login-row">

            <label>

              <input
                type="checkbox"
              />

              Remember Me

            </label>


            <Link to="/forgot-password">
              Forgot Password?
            </Link>

          </div>


          {/* LOGIN */}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >

            {loading
              ? "Logging in..."
              : "Login"
            }

          </button>

        </form>


        {/* SIGN UP */}

        <p className="signup-text">

          Don't have an account?

          <Link to="/signup">
            Sign Up
          </Link>

        </p>

      </div>

    </AuthLayout>

  );

}


export default Login;