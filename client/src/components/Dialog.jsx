import React, {useEffect, useState} from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import './Dialog.css';

const Dialog = () => {
    const { dialogVisible, setDialogVisible } = useStateContext();

    const handleClickOutside = (event) => {
        // 如果单击事件发生在 dialog 外面的区域，则隐藏 dialog
        if (event.target === event.currentTarget) {
          setDialogVisible(false);
        }
      };

    //useEffect(() => {
    //    if(dialogVisiable) {
    //        setDialogStyleTailwind("z-10 absolute right-full bottom-10 visible slide-in-right");
    //    }
    //    else {
    //        setDialogStyleTailwind("z-10 absolute right-full bottom-10 invisible");
    //    }
    //  }, [dialogVisiable]);

  return (
    <div
    //className={`fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center ${dialogVisible ? '' : 'hidden'}`}
    className={`fixed inset-0 flex items-center justify-center ${dialogVisible ? '' : 'hidden'}`}
    onClick={handleClickOutside}
  >
        <div className={`z-10 absolute right-full bottom-10 visible ${dialogVisible ? 'slide-in-right' : 'hidden'}`}>
        <div className="w-64 h-96 m-6 bg-red-400 rounded-3xl"></div>
        </div>
    </div>
  )
}

export default Dialog
