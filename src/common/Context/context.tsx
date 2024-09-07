import { Provider, useContext, createContext, ReactNode } from 'react';

const UIContext = createContext<IUIContext>({});
// isOneColumn: Boolean,
// isTwoColumns: Boolean,
// isFourColumns: Boolean,

const UIContextProvider = ({ children }: UIContextProvider) => {
  return <UIContext.Provider value={{}}>{children}</UIContext.Provider>;
};

interface IUIContext {}

interface UIContextProvider {
  children: ReactNode;
}
