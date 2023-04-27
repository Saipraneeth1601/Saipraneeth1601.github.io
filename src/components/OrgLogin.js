import React from "react";
import "./ClientLogin.css";
import { useNavigate } from "react-router-dom";

const OrgLogin = () => {
  let navigate = useNavigate();
  const myComponentStyle = {
    backgroundImage: `url("https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    minWidth: "100%",
  };

  return (
    <div className="container" style={myComponentStyle}>
      <div className="card">
        <div className="card-header">
          <h3>Org Login</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
              />
              <label className="form-check-label" htmlFor="remember">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              onClick={() => {
                navigate("/orgdb");
              }}
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrgLogin;
