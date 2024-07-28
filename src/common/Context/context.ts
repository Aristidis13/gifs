import { createContext } from 'react';

/**
 * Context that performs calculations for the UI
 */
const UIContext = createContext({});

const UIContextProvider = () => {
    return <UIContext.Provider>
}
