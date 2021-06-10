import React, { useState} from 'react';

const AddPlant = () => {

  const [name, setName] = useState("");
  const [genusSpecies, setGenusSpecies] = useState("");
  const [description, setDescription] = useState("");


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
          <button type="submit" className="btn btn-primary">Add</button>
        </div>

      </form>
    </div>
  )
}

export default AddPlant;
