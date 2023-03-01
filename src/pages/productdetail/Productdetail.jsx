import React from 'react';
import style from "./Productdetail.module.css";
import { useRecoilValue,useRecoilState } from 'recoil';
import { MShirts } from '../../recoil/cloth/Cloth';
import  {useParams} from "react-router-dom";
import { Sdata } from '../../recoil/shoescard/Shoesdata';
import { MPants } from '../../recoil/cloth/Cloth';
import Nav from '../../component/navbar/Nav';
// import{useEffect} from "react";
import {Cartdata} from "../../recoil/cartdata/Cartdata"
import { useNavigate} from 'react-router-dom';

function Productdetail() {
  const navigate=useNavigate()
const data1=useRecoilValue(MShirts)
const shoesdata1=useRecoilValue(Sdata)
const pantdata1=useRecoilValue(MPants)
const[add,setadd]=useRecoilState(Cartdata)
  const {name,id}=useParams()
  const value=parseInt(id)
  const nameproduct=name
  console.log((nameproduct))

  function addmecart(ele){
    if(window.confirm("product added!"))
setadd([...add,ele])


  }

  
  function addmeforbuy(ele){
    setadd([...add,ele])
    navigate("/cart")
    
    
      }
  
  
  return (
    <div>
      {/* <Nav/> */}
      <div  className={style.main2}><Nav/></div>
     <div className={style.detailcontent}> <h1>Product--detail{parseInt(value)}</h1>
      {data1.filter((ele,index)=> index===value && ele.name==nameproduct).map(ele=>(
        <div>
      <h1>{ele.name}</h1>
      <img className={style.myimg}src={ele.img}/>
      <h2>product-description</h2>
      <p>{ele.description}</p>
      <i>Rs:-{ele.price}</i>
      <p className={style.buybutton}>
    <button onClick={()=>addmecart(ele)} >Add to Cart</button> 
    <button onClick={()=>addmeforbuy(ele)}  >Buy Now</button>
    </p>

        </div>
        ))}

{shoesdata1.filter((ele,index)=>index===value && ele.pname==nameproduct).map(ele=>(
        <>
      <h1>{ele.pname}</h1>
      <img src={ele.img}/>
      <h2>product-description</h2>
      <p>{ele.description}</p>
      <i>Rs:-{ele.price}</i>
      <p className={style.buybutton}>
    <button onClick={()=>addmecart(ele)} >Add to Cart</button> 
    <button onClick={()=>addmeforbuy(ele)}  >Buy Now</button>
    </p>

        </>
        ))}
        {pantdata1.filter((ele,index)=>index===value && ele.name==nameproduct).map(ele=>(
        <>
      <h1>{ele.name}</h1>
      <img src={ele.img}/>
      <h2>product-description</h2>
      <p>{ele.description}</p>
      <i>Rs:-{ele.price}</i>
      <p className={style.buybutton}>
    <button onClick={()=>addmecart(ele)} >Add to Cart</button> 
    <button onClick={()=>addmeforbuy(ele)}  >Buy Now</button>
    </p>
      {/* <button onClick={()=>addme(ele)}>add to cart</button> */}

        </>
        ))}
    </div>
    </div>
  )
}

export default Productdetail
