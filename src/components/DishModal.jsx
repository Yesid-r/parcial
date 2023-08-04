import React from 'react';

const DishModal = ({ dish, onClose }) => {
  return (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Dish Details</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>ID: {dish.idDish}</p>
            <p>Name: {dish.name}</p>
            <p>Calories: {dish.calories}</p>
            <p>Is Vegetarian: {dish.isVegetarian ? 'Yes' : 'No'}</p>
            <p>Value: {dish.value}</p>
            <p>Comments: {dish.comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishModal;
