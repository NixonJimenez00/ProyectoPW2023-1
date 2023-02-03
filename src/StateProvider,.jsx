import React, { createContext, useContext, useReducer } from "react";
//StateContext es una función que crea un contexto para guardar el estado de la aplicación
export const StateContext = createContext();
//StateProvider es un componente que toma como parámetro reducer, initialState y children.
export const StateProvider = ({ reducer, initialState, children }) => (
  // *El reducer es una función que toma un estado previo y una acción, y devuelve un nuevo estado. El estado inicial es el estado inicial de la aplicación.
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//Finalmente, useStateValue es una función para acceder al contexto creado con StateContext.
export const useStateValue = () => useContext(StateContext);
