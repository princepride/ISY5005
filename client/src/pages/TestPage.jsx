import React, {useEffect} from 'react'
import Chat from '../components/Chat'
import Dialog from '../components/Dialog'
import {login} from '../utils/connectSQLite'

export default function TestPage() {

 useEffect(() => {
    login('Customer', '123', '123')
    login('Customer', '123', '1234')
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