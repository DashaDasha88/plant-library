import React, { useContext, useState} from 'react';
import PlantFinder from "../apis/PlantFinder";
import { PlantsContext } from '../context/PlantContext';


const AddPlant = () => {

  const {addPlants} = useContext(PlantsContext);

  const [name, setName] = useState("");
  const [genusSpecies, setGenusSpecies] = useState("");
  const [description, setDescription] = useState("");

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      const response = await PlantFinder.post("/", {
        name,
        genus_species: genusSpecies,
        description
      })
      addPlants(response.data.data.plants);

    } catch (err) {
      console.log(err);
    }

  }


  return (
    <div className="mb-4">
      <form className="row row-cols-lg-auto g-3 align-items-center">

        <div className="co-12">
          <input 
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            className="form-control" 
            placeholder="Plant Name"
          />
        </div>
      
        <div className="col-12">
          <input
            value={genusSpecies}
            onChange={e => setGenusSpecies(e.target.value)}
            type="text" 
            className="form-control" 
            placeholder="Genus/Species"
          />
        </div>
      
        <div className="col-12">
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
            type="text" 
            className="form-control" 
            placeholder="Description"
          />
        </div>

        <div className="col-12">
          <button
          onClick={handleSumbit}
          type="submit" 
          className="btn btn-primary"
          >
            Add
          </button>
        </div>

      </form>
    </div>
  )
}

export default AddPlant;
