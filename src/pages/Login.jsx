import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
        <h2 className="text-center mb-3">Login</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="mb-3">
           <label className="form-label">Password</label>
           <input 
                type="password" className="form-control" 
                placeholder="Enter your password" name="password"
                pattern="^(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,20}$" 
                title="Password more than 8 words long, first letter uppercase  and one special character."required/>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to="/register" className="text-decoration-none">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
