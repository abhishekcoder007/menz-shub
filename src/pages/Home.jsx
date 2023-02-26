import React from 'react';
import style from "./Home.module.css";
import Footer from '../component/footer/Footer';
import Nav from '../component/navbar/Nav';
import Homebody from  '../component/homebody/Homebody';
import Myproductcard from '../component/myproductcard/Myproductcard';
import Productnav from '../component/productnav/productnav';

export default function Home(){
 
    return(
        <>
        <div className={style.main1}>
        {/* <div className={style.main2}> */}
        <div  className={style.main2}><Nav/></div>
        <div id="go">< Productnav/></div>
        <Homebody/>
        <Myproductcard/>
        <Footer/>
        <button className={style.backtop}><a className={style.backtop} href="#go" >back to top</a></button>
        {/* </div> */}
        
        </div>
        </>
    )
}