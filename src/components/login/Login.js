import React, { useContext, useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "./firebaseConfig";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo.jpeg";
import { UserContext } from "./../../App";
import { useForm } from "react-hook-form";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [error, setError] = useState("");
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, error } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        if (!error) {
          history.replace(from);
        }
      })
      .catch(function (error) {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const {
    register,
    handleSubmit,

    reset,
  } = useForm();
  const handleRedirect = (data) => {
    const newUser = {
      email: data.email,
    };
    setLoggedInUser(newUser);
    history.replace(from);
  };
  const onSubmit = (data, e) => {
    if (data) {
      console.log(data);
      fetch("https://glacial-mesa-02011.herokuapp.com/isAdmin", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            handleRedirect(data);
          }
        });
    }
    reset();
    e.preventDefault();
  };

  return (
    <div
      className="p-5 d-flex justify-content-center align-items-center bg-light"
      id="login__page"
    >
      {from.pathname === "/admin" && (
        <div className="shadow p-5 text-center rounded">
          <h2 className="text-success">News Portal</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              {...register("email", { pattern: /\S+@\S+\.\S+/ })}
              className="form-control"
              placeholder="email"
              required
            />

            <input
              type="password"
              {...register("password")}
              className="form-control"
              placeholder="password"
              required
            />

            <input
              type="submit"
              value="login"
              className="btn btn-primary mt-2"
            />
          </form>
        </div>
      )}
      {from.pathname !== "/admin" && (
        <div>
          <button
            className="btn btn-secondary mt-2"
            onClick={handleGoogleSignIn}
          >
            <FontAwesomeIcon icon={faGoogle} style={{ color: "blue" }} />
            Continue with Google
          </button>
          <p>
            Don't have an account <a href="/#">Create an account</a>
          </p>
          <p className="text-danger">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
