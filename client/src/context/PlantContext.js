import React, { useState, createContext } from "react";

export const PlantsContext = createContext();

export const PlantsContextProvider = props => {

  const [plants, setPlants] = useState([]);

  return (
    <PlantsContext.Provider value={{plants, setPlants}}>
      {props.children}
    </PlantsContext.Provider>
  )
}