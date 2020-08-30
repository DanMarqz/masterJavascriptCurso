$(document).ready(function(){
  
  reloadLinks();

  $('#add_btn')
// Eliminar atributos
    .removeAttr('disabled')
// Al clickar    
    .click(function(){
// Lo añade de primero
      $('#menu').append('<li><a href="' + $('#add_link').val() + '"></a></li>');
// Lo añade a lo último
      //$('#menu').prepend('<li><a href="' + $('#add_link').val() + '"></a></li>');
// Lo añade antes de la etiqueta ul
      //$('#menu').before('<li><a href="' + $('#add_link').val() + '"></a></li>');
// Lo añade después de la etiqueta ul
      //$('#menu').after('<li><a href="' + $('#add_link').val() + '"></a></li>');

      $('#add_link').val('');
      reloadLinks();
    });

});

function reloadLinks(){
  $('a').each(function(index){
    var that = $(this);
    var enlace = that.attr('href');
// Añade atributos adicionales    
    that.attr('target','_blank');
    
    that.text(enlace);
  });
}