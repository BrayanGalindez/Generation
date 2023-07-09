// import React from "react";
import{useNavigate} from "react-router-dom"

import "../styles/components/Card.css";

function CardP() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/informacion"); // Reemplaza "/otra-ruta" con la ruta a la que deseas redirigir
  };
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <div className="card">
          Estimados miembros del comité intergaláctico, Me complace presentarles
          una propuesta metodológica para mejorar las interacciones comerciales
          entre los extraterrestres y las empresas intergalácticas mediante el
          desarrollo Full-Stack.
        </div>
        <button className="button" onClick={handleButtonClick}>
          Ver propuesta
        </button>
      </div>
    </div>
  );
}

export default CardP;
