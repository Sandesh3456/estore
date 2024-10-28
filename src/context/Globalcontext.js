import React, { createContext } from 'react';

export const Global = createContext();

export const GlobalContext = (props) => {
    return (
        <Global.Provider value="react">
            {props.children}
        </Global.Provider>
    );
};
