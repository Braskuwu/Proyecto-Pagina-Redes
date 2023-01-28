import React from "react";
import '../stylesheets/item-redes.css';

function Redes(props) {
    return(
      <div className='contenedor-redes'>
        <img
          className='imagen-redes' 
          src={require(`../imagenes/lista-${props.imagen}.png`)} 
          alt='insta' 
        />
        <div className='contenedor-texto-redes'>
          <p className='nombre-redes'>
            {props.nombre}
          </p>
          <p className='texto-redes'>
            {props.texto}
          </p>
        </div>
      </div>
    );
  }

export default Redes;