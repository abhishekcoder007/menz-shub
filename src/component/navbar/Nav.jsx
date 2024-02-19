import React, { useEffect, useState } from "react";
import nav from "./Nav.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// import {Navdata} from './../../recoil/navdata/Navdata';
import { useRecoilState, useRecoilValue } from "recoil";
import { NavLink } from "react-router-dom";

import { Signindata } from "../../recoil/toggledata/Signdata";
import { Cartdata } from "../../recoil/cartdata/Cartdata";
import { Searchdata } from "../../recoil/allitemdata/Allitem";
import { Searcfilter } from "../../recoil/allitemdata/Allitem";
import { Allitem } from "../../recoil/allitemdata/Allitem";
import { useNavigate } from "react-router-dom";
import AlertDialog from "../dialog/Dialogbox";
import { Searchitem } from "../../recoil/allitemdata/Allitem";

export default function Nav() {
  const [searchwith, setme] = useRecoilState(Searchitem);
  const [navshow,setshow]=useState(false);
  const [logout, setlogout] = useState(false);
  const [value, setvalue] = useRecoilState(Cartdata);
 
  const show = useRecoilValue(Signindata);
  // const[searchme,setsearch]=useRecoilState(Searchdata)
  const [searchme, setsearch] = useState("");
  const [store, setstore] = useRecoilState(Searcfilter);
  const datavalue = useRecoilValue(Allitem);

  const myname = JSON.parse(localStorage.getItem("username"));

  const navigate = useNavigate();

  const hidenav=()=>{
    
    setshow(old=>{
        if(old===false){
            return true
        }else return false})
 }

  function logoutme() {
    setlogout(true);
  }

  function clickme(e) {
    setsearch(e.target.value);
    console.log(searchme);
  }
  useEffect(() => {
    searchproduct();
  }, [searchme]);
  function searchproduct() {
    if (searchme.length === 0) {
      setme(false);
    }
    if (searchme.length > 0) {
      setme(true);
      // navigate("/")
      console.log(searchme);
      const data = datavalue.filter((ele) =>
        ele.name?.toLowerCase().includes(searchme?.toLowerCase())
      );

      setstore(data);
      navigate("/");
    } else {
    }
  }
  return (
    <>
      <div className={nav.maincontainer}>
        <div className={nav.container}>
          <div className={nav.left}>
            <div className={nav.item1}>
              <NavLink className={nav.mylinklogo} to="/">
                MenzHub
              </NavLink>
            </div>
          </div>

          <div className={nav.middle}>
            <div className={nav.item2}>
              <input onChange={(e) => clickme(e)} />
            </div>
            <div className={nav.item3}>
              <button onClick={searchproduct} className={nav.btnsearch}>
                search
              </button>
            </div>
          </div>
          <div className={nav.right}>
            <div className={nav.item4}>
              {show ? (
                <div className={nav.loginme} onClick={logoutme}>
                  <div>
                    <AlertDialog />
                  </div>
                  <div> {`${myname}`}</div>
                </div>
              ) : (
                " "
              )}

              <NavLink className={nav.item4} to="/login">
                {show ? "" : "SignIn"}
              </NavLink>
            </div>

            <div className={nav.item5}>
              <NavLink className={nav.mylink} to="/cart">
                <AddShoppingCartIcon sx={{ fontSize: 31, color: "yellow" }} />
                Cart {value.length}
              </NavLink>
            </div>
            <div  className={nav.main_mobileview}  onClick={hidenav}  >||||</div>
          </div>
        </div>
      </div>

      {navshow&&<div className={nav.mobilenav}>
        <p style={{ marginBottom:"21px",textAlign:"end"}} onClick={hidenav}>**</p>
                  
        <div className={nav.item46}>

              <NavLink className={nav.item46} to="/login">
                {show ? "Login" : "SignIn"}
              </NavLink>
            </div>
              
                <div> <NavLink className={nav.mylink} to="/cart">
                <AddShoppingCartIcon sx={{ fontSize: 31, color: "yellow" }} />
                Cart {value.length}
              </NavLink></div>  

              <div className={nav.middle1}>
            <div className={nav.item2}>
              <input onChange={(e) => clickme(e)} />
            </div>
            <div className={nav.item3}>
              <button onClick={searchproduct} className={nav.btnsearch}>
                search
              </button>
            </div>
          </div>
                
        </div>}
    </>
  );
}
