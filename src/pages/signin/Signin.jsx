import React from "react";
import style from "./Signin.module.css";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityOffTwoToneIcon from "@mui/icons-material/VisibilityOffTwoTone";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Signindata} from "../../recoil/toggledata/Signdata"
import { useSetRecoilState } from "recoil";
import {Signinda} from "../../recoil/signdata/Signinda"
import Nav from "../../component/navbar/Nav";

export default function Signin() {
  const setlogin=useSetRecoilState(Signinda)
    const datalogin=useSetRecoilState(Signindata)
    // const [nameCapture, setNameCapture] = useState();
    //   const [numberCapture, setNumberCapture] = useState();
    const [emailCapture, setEmailCapture] = useState();
    const [passwordCapture, setPasswordCapture] = useState();
   
    const [emailAlert, setEmailAlert] = useState(false);
    const [passwordAlert, setPasswordAlert] = useState(false);
    const navigate=useNavigate()
    const data=JSON.parse(localStorage.getItem("myList"))
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

      function logedin(e){
        e.preventDefault()
        const login={
          email:emailCapture,
          password:passwordCapture,
        }
        setlogin((old)=>[...old,login])
        const passwordRegixExpression =
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
          const emailRegixExpression = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        // const data=JSON.parse(localStorage.getItem("list"))
        data.filter((ele)=>{
            if (passwordRegixExpression.test(passwordCapture) && emailRegixExpression.test(emailCapture)) {
           if(ele.email==emailCapture && ele.password==passwordCapture){
            datalogin(true)
            const username=ele.name
          localStorage.setItem("username",JSON.stringify(username))

            alert('loged in sucess')
            navigate("/cart")
            // console.log()
           }}})

      }

  return (
    <>
    <Nav/>
      <div className={style.card}>
        <div className={style.signincard}>
          <h2 className={style.heading}>SignIn-First</h2>
          <form>
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
              <p>{passwordAlert ? "enter valid password" : ""}</p>
            </div>
            <button onClick={logedin} className={style.submitbtn}>submit</button>
          </form>
          <i>if you are not a user </i>
          <span className={style.btn}>
            <i>
              resigter first{" "}
              <button>
                <NavLink className={style.btnnav} to="/signup">
                  SignUp
                </NavLink>
              </button>
            </i>
          </span>
        </div>
      </div>
    </>
  );
}
