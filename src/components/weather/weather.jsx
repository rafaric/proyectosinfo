import React from 'react'
import { useState } from 'react'
import './weather.css'

export default function WeatherForm({ onChangeCiudad}) {
  const [ciudad, setCiudad] = useState('');

  function onChange(e) {
    const city = e.target.value;
    if (city !== ''){

    }
    setCiudad(city);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCiudad(ciudad);
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <label className='label' htmlFor='ciudad'>Ingrese Ciudad:</label>
      <input className='input' id='ciudad' type='text' onChange={onChange}/>
    </form>
    
  )
}
