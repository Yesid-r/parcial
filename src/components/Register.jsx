import React, { useState } from 'react';

const Register = () => {

    const [dishData, setDishData] = useState({
        idDish: '',
        name: '',
        calories: '',
        isVegetarian: false,
        value: '',
        comments: ''
    });
    const [alert, setAlert] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api-dishes.vercel.app/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dishData)
            });

            if (response.status === 208) {
                console.log('Error: idDish already exists');
                setAlert({ type: 'danger', message: 'Error: idDish already exists' });
            } else {
                const data = await response.json();
                console.log(data);
                setAlert({ type: 'success', message: 'Dish registered successfully!' });
            }
        } catch (error) {
            console.log('Error creating dish:', error);
            setAlert({ type: 'danger', message: 'Error creating dish. Please try again later.' });
        }
    };

    return (
        <div className='container'>
            <h2>Register a Dish</h2>
            {alert && (
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    {alert.message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlert(null)}></button>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="idDish" className="form-label">ID</label>
                    <input type="text" className="form-control" id="idDish" value={dishData.idDish} onChange={(e) => setDishData({ ...dishData, idDish: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={dishData.name} onChange={(e) => setDishData({ ...dishData, name: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="calories" className="form-label">Calories</label>
                    <input type="number" className="form-control" id="calories" value={dishData.calories} onChange={(e) => setDishData({ ...dishData, calories: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="isVegetarian" className="form-label">Is Vegetarian</label>
                    <select className="form-select" id="isVegetarian" value={dishData.isVegetarian} onChange={(e) => setDishData({ ...dishData, isVegetarian: e.target.value === 'true' })}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="value" className="form-label">Value</label>
                    <input type="number" className="form-control" id="value" value={dishData.value} onChange={(e) => setDishData({ ...dishData, value: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="comments" className="form-label">Comments</label>
                    <textarea className="form-control" id="comments" rows="3" value={dishData.comments} onChange={(e) => setDishData({ ...dishData, comments: e.target.value })}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );

}

export default Register