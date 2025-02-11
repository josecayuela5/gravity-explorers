document.addEventListener("DOMContentLoaded", function () {
  const CATEGORIES = document.getElementById("JS-categories"); //Se selecciona el elemento de navegación prinical
  const SUBMENU = document.getElementById("JS-submenu"); //Se selecciona el submenú de categorías

  CATEGORIES.onmouseover = () => { //Al pasar el cursor por encima de categorías
    SUBMENU.style.opacity = "100%"; //Se aumenta la opacidad del submenú y se vuelve visible
    SUBMENU.style.pointerEvents = "auto";
  };

  CATEGORIES.onmouseout = () => { //Al salir con el cursor de encima de categrías
    SUBMENU.style.opacity = "0%";
    SUBMENU.style.pointerEvents = "none"; //Desactivamos la interacción con el cursor
  };

  CATEGORIES.onmouseleave = () => { //Al salir con el cursor del submenú
    SUBMENU.style.opacity = "0%";
    SUBMENU.style.pointerEvents = "none";
  };
});
