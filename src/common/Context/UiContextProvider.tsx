import { createContext, ReactNode } from 'react';

const UIContext = createContext<IUIContext>({});
// isOneColumn: Boolean,
// isTwoColumns: Boolean,
// isFourColumns: Boolean,

const UIContextProvider = ({ children }: IUIContextProvider) => {
  return <UIContext.Provider value={{}}>{children}</UIContext.Provider>;
};

interface IUIContext {}

interface IUIContextProvider {
  children: ReactNode;
}

export { UIContext };
export default UIContextProvider;
