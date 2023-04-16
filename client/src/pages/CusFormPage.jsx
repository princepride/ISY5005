import CreateForm from '../components/CreateForm'
import Chat from '../components/Chat'
import React from 'react'
import test from '../pages/test.json'
import styled from "@emotion/styled";

function CusFormPage() {

  const Container = styled.div`
  border-radius: 8px;
  border-width: 2px;
  padding: 20px;
  overflow: hidden;
  margin: 20px 80px;
  transition: border-color 0.3s ease-in-out;
`;

  return (
    <div>
        <Container>
        <CreateForm jsonData={test}/>
        </Container>
        <Chat />
    </div>
  )
}

export default CusFormPage