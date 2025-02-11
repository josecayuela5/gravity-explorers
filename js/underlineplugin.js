/*Este plugin agrega una animación de subrayado a un elemento, se puede configurar
el ancho de la línea, la velocidad de la animación y el color de la línea.
*/
$.fn.underlineGrow = function (width, color, speed) {
  this.each(function () {
    let elem = $(this);

    let underline = $('<div>') //Se crea la línea
      .css({
        //Posicionamiento sobre el elemento a subrayar
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '0',

        height: width,
        backgroundColor: color,
        transition: `width ${speed}ms ease`,
      })

    elem.css('position', 'relative').append(underline); //Se agrega el subrayado sobre el elemento

    elem.hover( 
      function () {
        underline.css({ width: '100%'}); //Al pasar el ratón por encima crece la línea
      },
      function () {
        underline.css({ width: '0%'}); //Al salir desaparece
      }
    );
  });
  return this;
};
