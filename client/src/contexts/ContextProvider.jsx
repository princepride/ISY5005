import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isLogin, setLogin] = useState(false);
    const [userName, setUserName] = useState('');

    return (
        <StateContext.Provider value={{ isLogin, setLogin, userName, setUserName }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);