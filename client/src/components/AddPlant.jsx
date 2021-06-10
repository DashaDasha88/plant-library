import React from 'react';

const AddPlant = () => {
  return (
    <div className="mb-4">
      <form className="row row-cols-lg-auto g-3 align-items-center">

        <div className="co-12">
          <input type="text" className="form-control" placeholder="Plant Name"/>
        </div>
      
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Genus/Species"/>
        </div>
      
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Description"/>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>

      </form>
    </div>
  )
}

export default AddPlant;
