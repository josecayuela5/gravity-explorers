document.addEventListener("DOMContentLoaded", function () {
  const UPBUTTON = document.getElementById("JS-upbutton");

  UPBUTTON.onclick = function () {
    window.scrollTo({ //Volver al inicio de la página
      top: 0,
      behavior: "smooth", //Movimiento suave
    });
  };
});
