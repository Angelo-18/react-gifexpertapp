import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types'
export const AddElement = ({setCategories})=>{

    const [valorDef, modificador] = useState('');

    const resolveForm = (e)=>{
        e.preventDefault();
        if (valorDef.trim().length>2){
            modificador('');
      }
    }

    const resolveChangue =(e) =>{
        modificador(e.target.value);
    }
    const resolveAdd =() =>{
        if (valorDef.trim().length>2){
            setCategories(cats =>[...cats,valorDef])
            modificador('');
      }

    }
    return(
        <form onSubmit={resolveForm}>
            <button onClick={resolveAdd}>Agregar</button>
            <input type="Text" value={valorDef} onChange={resolveChangue}></input>
        </form>
    );
}
AddElement.propTypes ={
    setCategories: PropTypes.func.isRequired
}
