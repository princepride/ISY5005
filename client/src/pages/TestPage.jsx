import React, {useEffect} from 'react'
import Chat from '../components/Chat'
import {login, register, update_email, update_password} from '../utils/connectSQLite'
import CreateForm from '../components/CreateForm'
import BusinessCard from '../components/BusinessCard'
import test from './test.json'
import image from '../assets/images/img1.jpg'

export default function TestPage() {

 useEffect(() => {
  }, [])

  return (
    <div>
        <Chat />
        <BusinessCard 
        label={"sex"} 
        companyName={"哥哥快操我"} 
        address={"190 Changi Rd, #01-01A"} 
        image={image} 
        information={"新加坡最棒的妓院"}/>
        {/*<CreateForm jsonData={test}/>*/}
    </div>
  )
}