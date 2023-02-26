import React from "react";
import style from "./Footer.module.css";

export default function Footer(){

    return(
        <>
        
         
         <div className={style.container}>
         <div className={style.maincontainer}>

          <div className={style.item1}>
            <h2>GET TO KNOW US</h2>
            <hr></hr>
            <p>About-Us</p>
            <p>Quality</p>
            <p>Carrer</p>
            <p>Our Product</p>
          </div>

          <div className={style.item2}>
            <h2>Connect with Us</h2>
            <hr></hr>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>

          <div  className={style.item3}>
            <h2>Specification</h2>
            <hr></hr>
            <pre><b>100% ORIGINAL</b> guarantee for all </pre>
           <p> products at menshub.com</p>
            <p><b>Return within 30days of </b></p>
           <p> of receiving your order</p>
          </div>

          <div  className={style.item4}>

          </div>
         



</div>
<div className={style.footer}>
    <p className={style.logo}>MenzHub</p>
    <i className={style.logo1}>@desicompany</i>
    <p className={style.mens}>We only sale men's product.All product are rich in quality </p>
    <p>All product are <b>desi</b> <i>means made in india </i></p>
</div>

         </div>
         {/* <button className={style.backtop}>back to top</button> */}
        </>
    )
}