import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const estadoInicial = {
  nombre: "",
  correo: "",
  celular: "",
};

function AddEdit() {
  const navigate = useNavigate();
  const [estado, setEstado] = useState(estadoInicial);
  const { nombre, correo, celular } = estado;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nombre || !correo || !celular) {
      toast.error("Por favor complete los campos vacíos");
    } else {
      // Seguir en casa
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEstado({ ...estado, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombres</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre..."
            value={nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="Tu correo@ejemplo"
            value={correo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="celular">Celular</label>
          <input
            type="tel"
            id="celular"
            name="celular"
            placeholder="123456789"
            value={celular}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Guardar</button>
        <Link to={"/"}>
          <button type="button">Regresar</button>
        </Link>
      </form>
    </div>
  );
}

export default AddEdit;
