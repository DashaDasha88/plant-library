import React, { useState, createContext } from "react";

export const PlantContext = createContext();

export const PlantsContextProvider = props => {
  
  const [plants, setPlants] = useState([])

  return (
    <RestaurantsContext.Provider>
      {props.children}
    </RestaurantsContext.Provider>
  )
}