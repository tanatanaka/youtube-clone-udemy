import React,{ createContext, useReducer } from 'react'

const initialState = {
  popular: []
};

const reducer = (state, action) => {
  switch(action.type) {
    case "SET_POPULAR":
      return {popular: action.payload.popular};
    default:
      return state;
  };
};

export const Store = createContext({
  globalState: initialState,
  setGlobalStore: () => null
})

export const StoreProvider = ({children}) => {
  const [globalState, setGlobalStore] = useReducer(reducer, initialState);

  return (
    <StoreProvider value={{globalState, setGlobalStore}}>
      {children}
    </StoreProvider>
  )
}


