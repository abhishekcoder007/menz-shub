import React from 'react';
import { useRecoilValue } from 'recoil';
import { MShirts } from '../../recoil/cloth/Cloth';
import  {useParams} from "react-router-dom";
import { Sdata } from '../../recoil/shoescard/Shoesdata';
import { MPants } from '../../recoil/cloth/Cloth';
import Nav from '../../component/navbar/Nav';
// import{useEffect} from "react";


function Productdetail() {
const data1=useRecoilValue(MShirts)
const shoesdata1=useRecoilValue(Sdata)
const pantdata1=useRecoilValue(MPants)

  const {name,id}=useParams()
  const value=parseInt(id)
  const nameproduct=name
  console.log((nameproduct))
  
  
  return (
    <div>
      <Nav/>
     <div style={{textAlign:"center"}}> <h1>Product--detail{parseInt(value)}</h1>
      {data1.filter((ele,index)=>index===value && ele.name==nameproduct).map(ele=>(
        <>
      <h1>{ele.name}</h1>
      <img src={ele.img}/>
      <h2>product-description</h2>
      <p>{ele.description}</p>
      <i>Rs:-{ele.price}</i>

        </>
        ))}

{shoesdata1.filter((ele,index)=>index===value && ele.pname==nameproduct).map(ele=>(
        <>
      <h1>{ele.pname}</h1>
      <img src={ele.img}/>
      <h2>product-description</h2>
      <p>{ele.description}</p>
      <i>Rs:-{ele.price}</i>

        </>
        ))}
        {pantdata1.filter((ele,index)=>index===value && ele.name==nameproduct).map(ele=>(
        <>
      <h1>{ele.name}</h1>
      <img src={ele.img}/>
      <h2>product-description</h2>
      <p>{ele.description}</p>
      <i>Rs:-{ele.price}</i>

        </>
        ))}
    </div>
    </div>
  )
}

export default Productdetail
