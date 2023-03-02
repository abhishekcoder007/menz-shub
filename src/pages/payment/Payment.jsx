import React, { useState ,useEffect} from "react";
import style from "./Payment.module.css";
import {Cartdata} from "../../recoil/cartdata/Cartdata";
import { useRecoilValue,useRecoilState } from 'recoil';
import {useNavigate} from "react-router-dom";


import Nav from "../../component/navbar/Nav";
  

export default function Payment() {
    const [p,setp]=useState(0)
    const navigate=useNavigate()
    const data=useRecoilValue(Cartdata)
    

    function navigatehome(){

        navigate("/")

    }
    useEffect(()=>{
        let sum=0;
        
       for(let i=0;i<data.length;i++){
        sum=sum + data[i].price
        // setp(sum)
       }
       console.log(sum)
       setp(sum)
    }
       ,[data])
  
 





 



  return (
    <>
       <div  className={style.main2}><Nav/></div>
      <div className={style.card}>
        <div className={style.signincard}>
          <h2 className={style.heading}>"Total-Payment"</h2>
          <form>
            <div className={style.inputbox}>
            {/* <div className={style.billcard} > */}
            <p className={style.payment}>payment option will available soon</p>
                        <div><i>menz- hub private ltd.</i></div>
                        {data.map((ele,index)=>(<div key={index.toString()}>
                        <p>productname:-{ele.name} <span>Cost:-{ele.cost}</span></p>

                    
                        </div>))}
                        {/* <button onClick={costme}>cost</button> */}
                        <p>total cost:-{p}</p>
                        <button onClick={navigatehome}>DONE</button>
                       {/* </div> */}
             
            </div>
            
            {/* <div className={style.inputbox}>
            
            </div>
            
            <div className={style.inputbox}>
              
            </div> */}
            
            {/* <button>submit</button> */}
          </form>
        </div>
      </div>
    </>
  );
}