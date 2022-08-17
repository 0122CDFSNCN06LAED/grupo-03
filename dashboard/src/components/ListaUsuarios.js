import { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom"

function ListaUsuarios(props) {
    const [users, setUsers] = useState([])

    const cargarUsuariosDesdeApi = async () => {
        const request = await fetch("http://localhost:4000/api/users")
        const result = await request.json()

        const usuarios = result.users
        setUsers([...usuarios])
    }

    useEffect(() => {
        cargarUsuariosDesdeApi()
            .then()
            .catch(error => {
                console.log("error al cargar datos: ", error)
            })
    }, [])

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Users List</h1>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Fotografia</th>
                        <th scope="col">detalle</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.nombre}</td>
                                <td>{user.email}</td>
                                <td>{user.telefono}</td>
                                <td><img height="60" src={"http://localhost:4000/img/imgUsers/"+user.imagen}/></td>                         
                                <td><Link to={user.detalle}>detalle</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ListaUsuarios;