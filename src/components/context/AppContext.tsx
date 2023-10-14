import React, { createContext, FC, ReactNode, useReducer } from "react";

import { AppAction, AppContextState } from "@types_/context.types";
import { appReducer } from "@context/reducers";

interface IAppContext {
  children: ReactNode;
}

const initialState: AppContextState = {
  something: "",
};

export const AppContext = createContext<{
  state: AppContextState;
  dispatch: React.Dispatch<AppAction>;
} | undefined>(undefined);

const AppContextProvider: FC<IAppContext> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
