import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";



function SmallCardRow() {

  const [status, setstatus] = useState([])

  async function cargarContadoresDesdeApi() {
    const response1 = await fetch("http://localhost:4000/api/estadisticas/quantities")
    const json1 = await response1.json()
    console.log(json1)
    setstatus([
      ...status,
      {
        title: "Total Usuarios",
        value: json1.quantityUsers,
        icon: "fa-film",
        color: "primary",
      },
      {
        title: "Total Productos",
        value: json1.quantityProducts,
        icon: "fa-film",
        color: "primary",
      },
      {
        title: "Total Categorias",
        value: json1.quantityCategories,
        icon: "fa-film",
        color: "primary",
      },
    ])

  }

  useEffect(() => {
    cargarContadoresDesdeApi().then()

  }, [])

  return (
    <div className="row">
      {
        status.length > 0 ?
          status.map((stat) => {
            return <SmallCard key={stat.title} {...stat} />;
          })
          : <p>No hay estadisticas para mostrar</p>
      }
    </div>
  );
}

export default SmallCardRow;
