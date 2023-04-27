import React from "react";
import "./LoginClient.css";
const myComponentStyle = {
  backgroundImage:
    'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMz4PIEqfhqxtw6Fi1Ek1WaDoTRZyokU2Ts830yT1GpBu9ujlIdmoVFXw8aDTlGQBxVU&usqp=CAU")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
};

const LoginClient = () => {
  return (
    <div className="container" style={myComponentStyle}>
      <div className="text1">
        <input
          type="textarea"
          value={"Welcome Back!"}
          className="welcome"
          disabled
        ></input>
        <br />

        <input
          type="textarea"
          value={"To keep connected with us,"}
          className="welcome1"
          disabled
        ></input>
        <br />
        <input
          type="textarea"
          value={"please login with your personal info"}
          className="welcome2"
          disabled
        ></input>
      </div>
      <div className="right">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              className="input1"
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              className="input1"
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <div className="check">
            <label>
              <input type="checkbox" />
              Remember me &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp;
              <a href="#">Forgot Password?</a>
            </label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginClient;
