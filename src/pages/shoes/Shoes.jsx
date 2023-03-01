import React from 'react'
import style from './Shoes.module.css';
import { useRecoilValue } from 'recoil';


import Nav from '../../component/navbar/Nav';
import { Sdata } from '../../recoil/shoescard/Shoesdata';
import {useRecoilState } from 'recoil';

import {Cartdata}   from "../../recoil/cartdata/Cartdata";
import {useNavigate} from "react-router-dom";


export default function Shoes(){

    const navigate=useNavigate()
    const[b,setb]=useRecoilState(Cartdata)
    const data1=useRecoilValue(Sdata)

    function addmeforbuy(i){
       
        const myd= data1.filter((ele,index)=>i==index)
        setb([...b,...myd])
        navigate('/cart')
        alert("Product added")
       
      }

      function addmecart(i){
        if(confirm("shoes added!")){
        const myd= data1.filter((ele,index)=>i==index)
               setb([...b,...myd])}
       }

       function showproductdetail(name,index){
        navigate(`/items/${name}/${index}`)
}
    return(
        <>
         {/* <Nav/> */}
         <div  className={style.main2}><Nav/></div>
        
        <h1 className={style.heading}><center>SHOES-COLLECTION</center></h1>
       

        <div className={style.container}>
            <div className={style.maincontainer}>
            <div className={style.boxcontainer}>
                   
                   {data1.map((ele,index)=>
                   <div key={String(index)}>
                    <div className={style.card}>

  <img onClick={()=>showproductdetail(ele.pname,index)} src={ele.img} />
  <h1>{ele.pname}</h1>
  <p >{ele.cost}</p>
  <p>{ele.description}</p>
  <p className={style.buybutton}>
    <button  onClick={()=>addmecart(index)} >Add to Cart</button> 
    <button onClick={()=>addmeforbuy(index)}>Buy Now</button>
    </p>
  </div>
  </div>)}

                  




                </div>
                <div className={style.addevertise}>
                       <img className={style.offerimage} src="https://img.freepik.com/free-vector/gradient-sale-background_52683-80629.jpg?size=626&ext=jpg" alt="hello" />
                </div>


            </div>

        </div>
        </>
    )
}