import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import PlantFinder from "../apis/PlantFinder";

const UpdatePlant = () => {

  const { id } = useParams();
  let history = useHistory();

  const [name, setName] = useState("");
  const [genusSpecies, setGenusSpecies] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await PlantFinder(`/${id}`);

      setName(response.data.data.name);
      setGenusSpecies(response.data.data.genus_species);
      setDescription(response.data.data.description);
    };

    fetchData();

  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPlant = await PlantFinder.put(`/${id}`, {
      name,
      genus_species: genusSpecies,
      description
    });
    history.push("/");
  }


  return (
    <div>
      <form action="">

        <div className="form-group">
          <label htmlFor="name">Plant Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Genus/Species</label>
          <input
            value={genusSpecies}
            onChange={(e) => setGenusSpecies(e.target.value)}
            id="genus_species"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="description"
            className="form-control"
            type="text"
          />
        </div>

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default UpdatePlant;
