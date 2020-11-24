import React, { createContext, useContext, useReducer } from "react";

//Datalayer Preparation
export const StateContext = createContext();

//Data layer wrap
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);