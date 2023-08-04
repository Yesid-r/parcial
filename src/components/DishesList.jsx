import React, { useEffect, useState } from 'react';
import DishForm from './DishForm';
import DishModal from './DishModal';

const DishesList = () => {
    

  const [dishes, setDishes] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);


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
  const handleOpenModal = async (_id) => {
    try {
      console.log(`id to search: ${_id}`)
      const response = await fetch(`https://api-dishes.vercel.app/${_id}`);
      const data = await response.json();
      console.log(`data: ${data.name}`)
      setSelectedDish(data.data);
    } catch (error) {
      console.error('Error searching for data:', error);
    }
  }
  

  const handleCloseModal = () => {
    setSelectedDish(null);
  };

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
              <th>Action</th>
              
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
                <td>
                  <button type="button" className="btn btn-primary" onClick={() => handleOpenModal(dish._id)}>
                    View
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedDish && <DishModal dish={selectedDish} onClose={handleCloseModal} />}
    </div>
  );
};

export default DishesList;