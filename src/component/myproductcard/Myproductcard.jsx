import React from 'react';
import style from "./Myproductcard.module.css";
import { useRecoilValue } from 'recoil';
import {Mainproduct} from "../../recoil/mainproduct/Mainproduct";
import {useNavigate} from "react-router-dom";


export default function Myproductcard(){
const navigate=useNavigate()
      const product=useRecoilValue(Mainproduct)

      function gotopage(name){

         if (name=='shirts'){
            navigate("/shirts")
         }else if(name=='shoes'){
            navigate("/shoes")
         }
         else if(name=="jeans"){
            navigate("/trousers")
         }

      }

    return(
        <>
        {/* <h1>card</h1> */}
        <div className={style.container}>
        <div className={style.maincontainer}>
        {/* <div className={style.mycard}> */}
            {product.map((ele,index)=>(
                <>
        <div key={index.toString()} className={style.mycard1}>
            <div><img onClick={()=>gotopage(ele.name)} className={style.myimg} src={ele.img}/></div>
            <div><button onClick={()=>gotopage(ele.name)} className={style.mybutton}>shop now</button></div>
            
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