import { useState, useEffect } from "react";

//Hook use form para envio de la informacion ingresada al endpoint del back end y validacion del formulario que se pase como parametro

const useForm = (stateInicial, validarFormulario, callbackFn) => {
  //user values state
    const [valores,setValores] = useState(stateInicial);
    

  //new state for errors
  //function that validate these errors
  //pass these errors back to the form
  const [errorsForm, setErrorsForm] = useState({});

  //state to check if the form was submited
  const [submitForm, setSubmitForm] = useState(false);

  //cuando desde el componente  se haga click en el boton submit
  // si no hay ningun error en la validacion, se enviara el formulario con la informacion que tenga.

  useEffect(() => {
    //check to see if there are no errors
    if (submitForm) {
      const noErrores = Object.keys(errorsForm).length === 0;
      if (noErrores) {
        callbackFn();
      }
      setSubmitForm(false);
    }
    //eslint-disable-next-line
  }, [errorsForm]);

  //evento que se ejecutar al hacer submit en el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    //handling errors
    const validarErrores = validarFormulario(valores);
    setErrorsForm(validarErrores);
    setSubmitForm(true);
  };

  //evento que "escuchara" los cambios que el usuarios haga en los inputs del formulario
  const handleChange = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  return {
    valores,
    errorsForm,
    handleChange,
    handleSubmit,
    setValores,
  };
};

export default useForm;