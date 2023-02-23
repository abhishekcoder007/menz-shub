import React from 'react';
import Nav from "../../component/navbar/Nav";
import Footer from "../../component/footer/Footer";
import style from "./Product.module.css";
import { useRecoilValue } from 'recoil';
import { MShirts } from '../../recoil/cloth/Cloth'; 
import { MPants } from '../../recoil/cloth/Cloth';
import { Sdata } from '../../recoil/shoescard/Shoesdata';

export default function  Product(){
    const data1=useRecoilValue(MShirts)
    const data2=useRecoilValue(MPants)
    const data3=useRecoilValue(Sdata)
    return(
        <>
       <Nav/>
       <h1 className={style.heading}><center>SHIRTS-COLLECTION</center></h1>
       

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


        {/* ****pant */}


        <h1 className={style.heading}><center>TROUSERS-COLLECTION</center></h1>
        {/* <h1>{data2.map(ele=>ele.cost)}</h1> */}

        <div className={style.container}>
            <div className={style.maincontainer}>
            <div className={style.boxcontainer}>
                   
                   {data2.map(ele=><>
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


        {/* ********************shoes******************************************* */}


        {/* {data3.map((ele=>ele.pname))} */}
        <h1 className={style.heading}><center>SHOES--COLLECTION</center></h1>
       

        <div className={style.container}>
            <div className={style.maincontainer}>
            <div className={style.boxcontainer}>
                   
                   {data3.map(ele=><>
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


        <Footer/>
        </>
    )
} 