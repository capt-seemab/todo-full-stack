import "./Login.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../../../redux/actions/authTokenAction";
function SignIn({ session }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (
          result &&
          result.errors &&
          result.errors[0] &&
          result.errors[0].msg
        ) {
          alert(result.errors[0].msg);
        } else {
          if (result && result.errors) {
            alert(result.errors);
          } else {
            if (result?.isActive) {
              if (result.isAdmin) {
                dispatch(setAuthToken(result.authToken));
                navigate("/Admin", {
                  state: {
                    email: result.email,
                    id: result.id,
                  },
                });
              } else {
                dispatch(setAuthToken(result.authToken));
                navigate("/Todo", {
                  state: {
                    email: result.email,
                    id: result.id,
                  },
                });
              }
            } else {
              alert("session expired please login again");
            }
          }
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    !session && (
      <div className="container">
        <input id="register_toggle" type="checkbox" />
        <div className="slider">
          <form className="form" onSubmit={handleSubmit}>
            <span className="title">Login</span>
            <div className="form_control">
              <label className="label">Email</label>
              <input
                required=""
                placeholder="Email"
                id="username"
                className="input"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form_control">
              <label className="label">Password</label>
              <input
                required=""
                id="password"
                className="input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button>Login</button>

            <span className="bottom_text">
              Don't have an account?{" "}
              <label className="swtich" htmlFor="register_toggle">
                {" "}
                <a className="swtich" href="/signUp">
                  Sign Up
                </a>{" "}
              </label>{" "}
            </span>
          </form>
        </div>
      </div>
    )
  );
}

export default SignIn;
