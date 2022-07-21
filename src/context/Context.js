import React, { createContext } from 'react';

export const UserContext = createContext();

const Context = ({children,cart}) => {
    return (
        <UserContext.Provider value={cart}>
            {children}
        </UserContext.Provider>
    );
};

export default Context;