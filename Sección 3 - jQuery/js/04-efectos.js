$(document).ready(function(){
  
  $('#mostrar').hide();

  $('#mostrar').click(function(){
    $(this).hide();
    $('#ocultar').show();
//    $('#caja').show('fast');
//    $('#caja').fadeIn('slow');
    $('#caja').fadeTo('slow', 1);
  });

  $('#ocultar').click(function(){
    $(this).hide();
    $('#mostrar').show();
//    $('#caja').hide('fast');
//    $('#caja').fadeOut('slow');
    $('#caja').fadeTo('slow', 0);
  });

  $('#todoenuno').click(function(){
    $('#caja').slideToggle('fast');
//    $('#caja').toggle('fast');
//    $('#caja').fadeToggle('fast');
  })

});