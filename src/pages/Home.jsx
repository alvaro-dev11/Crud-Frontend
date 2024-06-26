import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/api/contactos");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const eliminarContacto = (id, nombre) => {
    if (window.confirm(`¿Estás seguro de eliminar el contacto ${nombre}?`)) {
      axios.delete(`http://localhost:5000/api/contacto/${id}}`);
      toast.success(`Contacto ${nombre} eliminado con éxito`);
      setTimeout(() => {
        getData();
      }, 500);
    }
  };

  return (
    <div>
      <Link to={"/addContact"}>
        <button>Nuevo contacto</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombres</th>
            <th>Correo</th>
            <th>Celular</th>
            <th colSpan={3}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nombre}</td>
                <td>{item.correo}</td>
                <td>{item.celular}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button>Editar</button>
                  </Link>
                  <button
                    onClick={() => eliminarContacto(item.id, item.nombre)}>
                    Eliminar
                  </button>
                  <Link to={`/view/${item.id}`}>
                    <button>Ver</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
