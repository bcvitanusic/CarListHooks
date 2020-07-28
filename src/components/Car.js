import React from "react";
import "./Car.css";

export default function Car({ car, editCar, deleteCar, cars }) {
  return (
    <>
      <div className="car">
        <div className="title">Car details</div>
        <ul>
          <li className="car-property">ID: {car.id}</li>
          <li className="car-property">Name: {car.name}</li>
          <li className="car-property">Price: {car.price} HRK</li>
        </ul>
        <div className="button-container">
          {cars.length > 0 ? (
            <>
              <button className="button" onClick={() => editCar(car)}>
                Edit
              </button>
              <button className="button" onClick={() => deleteCar(car.id)}>
                Delete
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
