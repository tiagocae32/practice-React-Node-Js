import React from "react";

//Validar formulario de login
export const validateForm = (values) => {
  let errors = {};

  if (!values.nombre) {
    errors.nombre = (
      <h4 className='alert alert-danger'> El nombre es requerido </h4>
    );
    }
    
  if (!values.director) {
    errors.director = (
      <h4 className='alert alert-danger'> El director es requerido </h4>
    );
    }
    if (!values.fecha_estreno) {
        errors.fecha_estreno = (
          <h4 className='alert alert-danger'> La fecha de estreno es requerida</h4>
        );
    }
    
    if (!values.pais_origen) {
        errors.pais_origen = (
          <h4 className='alert alert-danger'> El pais de origen es requerido</h4>
        );
    }
    
    if (!values.link_imagen) {
        errors.link_imagen = (
          <h4 className='alert alert-danger'> El link de la imagen es requerido</h4>
        );
    } else if (!values.link_imagen.startsWith("https://")) {
        errors.link_imagen = (
            <h4 className="alert alert-danger">Debe proporcionar un link valido de internet</h4>
        )
      }

  return errors;
};