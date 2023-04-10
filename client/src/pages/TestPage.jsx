import React, {useEffect} from 'react'
import Chat from '../components/Chat'
import Dialog from '../components/Dialog'
import {login, register, update_email, update_password} from '../utils/connectSQLite'

export default function TestPage() {

 useEffect(() => {
    // register('Customer', '456', '456')
    update_email('Customer', '456', '789','456')
    // register('Customer', '123', '123')
    // update_password('Customer', '123', '1234','123456@qq.com')
    // login('Customer', '123', '123')
  }, [])

  return (
    //<h1 className="text-3xl font-bold underline">
    //  Hello world!
    //</h1>

    <div>
        <Chat />
        <Dialog />
    </div>
  )
}