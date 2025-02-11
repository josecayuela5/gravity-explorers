/*
Filtro por temática en la página "blog" para los posts mostrados.
*/

$(document).ready(function () {
  
  $('.JS-filter').on('click', function () { //Click sobre un filtro de la lista
    $('.JS-filter').removeClass('blog-nav__element_active');
    $(this).addClass('blog-nav__element_active'); //Se pinta de azul el filtro actual aplicado
    
    let category = $(this).data('category'); //Seleccionar las categorías existentes en la lista

    displayPosts(category);
  });

  $('.JS-filter').underlineGrow('2px', '#225ed6', 200); //Plugin personalizado para crear subrayado animado

});

function displayPosts(category) {
  $('#JS-blog-container').animate({ opacity: '0%' }, 300, () => { //Animar desvanecimiento del contenedor principal
    //Esconder todos los posts
    $('.post').hide(0, () => {
      if (category == 'all') { //Mostrar todos con el filtro "todas las entradas"
        $('.post').show(0);
      } else {
        $('.JS-' + category).show(0); //Mostrar los de la categoría seleccionada
      }
    });
    // Volver a mostrar contenedor principal con los posts seleccionados
    $('#JS-blog-container').animate({ opacity: '100%' }, 300);
  });
}
