import React, { createContext, FC, ReactNode, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { AppAction, AppContextState } from "@types_/context.types";
import { appReducer } from "@context/reducers";

interface IAppContext {
  children: ReactNode;
}

const initialState: AppContextState = {
  something: "",
  navigate: () => null,
};

export const AppContext = createContext<{
  state: AppContextState;
  dispatch: React.Dispatch<AppAction>;
  navigateToRoute: (path: string) => void;
} | undefined>(undefined);

const AppContextProvider: FC<IAppContext> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(appReducer, initialState);

  const navigate = useNavigate();

  {/* Context global functions functions */ }
  const navigateToRoute = (path: string) => {
    return navigate(path);
  };

  const values = {
    state,
    dispatch,
    navigateToRoute,
  };

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
