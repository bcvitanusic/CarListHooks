import React, { useState } from "react";

const EditCarForm = ({ currentCar, updateCar, setEditing }) => {
  const [car, setCar] = useState(currentCar);

  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (car.name) updateCar(car);
  };

  return (
    <div className="form">
      <form>
        <div className="edit-container">
          <label>Name</label>
        </div>
        <input
          type="text"
          name="name"
          className="inputfield"
          value={car.name}
          onChange={handleInputChange}
        />
        <div className="edit-container">
          <label>Price:</label>
        </div>
        <input
          type="text"
          name="price"
          className="inputfield"
          value={car.price}
          onChange={handleInputChange}
        />
        <div>
          <button onClick={handleSubmit} className="button edit">
            Update car
          </button>
          <button onClick={() => setEditing(false)} className="button edit">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCarForm;
