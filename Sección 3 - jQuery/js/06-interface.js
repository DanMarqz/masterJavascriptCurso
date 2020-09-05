$(document).ready(function(){
  //Draggable - Mover elemento por la página
  $('.elemento').draggable();

  //Resizable - Redimensionar los objetos
  $('.elemento').resizable();

// Sólo se puede usar uno a la vez o Selectable o Sortable

  //Seleccionar elementos
  //$('.lista-seleccionable').selectable();

  //Sortable, organizar elementos
  $('.lista-seleccionable').sortable({
    update: function(event,ui){
      console.log('Ha cambiado la lista');
    }
  });

  //Drop
  $('#elemento-movido').draggable();
  $('#area').droppable({
    drop: function(){
      console.log('Has soltado algo dentro el área.')
    }
  });

  //Efectos
  $('#mostrar').click(function(){
    $('.caja-efectos').toggle('shake',4000);
  });

  //Tooltip
  $(document).tooltip();

  //Dialog
  $('#lanzar-popup').click(function(){
    $('.popup').dialog();
  });

  //Datepicker
  $('#calendario').datepicker();

  //Tabs
  $('#pestanas').tabs();
})