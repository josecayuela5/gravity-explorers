let routeSUN = `${baseURL}/${folderName}/icons/sun.svg`;
let routeMOON = `${baseURL}/${folderName}/icons/moon.svg`;

document.addEventListener("DOMContentLoaded", function () {
  const THEMEBUTTON = document.getElementById("JS-theme-button");
  
  chargeThemeState();

  THEMEBUTTON.addEventListener("click", changeTheme);

  function chargeThemeState() {
    //*Cargar el estado del tema anterior

    const DARKMODE = localStorage.getItem("darkmode"); //Se obtiene el estado del tema de localstorage
    const PAGE = document.getElementById("JS-page");
    const NAV = document.getElementById("JS-nav");
    const SUBNAV = document.getElementById("JS-submenu");

    if (DARKMODE == "enabled") {
      //Si estaba activado se añaden las clases de modo oscuro
      PAGE.classList.add("page_darkmode");
      NAV.classList.add("main-nav_darkmode");
      //SUBNAV.classList.add("main-nav_darkmode");

      THEMEBUTTON.setAttribute("src", routeSUN);
    }
  }
});

function changeTheme() {
  //Cambiar el tema de la página: body, nav
  const PAGE = document.getElementById("JS-page");
  const NAV = document.getElementById("JS-nav");
  const SUBNAV = document.getElementById("JS-submenu");

  if (!PAGE.classList.contains("page_darkmode")) {
    PAGE.classList.add("page_darkmode");
    NAV.classList.add("main-nav_darkmode");
    //SUBNAV.classList.add("main-nav_darkmode");
    saveThemeState("enabled"); //Llamada a la función para guardar el estado del tema
  } else {
    PAGE.classList.remove("page_darkmode");
    NAV.classList.remove("main-nav_darkmode");
    //SUBNAV.classList.remove("main-nav_darkmode");
    saveThemeState("disabled");
  }
  changeButtonIcon(PAGE, this);
}

function changeButtonIcon(PAGE, button) {
  //Cambiar el icono del botón para alternar tema
  if(PAGE.classList.contains('page_darkmode')){
    button.setAttribute('src', routeSUN);
  }else{
    button.setAttribute('src', routeMOON);
  }
}

function saveThemeState(state) {
  //*Guardar el estado del tema en localstorage
  localStorage.setItem("darkmode", state);
}
