import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    
}

export const useStateContext = () => useContext(StateContext);