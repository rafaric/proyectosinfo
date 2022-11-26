import React from 'react'
import { useState } from 'react'
import './tarea.css'

export default function Tarea({ tarea, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [completed, setCompleted] = useState(false);
  
  function FormEdit() {
    const [tituloEditado, setTituloEditado] = useState(tarea.titulo);
    
    function handleSubmit(e){
      e.preventDefault();
    }

    function handleChange(e){
      const value= e.target.value;
      setTituloEditado(value);
    }

    function handleClick(e) {
      onUpdate(tarea.id, tituloEditado);
      setIsEdit(false);
    }

    return (
      <form className='formupdate' onSubmit={handleSubmit}>
        <input type='text' className='tareaedit' onChange={handleChange} value={tituloEditado} />
        <button className='updatebutton' onClick={handleClick}>Actualizar</button>
      </form>
      );
  }
  

  function Elemento() {

    return(
      <div className={`tarea ${completed ? 'completada' : ''}`} onClick={()=>setCompleted(!completed)}>
        { tarea.titulo }
      <div className='buttoncontainer'><button onClick={()=> setIsEdit(true)}>Editar</button>
      <button onClick={(e)=> onDelete(tarea.id)}>Eliminar</button></div>
      
    </div>
    )
  }

  return (
    <div className='tareas'>{isEdit ? <FormEdit /> : <Elemento />}

    </div>
  )
}
