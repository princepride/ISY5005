import React, { createContext, useContext, useState, useEffect } from 'react';

const StateWZPContext = createContext(window.wzp);

export const WZPContextProvider = ({ children }) => {
    return (
        <StateWZPContext.Provider value={{}}>
            {children}
        </StateWZPContext.Provider>
    )
}

export const useWZPStateContext = () => useContext(StateWZPContext);