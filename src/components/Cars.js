import React, { useState } from "react";
import "./Cars.css";
import Car from "./Car";
import uuid from "react-uuid";
import EditCarForm from "./EditCarForm";

export default function Cars() {
  const carsData = [
    {
      id: uuid(),
      name: "BMW 5 Series",
      price: 150000,
    },
    {
      id: uuid(),
      name: "Volvo S60",
      price: 10000,
    },
    {
      id: uuid(),
      name: "Mercedes C class",
      price: 300000,
    },
  ];
  const initialFormState = {
    id: carsData.id,
    name: carsData.name,
    price: carsData.price,
  };
  const [cars, setCars] = useState(carsData);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [selectedCar, setSelectedCar] = useState(cars[0]);
  const [car, setCar] = useState(initialFormState);
  const [currentCar, setCurrentCar] = useState(initialFormState);

  const onCarSelect = (car) => {
    setSelectedCar(car);
    setEditing(false);
    setAdding(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const addCars = (car) => {
    setAdding(true);
    setEditing(false);
    setCurrentCar({ id: uuid(), name: "", price: "" });
  };

  const addCar = (car) => {
    setAdding(true);
    car.id = uuid();
    setCars([...cars, car]);
    setSelectedCar(car);
    console.log(car);
  };

  const deleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
    setSelectedCar(initialFormState);
  };

  const updateCar = (updatedCar) => {
    setEditing(false);
    console.log("updated car", updatedCar);
    setCars(cars.map((car) => (car.id === currentCar.id ? updatedCar : car)));
    setSelectedCar(updatedCar);
  };

  const editCar = (car) => {
    setEditing(true);
    setAdding(false);
    setCurrentCar({ id: car.id, name: car.name, price: car.price });
    console.log("here", currentCar);
  };

  return (
    <>
      <nav className="sidebar">
        <div className="title">My cars</div>
        <ul>
          {cars.map((car, id) => {
            return (
              <li
                key={car.id}
                className="sidebar-link"
                onClick={() => onCarSelect(car)}
              >
                {car.name}
              </li>
            );
          })}
        </ul>
        <button className="addnew" onClick={addCars}>
          Add new car
        </button>
      </nav>
      <div>
        <Car
          car={selectedCar}
          deleteCar={deleteCar}
          editCar={editCar}
          cars={cars}
        />
        {editing ? (
          <EditCarForm
            setEditing={setEditing}
            currentCar={currentCar}
            updateCar={updateCar}
          />
        ) : (
          " "
        )}
        {adding ? (
          <div className="form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (car.name && car.price) addCar(car);
                setCar(initialFormState);
                setEditing(false);
                setAdding(false);

                if (!car.name || !car.price) return;
              }}
            >
              <div className="edit-container">
                <label>Name:</label>
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
                <button className="button edit" onClick={() => addCars(car)}>
                  Add car
                </button>
                <button
                  onClick={() => setAdding(false)}
                  className="button edit"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
