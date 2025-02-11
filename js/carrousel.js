document.addEventListener("DOMContentLoaded", function () {
  const IMAGES = document.getElementsByClassName("main-header__img"); //Guardar todas las imagenes en una variable
  let currentIndex = 0;

  //Cambiar imagen cada 4 segundos
  setInterval(showNextImg, 4000);

  function showNextImg() {  //Función para cambiar la imagen automáticamente

    //Ocultar imagen actual
    IMAGES[currentIndex].classList.remove("main-header__img_active");

    //Avanzar el siguiente índice del array de imágenes
    if (currentIndex < IMAGES.length-1) {
      currentIndex++;
    } else { //Resetear el índice antes de sobrepasar la longitud máxima
      currentIndex = 0;
    }

    //Mostrar la siguiente imagen
    IMAGES[currentIndex].classList.add("main-header__img_active");
  }
});
