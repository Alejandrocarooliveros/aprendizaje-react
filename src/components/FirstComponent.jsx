import { useState } from 'react'
import css from './FirstComponent.module.css'
export default function FirstComponent(){
    const [constante,setConstante]=useState(1)
    function handleBaja(){
        if(constante<=0 )  return;
        setConstante(constante-1)
        
    }
    function handlesube(){
        if(constante===10)  return;
        setConstante(constante+1)
    }
    return <div>


        <p className={css['PrimeraClase'] }>hola mundo{constante}</p>
        <button onClick={handlesube}>sube</button>
        <button onClick={handleBaja}>baja</button>
    </div>
}