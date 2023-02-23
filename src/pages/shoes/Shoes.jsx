import React from 'react'
import style from './Shoes.module.css';
import { useRecoilValue } from 'recoil';


import Nav from '../../component/navbar/Nav';
import { Sdata } from '../../recoil/shoescard/Shoesdata';


export default function Shoes(){
    const data1=useRecoilValue(Sdata)
    return(
        <>
         <Nav/>
         {/* {data1.map((ele=>ele.pname))} */}
        <h1 className={style.heading}><center>SHOES-COLLECTION</center></h1>
       

        <div className={style.container}>
            <div className={style.maincontainer}>
            <div className={style.boxcontainer}>
                   
                   {data1.map(ele=><>
                    <div className={style.card}>

  <img src={ele.img} />
  <h1>{ele.pname}</h1>
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