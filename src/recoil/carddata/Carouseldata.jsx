
import React from 'react';
import {atom} from 'recoil'

export const Caroseldata=atom({
    key:"Caroseldata",
    default:[
        {
            imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VKNXgwglS3Ew3vVmaMbeJG7btl5-I5PL5g&usqp=CAU",
            productname:"Slim-Fit Jeans",
            price:"Starting At- Rs 999 Only",
            about:"Super slim and comfy . Easy to wash",
        },
        {
          imgurl:"data:image/jpeg;base64,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",
          productname:"Shoes",
          price:" Starting At- Rs 899 Only",
          about:"Shoes are Comfortable,Long Lasting",

        },
        {
            imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahL2lCcaTPWg3uBYbuTQK5ZTaYs3K2J7_bw&usqp=CAU",
            productname:"Slim-Fit-Jeans",
            price:"Starting At- Rs 999 Only",
            about:"It is Comfortable, Stretchable",
  
          },
          {
            imgurl:"https://images.unsplash.com/photo-1624538000860-24716b9050f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxlYXRoZXIlMjB3YWxsZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            productname:"Wallet",
            price:" Starting At- Rs 499 Only",
            about:"Pure Leather, Long Lasting ,Light Weight",
  
          },
          {
            imgurl:"https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1lbnMlMjB0JTIwc2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            productname:"T-shirt",
            price:"Starting At- Rs 599 Only",
            about:"100% Pure Cotton",
  
          },
          {
            imgurl:"https://images.unsplash.com/photo-1664286022007-9d2eb1003165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnMlMjBiZWx0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            productname:"Belts",
            price:"Starting At- Rs 599 Only",
            about:"Belts are Pure Leather and Made In India",
  
          },
          {
            imgurl:"https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG1lbnMlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            productname:"Men's-Shirt",
            price:"Starting At- Rs 499 Only",
            about:"Well Designed,Comfortable, Slim-Fit",
  
          },
          {
            imgurl:"https://img.freepik.com/free-vector/mens-shaving-cosmetics-realistic-composition_1284-22831.jpg?size=338&ext=jpg",
            productname:"Mens-Cosmetics",
            price:"Starting At- Rs 99 Only",
            about:"Purely Organic Products",
  
          },
          {
            imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VKNXgwglS3Ew3vVmaMbeJG7btl5-I5PL5g&usqp=CAU",
            productname:"Slim-Fit Jeans",
            price:"Starting At- Rs 999 Only",
            about:"Super slim and comfy . Easy to wash",
        },
        {
          imgurl:"data:image/jpeg;base64,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",
          productname:"Shoes",
          price:" Starting At- Rs 899 Only",
          about:"Shoes are Comfortable,Long Lasting",

        },
        {
            imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahL2lCcaTPWg3uBYbuTQK5ZTaYs3K2J7_bw&usqp=CAU",
            productname:"Jeans",
            price:"Starting At- Rs 999 Only",
            about:"It is Comfortable, Stretchable",
  
          },
          {
            imgurl:"https://images.unsplash.com/photo-1624538000860-24716b9050f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGxlYXRoZXIlMjB3YWxsZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            productname:"Wallet",
            price:" Starting At- Rs 499 Only",
            about:"Pure Leather, Long Lasting ,Light Weight",
  
          },
          {
            imgurl:"https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1lbnMlMjB0JTIwc2hpcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            productname:"T-shirt",
            price:"Starting At- Rs 599 Only",
            about:"100% Pure Cotton",
  
          },
          {
            imgurl:"https://images.unsplash.com/photo-1664286022007-9d2eb1003165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnMlMjBiZWx0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            productname:"Belts",
            price:"Starting At- Rs 599 Only",
            about:"Belts are Pure Leather and Made In India",
  
          },
          {
            imgurl:"https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG1lbnMlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            productname:"Men's-Shirt",
            price:"Starting At- Rs 499 Only",
            about:"Well Designed,Comfortable, Slim-Fit",
  
          },
          {
            imgurl:"https://img.freepik.com/free-vector/mens-shaving-cosmetics-realistic-composition_1284-22831.jpg?size=338&ext=jpg",
            productname:"Mens-Cosmetics",
            price:"Starting At- Rs 99 Only",
            about:"Purely Organic Products",
  
          },
        //   {
        //     imgurl:"",
        //     productname:"",
        //     price:"",
        //     about:"",
  
        //   },
    ]
}) 