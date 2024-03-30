"use client"
import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='maincontainer'>
    <form onSubmit={handleSubmit}>
      <label htmlFor="fname">Crop Name:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={formData.fname}
        onChange={handleChange}
      /><br/><br/>
      <label htmlFor="lname">Month:</label>
      <input
        type="text"
        id="lname"
        name="lname"
        value={formData.lname}
        onChange={handleChange}
      /><br/><br/>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}

export default MyForm;
