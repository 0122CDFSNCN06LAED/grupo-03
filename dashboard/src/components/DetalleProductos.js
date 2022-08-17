import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const DetalleProductos = () => {
    const { id } = useParams()

    const [producto, setproducto] = useState({
        nombre: "producto"
    })

    const cargarProducto = async () => {
        fetch("http://localhost:4000/api/products/" + id)
            .then(response => {
                response.json()
                    .then(json => {
                        console.log(json)
                        setproducto(json.producto)
                    })
            })
    }

    useEffect(() => {
        cargarProducto().then()
    }, [])

    return (
        <div>IdProducto: {producto.id}
            <p>Nombre del Producto: {producto.name}</p>
            <p>Precio: <span>{producto.price}</span></p>
            <p>Contenido: <span>{producto.weight}</span></p>
            <p>Descripcion: <span>{producto.description}</span></p>
            {producto.category ?
                <p>Categoria: <span>{producto.category.name}</span></p>
                : <p>sin categoria</p>
            }
            <p>Fotografia: <img height="120" src={"http://localhost:4000/img/prodImg/" + producto.image} /></p>
        </div>
    )
}