import React from 'react';
import Header from '../components/Header';
import AddPlant from '../components/AddPlant';
import PlantList from '../components/PlantList';

const HomePage = () => {
  return (
    <div>
      <Header />
      <AddPlant />
      <PlantList />
    </div>
  )
};

export default HomePage;
