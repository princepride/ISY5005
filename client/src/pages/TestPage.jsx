import React, {useEffect} from 'react'
import Chat from '../components/Chat'
import CusProfilePage from '../pages/CusProfilePage';
import {login, register, update_email, update_password} from '../utils/connectSQLite'
import CreateForm from '../components/CreateForm'
import test from './test.json'

export default function TestPage() {

 useEffect(() => {
    update_email('Customer', '456', '789','456')
  }, [])

  return (
    <div>
        <Chat />
        <CusProfilePage />
        {/*<CreateForm jsonData={test}/>*/}
    </div>
  )
}