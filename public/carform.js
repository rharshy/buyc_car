import React, { useState } from 'react';

function CarForm() {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    description: '',
    price: '',
    color: '',
    mileage: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement car details submission logic here
    const newCar = {
        image: formData.image,
        title: formData.title,
        description: formData.description,
        price: formData.price,
        color: formData.color,
        mileage: formData.mileage,
      };
  
      // Add the new car to the 'cars' array (your data source)
      cars.push(newCar);
  
      // Clear the form fields
      setFormData({
        image: '',
        title: '',
        description: '',
        price: '',
        color: '',
        mileage: '',
      });
  };

  return (
    <div>
      <h2>Add Car Details</h2>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="mileage"
          placeholder="Mileage"
          value={formData.mileage}
          onChange={handleInputChange}
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default CarForm;
