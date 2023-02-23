import React from 'react';
import style from "./Pants.module.css";

import { MPants } from '../../recoil/cloth/Cloth';

import {useRecoilValue} from "recoil";
import Nav from '../../component/navbar/Nav';

export default function Pants(){
    const data1=useRecoilValue(MPants)
    const img1="https://img.freepik.com/free-vector/gradient-sale-background_52683-80629.jpg?size=626&ext=jpg"
// const datapants=useRecoilvalue(MPants)
// const sh =useRecoilvalue(Shirts)
console.log(data1)
    return(
        <>
         <Nav/>
    <h1 className={style.heading}><center>MY-TROUSERS COLLECTION</center></h1>
        {/* <h1>{data1.map(ele=>ele.cost)}</h1> */}

        <div className={style.container}>
            <div className={style.maincontainer}>
            <div className={style.boxcontainer}>
                   
                   {data1.map(ele=><>
                    <div className={style.card}>

  <img src={ele.img} />
  <h1>{ele.name}</h1>
  <p class="price">{ele.cost}</p>
  <p>{ele.description}</p>
  <p className={style.buybutton}>
    <button>Add to Cart</button> 
    <button>Buy Now</button>
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