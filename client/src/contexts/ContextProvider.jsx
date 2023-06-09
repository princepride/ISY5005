import React, { createContext, useContext, useState, useEffect } from 'react';
import config_data from '../assets/data/config_data.json';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isLogin, setLogin] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userType, setUserType] = useState(config_data.default_user_type);
    const [formJson, setFormJson] = useState('');

    return (
        <StateContext.Provider value={{ isLogin, 
        setLogin, userName, setUserName, 
        userType, setUserType, userEmail,
        setUserEmail, formJson, setFormJson }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);