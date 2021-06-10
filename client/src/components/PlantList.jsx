import React from 'react';

const PlantList = () => {
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
          <tr>
            <td>Sage</td>
            <td>Salvia Officinalis</td>
            <td>Fragrant herb, member of the mint family, native to the Mediterranean</td>
            <td><button className="btn btn-warning">Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>

        </tbody>
      </div>
      
    </div>
  )
}

export default PlantList;
