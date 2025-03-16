import React from 'react'
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExporeMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import { useState } from 'react';
import FoodItem from '../../components/FoodItem/FoodItem';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />

      <ExploreMenu category={category} setCategory={setCategory}/>

      <FoodDisplay category= {category}/>
      <AppDownload />
    </div>
  )
}

export default Home
