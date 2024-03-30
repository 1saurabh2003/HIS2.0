"use client"
import React, { useState } from 'react';
import axios from 'axios';

function MyForm() {
  const [cropName, setCropname] = useState("")
  const [humidity,setHumidity] = useState(0)
  const [cropNumber,setCropNumber] = useState(0)
  const [temperature,setTemperature] = useState(0)
  const [days,setDays]=useState(0) 
  const [cityName,setCityName] =useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (cropName === 'wheat') {
      setCropNumber(1);
      setDays(21);
    } else if (cropName === 'Groundnuts') {
      setCropNumber(10);
      setDays(21);
    } else if (cropName === 'Garden Flowers') {
      setCropNumber(11);
      setDays(21);
    } else if (cropName === 'Maize') {
      setCropNumber(100);
      setDays(21);
    } else if (cropName === 'Paddy') {
      setCropNumber(101);
      setDays(21);
    } else if (cropName === 'Potato') {
      setCropNumber(110);
      setDays(21);
    } else if (cropName === 'Sugarcane') {
      setCropNumber(111);
      setDays(21);
    } else if (cropName === 'Coffee') {
      setCropNumber(1000);
      setDays(21);
    } else if (cropName === 'Pulse') {
      setCropNumber(1001);
      setDays(21);
    } else {
      console.log('No crop selected');
    }
    
  const options = {
    method: 'GET',
    url: `https://open-weather13.p.rapidapi.com/city/${cityName}`,
    headers: {
      'X-RapidAPI-Key': '6d9cfee14emshd0feb508d8579aep19aabejsna94af4aa2e5b',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const object=response.data
    console.log(object.main);
    setTemperature(object.main.temp)
    setHumidity(object.main.humidity)
  } catch (error) {
    console.error(error);
  }
  try {
    const response = await axios.get(`http://127.0.0.1:5000/api/store/${cropNumber}/${days}/${temperature}/${humidity}`)
    console.log(response)
  } catch (error) {
    console.log(error);
  }
  }
  return (
    <div className='maincontainer'>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='City' onChange={(e)=>setCityName(e.target.value)}/> <br />
      <select name='Crop Name' onChange={(e)=>setCropname(e.target.value)}>
            <option value='default'> Select the Crop </option>
            <option value='wheat'> Wheat </option>
            <option value='Groundnuts'> Groundnuts </option>
            <option value='Garden Flowers'> Garden Flowers </option>
            <option value='Maize'> Maize </option>
            <option value='Paddy'> Paddy </option>
            <option value='Potato'> Potato </option>
            <option value='sugarcane'> Sugarcane </option>
            <option value='Coffee'> Coffee </option>
            <option value='Pulse'> Pulse </option>
     </select>
      <h3>Humidity: {humidity}</h3>
      <h3>temprature: {temperature}</h3>
      <button className="button" type='Submit'> Submit </button>
    </form>
    </div>
  );
}

export default MyForm;
