import React, { FC } from 'react';
import { IUser } from '../api/types';

type State = {
  authUser: IUser | null;
};

type Action = {
  type: string;
  payload: IUser | null;
};

interface ContextInterface {
  state: State;
  dispatch: Dispatch;
}

type Dispatch = (action: Action) => void;

const initialState: State = {
  authUser: null,
};

type AppContextProviderProps = { children: React.ReactNode };

const AppContext = React.createContext<
  ContextInterface | undefined
>(undefined);

const stateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        authUser: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = React.useReducer(stateReducer, initialState);
  const value = { state, dispatch };
  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (context) {
    return context;
  }

  throw new Error(`useAppContext must be used within a AppContextProvider`);
};

export { AppContextProvider, useAppContext };
