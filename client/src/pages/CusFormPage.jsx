import CreateForm from '../components/CreateForm'
import Chat from '../components/Chat'
import React from 'react'
import test from '../pages/test.json'

function CusFormPage() {
  return (
    <div>
        <CreateForm jsonData={test}/>
        <Chat />
    </div>
  )
}

export default CusFormPage