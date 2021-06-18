import Swal from "sweetalert2";

//Success alert to display in the ui
export const successAlert = (titulo, mensaje, callback) => {
  Swal.fire({
    icon: "success",
    title: titulo,
    text: mensaje,
    //willClose: callback,
  });
};

//Error alert to display in the ui
export const errorAlert = (titulo, mensaje, callback) => {
    Swal.fire({
      icon: "error",
      title: titulo,
        text: mensaje,
    });
  };