import React, { useState } from "react";
import style from "./Signin.module.css";
import {useNavigate} from "react-router-dom";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import Nav from "../../component/navbar/Nav";
// import StayCurrentPortraitTwoToneIcon from "@mui/icons-material/StayCurrentPortraitTwoTone";

export default function Signup() {
  const [nameCapture, setNameCapture] = useState();
  //   const [numberCapture, setNumberCapture] = useState();
  const [emailCapture, setEmailCapture] = useState();
  const [passwordCapture, setPasswordCapture] = useState();
  const [nameAlert, setNameAlert] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);
  //   const [numberError, setnumberError] = useState(false);
  const navigate=useNavigate()
  const localData= JSON.parse(localStorage.getItem("myList")) || [ ]

  function nameValidation(e) {
    setNameCapture(e.target.value);
    const nameRegixExpression = /^[a-zA-Z0-9]+([_\s/\-]?[a-zA-Z0-9])*$/;
    if (!nameRegixExpression.test(nameCapture)) {
      setNameAlert(true);
    } else {
      setNameAlert(false);
    }
  }

  function emailValidation(e) {
    setEmailCapture(() => e.target.value);
    console.log(emailCapture);
    const emailRegixExpression = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegixExpression.test(emailCapture)) {
      setEmailAlert(true);
    } else {
      setEmailAlert(false);
    }
  }

  function passwordValidation(e) {
    setPasswordCapture(e.target.value);
    const passwordRegixExpression =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    if (!passwordRegixExpression.test(passwordCapture)) {
      setPasswordAlert(true);
    } else {
      setPasswordAlert(false);
    }
  }

  //   function numberValidation(e) {
  //     const numberRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  //     setNumberCapture(e.target.value);
  //     if (!numberRegex.test(numberCapture)) {
  //       setnumberError(true);
  //     }else{
  //         setnumberError(false);
  //     }
  //   }

  function submit(e) {
    e.preventDefault();
    const nameRegixExpression = /^[a-zA-Z0-9]+([_\s/\-]?[a-zA-Z0-9])*$/;
    const passwordRegixExpression =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    const emailRegixExpression = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (
      emailRegixExpression.test(emailCapture) &&
      passwordRegixExpression.test(passwordCapture) &&
      nameRegixExpression.test(nameCapture)
    ) {
      const mydata = {
        name: nameCapture,
        email: emailCapture,
        password: passwordCapture,
      };
      localData.push(mydata)
      localStorage.setItem("myList", JSON.stringify(localData));
      console.log(mydata);
      navigate("/login")
    }
  }

  return (
    <>
    <Nav/>
      <div className={style.card}>
        <div className={style.signincard}>
          <h2 className={style.heading}>"SignIn-First"</h2>
          <form>
            <div className={style.inputbox}>
              <AccountBoxIcon sx={{ fontSize: 61, color: "blue" }} />{" "}
              <input
                onChange={(e) => {
                  nameValidation(e);
                }}
                name="username"
                placeholder="username"
                required
              />
            </div>
            <p>{nameAlert ? "enter valid name" : ""}</p>
            {/* <div className={style.inputbox}>
              <StayCurrentPortraitTwoToneIcon
                sx={{ fontSize: 61, color: "blue" }}
              />{" "}
              <input
                onChange={(e) => {
                  numberValidation(e);
                }}
                name="mobileno"
                required
              />
            </div> */}
            {/* <p>{numberError ? "enter valid number" : ""}</p> */}
            <div className={style.inputbox}>
              <EmailIcon sx={{ fontSize: 59, color: "blue" }} />{" "}
              <input
                onChange={(e) => {
                  emailValidation(e);
                }}
                name="email"
                placeholder="email"
                required
              />
            </div>
            <p>{emailAlert ? "enter valid email" : ""}</p>
            <div className={style.inputbox}>
              <VisibilityOffTwoToneIcon
                sx={{ fontSize: 59, color: "blue", margin: 0 }}
              />{" "}
              <input
                onChange={(e) => {
                  passwordValidation(e);
                }}
                name="password"
                placeholder="password"
                required
              />
            </div>
            <p>{passwordAlert ? "enter valid password" : ""}</p>
            <button onClick={submit}>submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
