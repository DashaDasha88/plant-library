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
        console.log(err);
      }
    }

    fetchData();

  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();

    try {
      const response = await PlantFinder.delete(`/${id}`);
      console.log(response);
      
      setPlants(plants.filter(plant => {
        return plant.id !== id;
      }))

    } catch (err) {
      console.log(err);
    }
  }

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
                <td>
                  <button 
                  className="btn btn-warning"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={(e) => handleDelete(e, plant.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>

            )
    
          })}

        </tbody>
      </div>
      
    </div>
  )
}

export default PlantList;
