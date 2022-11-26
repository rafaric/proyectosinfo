import React from 'react'
import { useState } from 'react'
import './weather.css'

export default function WeatherForm({onChangeCiudad}) {
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
      <input className='input' type='text' onChange={onChange}/>
    </form>
    
  )
}
