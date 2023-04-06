import React, {useEffect, useState} from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {

  const { dialogVisible, setDialogVisible } = useStateContext();

  //useEffect(() => {
  //  if(dialogVisiable) {
  //    setChatStyleTailwind("z-10 absolute right-10 bottom-10 invisible");
  //  }
  //  else {
  //    setChatStyleTailwind("z-10 absolute right-10 bottom-10 visible");
  //  }

  //}, [dialogVisiable]);
  
  return (
    <div className = {`z-10 absolute right-10 bottom-10 ${dialogVisible ? 'hidden':''}`}>
      <button onClick = {() => {setDialogVisible(true)} }>
        Button
      </button>
    </div>
  )
}

export default Chat;