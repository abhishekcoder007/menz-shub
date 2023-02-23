import React from "react";
import nav from "./Productnav.module.css";
import {Link} from "react-router-dom";


// import {Navdata} from './../../recoil/navdata/Navdata';
// import { useRecoilValue } from "recoil";

export default function Productnav(){
// const value=useRecoilValue(Navdata)
    return(
        <>
        {/* {value.map(ele=>(<>
        <p>{ele}</p>
        </>))}

        <h1>hello</h1> */}
        <div className={nav.maincontainer}>
            <div className={nav.container}>
                <div className={nav.left}>
               <div className={nav.item1}>MenzHub</div>
               </div>
               <div className={nav.middle}>
               <div className={nav.item3}><button><Link to="/trousers">Trouser</Link></button></div>
               <div className={nav.item3}><button><Link to="/shoes">Shoes</Link></button></div>
               <div className={nav.item3}><button><Link to="/shirts">Shirts</Link></button></div>
               </div>
               <div className={nav.right}>
               {/* <div className={nav.item4}>SignUp</div>
               <div className={nav.item5}>Cart</div> */}
                </div>

   

            </div>
        </div>
        
        </>
    )
}