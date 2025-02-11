/* Cuadro de búsqueda en la barra de navegación principal, se emplea un widget de jQuery UI
para el autocompletado de los resultados a medida que el usuario va escribiendo.

El título y el enlace a la página de cada post se almacena en un archivo json llamado "post-list.json"
*/

let routeJSON = `${baseURL}/${folderName}/json/post-list.json`;

$(document).ready(function () {
  $('#tags').val(''); //Se vacía el cuadro de búsqueda al recargar la página

  let postList = []; //Array que contiene título y ruta al post

  $.getJSON(routeJSON, function (data) { //Solicitud AJAX para obtener los datos del post del JSON
    $.each(data, function (index, post) { //Para cada post del json se añade a la lista el título y la url
      postList.push({
        label: post.title,
        url: post.url,
      });
    });
  });

  // Inicializar el autocompletado, widget.
  $('#tags').autocomplete({
    source: postList,
    select: function (event, ui) { //Redirección a la página del post al hacer click sobre el resultado
      let routePost = ui.item.url;
      let splitRoute = routePost.split('/');
      
      if(window.location.pathname.includes(splitRoute[1])){
        window.location.href = '.' + routePost;
      }else{
        window.location.href = routePost;
      }
    },
  });
});
