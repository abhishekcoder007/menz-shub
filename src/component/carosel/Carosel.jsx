import React from "react";
import Carousel from 'react-multi-carousel';
import style from  './Carosel.module.css';
import 'react-multi-carousel/lib/styles.css';
import { useRecoilValue } from "recoil";
import { Caroseldata } from "../../recoil/carddata/carouseldata";

export default function Carosel(){
    const data=useRecoilValue(Caroseldata);
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

    return(
        <>

<Carousel   
 infinite={true}
 showDots={true}
 
responsive={responsive}>

{data.map((ele,i)=>(
<>
<div key={i} className={style.card}>
      <img className={style.imgstyle} src={ele.imgurl} />
      <h1>{ele.productname}</h1>
      <p className={style.price}>{ele.price}</p>
     <p> {ele.about}</p>
      {/* <p><button>Shop Now</button></p> */}
      </div>
 
   </>
    ))}







</Carousel>;
        
        </>
    )
}


// data.map((ele)=>(
//     <>
//     <div className={style.card}>
//       <img src={ele.imgurl} />
//       <h1>{ele.productname}</h1>
//       <p className={style.price}>{ele.price}</p>
//       <p> {ele.about}</p>
//       <p><button>Add to Cart</button></p> </>)