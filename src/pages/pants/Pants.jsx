import React from 'react';
import style from "./Pants.module.css";

import { MPants } from '../../recoil/cloth/Cloth';

import {useRecoilValue} from "recoil";
import Nav from '../../component/navbar/Nav';
import {useRecoilState } from 'recoil';

import {Cartdata}   from "../../recoil/cartdata/Cartdata";
import {useNavigate} from "react-router-dom";

export default function Pants(){
    const navigate=useNavigate()
    const[b,setb]=useRecoilState(Cartdata)
    const data1=useRecoilValue(MPants)
    
   
    function addmeforbuy(i){
        const myd= data1.filter((ele,index)=>i==index)
        setb([...b,...myd])
        navigate('/cart')
      }

      function addmecart(i){
        if(confirm("product added!")){
        const myd= data1.filter((ele,index)=>i==index)
               setb([...b,...myd])
               alert("Product added")
       }}

       function showproductdetail(name,index){
        navigate(`/items/${name}/${index}`)
}



console.log(data1)
    return(
        <>
         <Nav/>
    <h1 className={style.heading}><center>MY-TROUSERS COLLECTION</center></h1>
        {/* <h1>{data1.map(ele=>ele.cost)}</h1> */}

        <div className={style.container}>
            <div className={style.maincontainer}>
            <div className={style.boxcontainer}>
                   
                   {data1.map((ele,index)=><>
                    <div className={style.card}>

  <img onClick={()=>showproductdetail(ele.name,index)} src={ele.img} />
  <h1>{ele.name}</h1>
  <p class="price">{ele.cost}</p>
  <p>{ele.description}</p>
  <p className={style.buybutton}>
    <button    onClick={()=>addmecart(index)}  >Add to Cart</button> 
    <button onClick={()=>addmeforbuy(index)}>Buy Now</button>
    </p>
  </div>
  </>)}

                  




                </div>
                <div className={style.addevertise}>
                       <img className={style.offerimage} src="https://img.freepik.com/free-vector/gradient-sale-background_52683-80629.jpg?size=626&ext=jpg" alt="hello" />
                </div>


            </div>

        </div>
        
        </>
    )
}