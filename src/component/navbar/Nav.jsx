import React, { useState } from "react";
import nav from "./Nav.module.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// import {Navdata} from './../../recoil/navdata/Navdata';
import { useRecoilState, useRecoilValue } from "recoil";
import { NavLink } from "react-router-dom";

import {Signindata} from "../../recoil/toggledata/Signdata";
import {Cartdata} from "../../recoil/cartdata/Cartdata";
// import {useState}  from "react";

export default function Nav(){
const [logout,setlogout]=useState(false)
const [value,setvalue]=useRecoilState(Cartdata)
// const usernameshow=useRecoilValue(Signinda)
const show=useRecoilValue(Signindata)
const myname=JSON.parse(localStorage.getItem("username"))
// const=myname.toUppercase()
const Welcome="Welcome"


function logoutme(){
    setlogout(true)
    // window.location.reload(false);
}

function logoutus(){
     window.location.reload(false);
}
    return(
        <>
        {/* {value.map(ele=>(<>
        <p>{ele}</p>
        </>))}

        <h1>hello</h1> */}
        <div className={nav.maincontainer}>
            <div className={nav.container}>
                <div className={nav.left}>
               <div className={nav.item1}>
               <NavLink className={nav.mylinklogo} to="/" >MenzHub</NavLink>
                </div>
               </div>

               <div className={nav.middle}>
               <div className={nav.item2}><input /></div>
               <div className={nav.item3}><button className={nav.btnsearch}>search</button></div>
               </div>
               <div className={nav.right}>
               <div className={nav.item4}>
              {/* {logout? <span > logout</span> : ""} */}
              {(show?<div onClick={logoutme}>{`${Welcome} ${myname}`}</div>:" ")}
              {logout? <button onClick={logoutus} > logout</button> : " "}
               <NavLink className={nav.item4} to= "/login">
               { show?"":"SignIn"}
                </NavLink>
                </div>

               <div className={nav.item5}>
                {/* cart */}
                <NavLink className={nav.mylink} to="/cart"><AddShoppingCartIcon sx={{fontSize:31, color:"yellow"}}/>Cart {value.length}</NavLink>
                </div>
                </div>

   

            </div>
        </div>
        
        </>
    )
}