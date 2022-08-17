import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export const DetalleUsuario = () => {
    const {id}=useParams()

    const [user,setuser]=useState({
      nombre: "usuario"
    })

const cargarUsuario = async ()=>{
  fetch ("http://localhost:4000/api/users/"+id)
    .then(response => {
      response.json()
        .then(json => {
          console.log(json)
          setuser(json.user)
        })
    })
}

    useEffect(() => {
        cargarUsuario().then()
    }, [])
    
  return (
    
    <div>Id: {user.id}
    <p>Nombre Usuario: <span>{user.nombre}</span></p>
    <p>Email: <span>{user.email}</span></p>
    <p>Telefono: <span>{user.telefono}</span></p>
    <p>Fotografia: <img height="120" src={"http://localhost:4000/img/imgUsers/"+user.imagen}/></p>
    </div>
  )
}