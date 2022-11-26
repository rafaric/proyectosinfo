import React from 'react';
import NavList from './navegacion';
import { useState } from 'react';
import Tarea from '../components/Tarea'
import './todo.css'

const Todo = () => {
    const [titulo, setTitulo] = useState('');
    const [tareas, setTareas] = useState([]);
    

    
    
    function handleChange(e){
      const value = e.target.value;
      setTitulo(value);
    }
    
    function handleSubmit(e){
      e.preventDefault();
      const nuevaTarea= {
        id: crypto.randomUUID(),
        titulo: titulo,
        completed: false
      };
      const temp = [...tareas];
      temp.unshift(nuevaTarea)
      setTareas(temp);
      setTitulo('');
    }

    function handleUpdate(id, nuevoTitulo) {
      const temp = [...tareas];
      const tareaUpdate = temp.find(item => id === item.id)
      tareaUpdate.titulo = nuevoTitulo;
      setTareas(temp)
    }
    
    function handleDelete(id) {
      const confirma = window.confirm("Esta seguro de eliminar la tarea?");
      if (confirma){  
          const temp = tareas.filter(item => id !== item.id)
          setTareas(temp);
      }
    }
    let contenedorTareas;
    if (tareas.length > 0)
    { contenedorTareas = 
      <div className='contenedorTareas' >
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea}  onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>;
    }
      
    return (
      <>
        <NavList />
        <div className='todoContainer'>
          
          <form className='todoCreateForm' onSubmit={handleSubmit}>
            <input 
              className='todoinput'
              onChange={handleChange}
              value={titulo}
              placeholder='Ingrese tarea' />
            <input 
              onClick={handleSubmit}   
              type='submit' 
              value="Crear Tarea" 
              className='botonCrear'
            />
          </form>
          {contenedorTareas}
          
        </div>
      </>
    );
}

export default Todo;
