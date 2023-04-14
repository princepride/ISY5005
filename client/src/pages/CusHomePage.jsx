import React from 'react'
import image from '../assets/images/img1.jpg'
import BusinessCard from '../components/BusinessCard'

function CusHomePage() {
  return (
    <div>
        <BusinessCard 
        label={"sex"} 
        companyName={"哥哥快操我"} 
        address={"190 Changi Rd, #01-01A"} 
        image={image} 
        information={"新加坡最棒的妓院"}/>
    </div>
  )
}

export default CusHomePage