import React, { createContext, useContext, useReducer } from 'react';
import { extractActions } from '@Common/utils/context';
import * as actions from '@Player/context/actions';

export const StateContext = createContext(null);

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, extractActions([state, dispatch], actions)]}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
