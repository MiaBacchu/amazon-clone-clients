import React, { createContext } from 'react';

export const UserContext = createContext();

const Context = ({children,value}) => {
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};

export default Context;