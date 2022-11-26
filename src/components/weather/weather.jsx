import React from 'react'
import { useState } from 'react'

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
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={onChange}/>
    </form>
    
  )
}
