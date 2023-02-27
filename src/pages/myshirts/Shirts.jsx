import React from 'react';
import style from "./Shirts.module.css";
import Nav from '../../component/navbar/Nav';
import { useRecoilValue,useRecoilState } from 'recoil';
import { MShirts } from '../../recoil/cloth/Cloth'; 
import {Cartdata}   from "../../recoil/cartdata/Cartdata";
import {useNavigate} from "react-router-dom";



export default function MYshirts(){
 const data1=useRecoilValue(MShirts)
 const [b,setb]=useRecoilState(Cartdata)
const navigate=useNavigate()

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
  }
  
 }

 function showproductdetail(name,index){
           navigate(`/items/${name}/${index}`)
 }

    return(

        <>
        <Nav/>
        <h1 className={style.heading}><center>MY-SHIRTS COLLECTION</center></h1>
       

        <div className={style.container}>
            <div className={style.maincontainer}>
            <div className={style.boxcontainer}>
                   
                   {data1.map((ele,index)=><>
                    <div className={style.card}>
                          
  <img  onClick={()=>showproductdetail(ele.name,index)} src={ele.img} />
  <h1>{ele.name}</h1>
  <p class="price">{ele.cost}</p>
  <p>{ele.description}</p>
  <p className={style.buybutton}>
    <button onClick={()=>addmecart(index)} >Add to Cart</button> 
    <button onClick={()=>addmeforbuy(index)}  >Buy Now</button>
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