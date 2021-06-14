import React, { useState, createContext } from "react";

export const PlantsContext = createContext();

export const PlantsContextProvider = (props) => {

  const [plants, setPlants] = useState([]);

  const addPlants = (plant) => {
    setPlants([...plants, plant]);
  };

  return (
    <PlantsContext.Provider value={{
      plants, 
      setPlants,
      addPlants
    }}
    >
      {props.children}
    </PlantsContext.Provider>
  )
};
