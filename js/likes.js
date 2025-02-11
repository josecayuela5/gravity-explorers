let routePHP = `${baseURL}/${folderName}/php/likes.php`;

document.addEventListener("DOMContentLoaded", function () {

  //Al cargar la página se actualiza el estado de cada post y los contadores de me gusta.
  updateCounters();
  updateButtons();

  const LIKEBUTTONS = document.getElementsByClassName("JS-like-button");

  for (let button of LIKEBUTTONS) { //Al hacer click en el botón de me gusta se ejecutan las siguientes funciones
    button.addEventListener("click", changeColor);
    button.addEventListener("click", changeCounter);
    button.addEventListener("click", updateJson);
  }
});

function updateCounters() { //*AJAX: actualizar número de likes al recargar la página
  const XHTTP = new XMLHttpRequest();
  XHTTP.open("GET", routePHP, true);  //Se abre una solicitud ajax con backend, con método get.
  XHTTP.onload = function () {
    const LIKESDATA = JSON.parse(XHTTP.responseText); //Los datos se almacenan en constante LIKESDATA

    const LIKECOUNTER = document.getElementsByClassName("JS-like-counter");

    for (let counter of LIKECOUNTER) {
      const POSTARTICLE = counter.closest("article");
      const POSTID = POSTARTICLE.dataset.postId;

      counterValue = LIKESDATA[POSTID]; //Se guarda el número de likes de cada post en una variable
      counter.innerHTML = counterValue; //Actualizar el contador de likes de cada post
    }
  };
  XHTTP.send();
}

function updateButtons() { //*LOCALSTORAGE: actualizar estado post al recargar la página
  const CORAZONES = document.getElementsByClassName("JS-like-button");
  for (let corazon of CORAZONES) {
    const POSTARTICLE = corazon.closest("article");
    const POSTID = POSTARTICLE.dataset.postId;
    const STATE = localStorage.getItem(POSTID); //Se obtiene el estado del post del localstorage
    if (STATE == "liked") { //Si el post está gustado se añade la clase que pinta el botón
      corazon.classList.add("post__icon_active");
    }
  }
}

function changeColor() {  //Cambiar el color del corazón en función de si el post está gustado o no
  const CORAZON = this;

  const POSTARTICLE = CORAZON.closest("article"); //Se obitene el id del post
  const POSTID = POSTARTICLE.dataset.postId;
  
  //*LOCAL STORAGE: empleado para guardar el estado de megusta de cada usuario
  if (!CORAZON.classList.contains("post__icon_active")) {

    CORAZON.classList.add("post__icon_active"); //Se añade la clase que pinta el corazón
    localStorage.setItem(POSTID, "liked");  //Se guarda el estado del post (gustado o no) en localstorage
  } else {

    CORAZON.classList.remove("post__icon_active"); //Se elimina la clase que pinta el corazón
    localStorage.removeItem(POSTID); //Se elimina el estado del post (gustado o no) en localstorage
  }
}

function changeCounter() {
  const CORAZON = this;
  const CONTADOR = CORAZON.previousElementSibling; //Se selecciona el contador

  let likeCount = parseInt(CONTADOR.textContent);

  if (CORAZON.classList.contains("post__icon_active")) { //Si el botón está activo se suma un like al contador
    likeCount++;
    CONTADOR.textContent = likeCount;
  } else {
    if (likeCount > 0) { //Si no está activo y el contador es mayor a 0 se resta un like
      likeCount--;
      CONTADOR.textContent = likeCount;
    }
  }
}

function updateJson() {
  const POSTARTICLE = this.closest("article"); //Se selecciona al que pertenece el botón
  const POSTID = POSTARTICLE.dataset.postId; //Se obtiene el ID del post
  const LIKED = this.classList.contains("post__icon_active"); //Se obtiene si tiene like o no

  //* AJAX
  const XHTTP = new XMLHttpRequest();

  const DATOS = JSON.stringify({
    postId: POSTID,
    liked: LIKED,
  });

  XHTTP.open("POST", routePHP, true); //Se envían datos al backend
  XHTTP.send(DATOS);
}
