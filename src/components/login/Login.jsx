import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "boxicons/css/boxicons.min.css";

const Login = ({setuser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setuser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    window.localStorage.setItem("USER", JSON.stringify(username));
    //setting user type

    

    if(username === "admin")
      {
        setuser("admin");
        navigate("/dashboard/create drive");
      }
    else{

      setuser("user");
      navigate("/dashboard/drives");
    }

    // axios
    //   .get(`${process.env.REACT_APP_API_URL}/user/login/`,
    //   {
       
    //   }
    //   )
    //   .then((response) => {
    //   console.log(response);
    //   })
    //   .catch((error) => {
    //   console.log(error);
    //   });
  };

  return (
    <div className="sign-in-main">
      <div className="signinbody">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter email"
              onChange={handleUsernameChange}
            />
            <i className="bx bx-user"></i>
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handlePasswordChange}
            />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// <h1>Login</h1>
// <form onSubmit={handleSubmit}>
//   <div>
//     <label htmlFor="username">Username:</label>
//     <input
//       type="text"
//       id="username"
//       value={username}
//       onChange={handleUsernameChange}
//     />
//   </div>
//   <div>
//     <label htmlFor="password">Password:</label>
//     <input
//       type="password"
//       id="password"
//       value={password}
//       onChange={handlePasswordChange}
//     />
//   </div>
//   <button type="submit">Login</button>
