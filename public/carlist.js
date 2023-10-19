import React, { useState, useEffect } from 'react';
import cars from '../cars'; // Importing car data array

function CarList() {
  const [carList, setCarList] = useState(cars);
  const [filters, setFilters] = useState({
    price: '',
    color: '',
    mileage: '',
  });

  useEffect(() => {
    // Apply filters to 'cars' and set the filtered list to 'carList'
    const filteredCars = cars.filter((car) => {
      const isPriceMatch = !filters.price || car.price <= parseInt(filters.price);
      const isColorMatch = !filters.color || car.color.toLowerCase() === filters.color.toLowerCase();
      const isMileageMatch = !filters.mileage || car.mileage <= parseInt(filters.mileage);
      return isPriceMatch && isColorMatch && isMileageMatch;
    });
    setCarList(filteredCars);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <h2>Car List</h2>
      <div>
        <label>
          Price:
          <input type="number" name="price" value={filters.price} onChange={handleFilterChange} />
        </label>
        <label>
          Color:
          <input type="text" name="color" value={filters.color} onChange={handleFilterChange} />
        </label>
        <label>
          Mileage:
          <input type="number" name="mileage" value={filters.mileage} onChange={handleFilterChange} />
        </label>
      </div>
      <ul>
        {carList.map((car) => (
          <li key={car.id}>
            <img src={car.image} alt={car.title} />
            <h3>{car.title}</h3>
            <p>{car.description}</p>
            <p>Price: ${car.price}</p>
            <p>Color: {car.color}</p>
            <p>Mileage: {car.mileage} miles</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
