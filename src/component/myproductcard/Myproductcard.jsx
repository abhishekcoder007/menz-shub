import React from 'react';
import style from "./Myproductcard.module.css";
import { useRecoilState, useRecoilValue } from 'recoil';
import {Mainproduct} from "../../recoil/mainproduct/Mainproduct";
import {useNavigate} from "react-router-dom";
// import { useRecoilValue } from 'recoil';
import {Searchitem} from "../../recoil/allitemdata/Allitem"
import { Searcfilter} from "../../recoil/allitemdata/Allitem"
import {Cartdata}   from "../../recoil/cartdata/Cartdata";

export default function Myproductcard(){
const navigate=useNavigate()
      const product=useRecoilValue(Mainproduct)
      const searchwith=useRecoilValue(Searchitem)
      const [datafilter,setfilter]=useRecoilState(Searcfilter)
      const [datacart,setcart]=useRecoilState(Cartdata)
    console.log(datafilter)
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
      function buynow(ele){
         setcart([...datacart,ele])
         navigate("/cart")
      }
      function showproductdetail(name,index){
         navigate(`/items/${name}/${index}`)
 }

    return(
        <>
         {/* {searchwith?<> */}
         {/* {datafilter.map(ele=> */}
            {/* // <p>{ele.name}</p>)} */}
            {/* </>:""} */}

            <div className={style.maincontainer}>
     
   {searchwith?   <>
    {datafilter.map((ele,index)=>(
         <div key={index.toString()} >
 <div className={style.mycard1}>
     <div><img onClick={()=>showproductdetail(ele.name,index)} className={style.myimg} src={ele.img}/></div>
     <div><button onClick={()=>buynow(ele)} className={style.mybutton}>buy now</button></div>
     
 </div>
 </div>
 ))}</> :""}
 </div>



       
        <div className={style.container}>
        <div className={style.maincontainer}>
     
            {product.map((ele,index)=>(
                <div key={index.toString()} >
        <div className={style.mycard1}>
            <div><img onClick={()=>gotopage(ele.name)} className={style.myimg} src={ele.img}/></div>
            <div><button onClick={()=>gotopage(ele.name)} className={style.mybutton}>shop now</button></div>
            
        </div>
        </div>
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