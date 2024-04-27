import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

function View() {
  const [usuario, setUsuario] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/contacto/${id}}`)
      .then((res) => setUsuario({ ...res.data[0] }));
  }, [id]);
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <p>Detalles del Usuario</p>
        </div>
        <div className="container">
          <div className="grupo">
            <strong>ID: </strong>
            <span>{id}</span>
          </div>
          <div className="grupo">
            <strong>NOMBRE: </strong>
            <span>{usuario.nombre}</span>
          </div>
          <div className="grupo">
            <strong>CORREO: </strong>
            <span>{usuario.correo}</span>
          </div>
          <div className="grupo">
            <strong>CELULAR: </strong>
            <span>{usuario.celular}</span>
          </div>
          <Link to={"/"}>
            <button>Regresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default View;
