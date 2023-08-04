import React, { useEffect, useState } from 'react';
import DishForm from './DishForm';

const DishesList = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-dishes.vercel.app/');
        const data = await response.json();
        setDishes(data.data);
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container'>
    <DishForm />
      <h1>Dishes List</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Calories</th>
              <th>Is Vegetarian</th>
              <th>Value</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {dishes.map((dish) => (
              <tr key={dish._id}>
                <td>{dish.idDish}</td>
                <td>{dish.name}</td>
                <td>{dish.calories}</td>
                <td>{dish.isVegetarian ? 'Yes' : 'No'}</td>
                <td>{dish.value}</td>
                <td>{dish.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DishesList;