import React, { createContext, useContext, useState, useEffect } from 'react';

const StateWZPContext = createContext(window.wzp);

export const WZPContextProvider = ({ children }) => {
    
}

export const useWZPStateContext = () => useContext(StateWZPContext);