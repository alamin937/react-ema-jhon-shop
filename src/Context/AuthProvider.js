import React, { createContext } from 'react';
import UseHooks from '../UseHooks/UseHooks';

export const authContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = UseHooks();
    return (
        <authContext.Provider value={allContext}>
            {children}
        </authContext.Provider>
        
    );
};

export default AuthProvider;