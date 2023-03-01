import React, { useEffect } from 'react';
import {Cartdata} from "../../recoil/cartdata/Cartdata";
import { useRecoilValue,useRecoilState } from 'recoil';
import style from "./Mycart.module.css";
import  {MShirts} from "../../recoil/cloth/Cloth";
import { useState } from 'react';
import Nav from '../../component/navbar/Nav';
import Productnav from '../../component/productnav/Productnav';



export default function Mycart(){

 const [p,setp]=useState(0)
 
 const mydata1=useRecoilValue(MShirts)
 const [a,seta]=useRecoilState (Cartdata)
//  let sum=0;
const g={
    name:"agh",
}

function click(){
    seta([...a,...mydata1])
    console.log("hello")
}

function deleteitemcart(i){

    seta(a.filter((ele,index)=>i!==index))
}


   useEffect(()=>{
    let sum=0;
    console.log(a)
   for(let i=0;i<a.length;i++){
    sum=sum + a[i].price
    // setp(sum)
   }
   console.log(sum)
   setp(sum)
}
   ,[a])




    return(
<>
<div className={style.mycontainer}>
       
        {/* <button onClick={click}>click</button>
        {a.map(ele=>ele.name)} */}
        {/* <Nav/> */}
        <div  className={style.main2}><Nav/></div>
        {/* < Productnav/> */}
        <div  className={style.heading}> < Productnav/></div>

        <h1 className={style.heading}><center>CART-ITEMS</center></h1>
       

        <div className={style.container}>
            <div className={style.maincontainer}>
            <div className={style.boxcontainer}>
                  {a.length>0?<>
                   {a.map((ele,index)=><>
                    <div className={style.card}>

  <img src={ele.img} />
  <h1>{ele.name}</h1>
  <p>{ele.cost}</p>
  <p>{ele.description}</p>
  <p className={style.buybutton}>
  <button onClick={()=>deleteitemcart(index)} >delete</button> 
    {/* <button onClick={()=>addmecart(index)} >Add to Cart</button> 
    <button onClick={()=>addmeforbuy(index)}  >Buy Now</button> */}
    </p>
  </div>
    </>)}</>:<h1><center>"SHOP NOW"</center></h1>}

                  




                </div>

                {/* <h2> Payment</h2> */}
                <div className={style.addevertise}>
                <h2> Payment</h2>
                       <div className={style.billcard} >
                        <div><i>menz- hub private ltd.</i></div>
                        {a.map((ele,index)=>(<div key={index.toString()}>
                        <p>productname:-{ele.name} <span>Cost:-{ele.cost}</span></p>

                    
                        </div>))}
                        {/* <button onClick={costme}>cost</button> */}
                        <p>total cost:-{p}</p>
                        <button >DONE</button>
                       </div>

                </div>


            </div>

        </div>
        
        </div>
        </>
    )
}