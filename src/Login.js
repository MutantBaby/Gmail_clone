import React from "react";
import "./Login.css";
import gmailIcon from "./gmail_google_icon.png";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={gmailIcon} />
        <Button variant="contained" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
