import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
import './Estilo.css'

export const MuchosCustomHooks = () => {

   const {contando, Siguiente} = useCounter(1)
    
    const state = useFetch(`https://www.breakingbadapi.com/api/characters/${contando}`)
    
    const { loading, data } = state
    const {img, name, occupation, status,nickname} = !!data && data[0] 
    return (
        <div>
            <h1> <strong> PERSONAJES DE LA SERIE </strong> </h1>
            <hr/>
             {
               loading 
                ?
               (
                <div className="alert alert-success" role="alert">
                Cargando....
               </div>
               )
               :
               (
                <blockquote className="blockquote">
                <p className="mb-0"> Nombre: {name} </p>
                <p className="mb-0">Ocupación: {occupation}</p>
                <p className="mb-0">Estatus: {status}</p>
                <p className="mb-0">NickName: {nickname}</p> <br/><br/>
                <img src={img} alt=""  width="300" height="300" />
                </blockquote>
                
               )
             }

            <button onClick={Siguiente} type="button" className="btn btn-primary">Siguiente</button> 
            
        </div>
    )
}
