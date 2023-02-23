import React from 'react';
import style from "./Myproductcard.module.css";
import { useRecoilValue } from 'recoil';
import {Mainproduct} from "../../recoil/mainproduct/Mainproduct";

export default function Myproductcard(){

      const product=useRecoilValue(Mainproduct)

    return(
        <>
        {/* <h1>card</h1> */}
        <div className={style.container}>
        <div className={style.maincontainer}>
        {/* <div className={style.mycard}> */}
            {product.map((ele)=>(
                <>
        <div className={style.mycard1}>
            <div><img className={style.myimg} src={ele.img}/></div>
            <div><button className={style.mybutton}>shop now</button></div>
            
        </div>
        </>
        ))}
        </div>
        {/* </div> */}
        <div className={style.addver}>
        <p><img className={style.addverimg} src="https://img.freepik.com/free-vector/gradient-sale-background_23-2148934477.jpg"/></p>
         {/* <p><img src="https://img.freepik.com/free-psd/editable-turtleneck-t-shirt-mockup-psd-men-rsquo-s-casual-business-fashion-ad_53876-138385.jpg?size=626&ext=jpg&ga=GA1.2.1011732404.1676991472&semt=ais"/></p>
        <p><img src="https://img.freepik.com/free-psd/flat-design-sales-discount-facebook-template_23-2149957687.jpg?size=626&ext=jpg&ga=GA1.2.1011732404.1676991472&semt=ais" /></p> */}
        </div></div>
        </>
    )
}