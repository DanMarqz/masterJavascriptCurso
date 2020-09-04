$(document).ready(function(){
  var caja = $('#caja');
  $('#mostrar').hide();

  $('#mostrar').click(function(){
    $(this).hide();
    $('#ocultar').show();
    caja.slideDown('slow', () => console.log('Cartel Mostrado'))
//    caja.show('fast');
//    caja.fadeIn('slow');
//    caja.fadeTo('slow', 1);
  });

  $('#ocultar').click(function(){
    $(this).hide();
    $('#mostrar').show();
    caja.slideUp('slow', () => console.log('Cartel ocultado'))
//    caja.hide('fast');
//    caja.fadeOut('slow');
//    caja.fadeTo('slow', 0);
  });

/*  $('#todoenuno').click(function(){
    caja.slideToggle('fast');
//    $('#caja').toggle('fast');
//    $('#caja').fadeToggle('fast');
  })*/

  $('#animar').click(function(){
    caja.animate({
                  marginLeft: '500px',
                  fontSize: '40px',
                  height: '110px',
                }, 'slow')
        .animate({
                  borderRadius: '900px',
                  marginTop: '80px'
                }, 'slow')
        .animate({
                  borderRadius: '0px',
                  marginLeft: '0px'
                }, 'slow')
        .animate({
                  borderRadius: '100px',
                  marginTop: '0px'
                }, 'slow')
        .animate({
                  marginLeft: '500px',
                  fontSize: '40px',
                  height: '110px',
                }, 'slow')
  });

});