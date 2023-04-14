import React from 'react'
//import img1 from '../assets/images/img1.jpg'
//import img2 from '../assets/images/img2.jpg'
//import img3 from '../assets/images/img3.jpg'
//import img4 from '../assets/images/img4.jpg'
//import img5 from '../assets/images/img5.jpg'
//import img6 from '../assets/images/img6.jpg'
import { img1, img2, img3, img4, img5, img6 } from "../assets"
import BusinessCard from '../components/BusinessCard'

function CusHomePage() {
  return (
    <div className="flex">
        <BusinessCard 
        label={"sex"} 
        companyName={"哥哥快操我"} 
        address={"190 Changi Rd, #01-01A"} 
        image={img1} 
        information={"新加坡最棒的妓院"}/>
        <BusinessCard 
        label={"sex"} 
        companyName={"哥哥快操我"} 
        address={"190 Changi Rd, #01-01A"} 
        image={img2} 
        information={"新加坡最棒的妓院"}/>
        <BusinessCard 
        label={"sex"} 
        companyName={"哥哥快操我"} 
        address={"190 Changi Rd, #01-01A"} 
        image={img3} 
        information={"新加坡最棒的妓院"}/>
        <BusinessCard 
        label={"sex"} 
        companyName={"哥哥快操我"} 
        address={"190 Changi Rd, #01-01A"} 
        image={img4} 
        information={"新加坡最棒的妓院"}/>
        <BusinessCard 
        label={"sex"} 
        companyName={"哥哥快操我"} 
        address={"190 Changi Rd, #01-01A"} 
        image={img5} 
        information={"新加坡最棒的妓院"}/>
        <BusinessCard 
        label={"sex"} 
        companyName={"哥哥快操我"} 
        address={"190 Changi Rd, #01-01A"} 
        image={img6} 
        information={"新加坡最棒的妓院"}/>
    </div>
  )
}

export default CusHomePage