import "./AuthLayout.css";
import illustration from "../../assets/auth-illustration.png";

function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="auth-layout">

      {/* LEFT SIDE */}
      <section className="auth-left">

        {/* Text Logo */}
        <div className="auth-brand">
          <span className="brand-read">Read</span>
          <span className="brand-sphere">Sphere</span>
        </div>

        {/* Illustration */}
        <img
          src={illustration}
          alt="ReadSphere illustration"
          className="auth-illustration"
        />

      </section>


      {/* RIGHT SIDE */}
      <section className="auth-right">

        <div className="auth-content">

          {title && (
            <h1 className="auth-title">
              {title}
            </h1>
          )}

          {subtitle && (
            <p className="auth-subtitle">
              {subtitle}
            </p>
          )}

          {children}

        </div>

      </section>

    </main>
  );
}

export default AuthLayout;