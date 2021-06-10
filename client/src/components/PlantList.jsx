import React, { useContext, useEffect } from 'react';
import PlantFinder from "../apis/PlantFinder";
import { PlantsContext, PlantsContextProvider } from '../context/PlantContext';

const PlantList = (props) => {

  const {plants, setPlants} = useContext(PlantsContext);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await PlantFinder.get("/");
        setPlants(response.data.data.plants);
  
      } catch (err) {
  
      }
    }

    fetchData();

  }, []);

  return (
    <div className="list-group">
      <div className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Plant</th>
            <th scope="col">Genus/Species</th>
            <th scope="col">Description</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {plants && plants.map((plant) => {

            return (

            <tr key={plant.id}>
              <td>{plant.name}</td>
              <td>{plant.genus_species}</td>
              <td>{plant.description}</td>
              <td><button className="btn btn-warning">Update</button></td>
              <td><button className="btn btn-danger">Delete</button></td>
            </tr>

            )
    
          })}
          {/* <tr>
            <td>Sage</td>
            <td>Salvia Officinalis</td>
            <td>Fragrant herb, member of the mint family, native to the Mediterranean</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr> */}

        </tbody>
      </div>
      
    </div>
  )
}

export default PlantList;
