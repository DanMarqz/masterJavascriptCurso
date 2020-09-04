$(document).ready(function(){
  //Load para sacar datos
  //$('#datos').load('https://reqres.in/');

  //GET y POST
  $.get('https://reqres.in/api/users',{page: 2}, function(response){
    response.data.forEach((element,index) => {
      $('#datos').append('<p>'+element.first_name+' '+element.last_name+'</p>')
    });
  })

  $('#formulario').submit(function(e){
    e.preventDefault();

    var usuario = {
      name: $('input[name="name"]').val(),
      web: $('input[name="web"]').val()
    };
  
    // $.post($(this).attr('action'), usuario, function(response){
    //   console.log(response);
    // }).done(() => alert('Usuario añadido correctamente.'))

    $.ajax({
      type: 'POST',
      url: $(this).attr('action'),
      data: usuario,
      beforeSend: () => console.log('Enviando usuario...'),
      success: (response) => console.log(response),
      error: () => console.log('Ha ocurrido un error'),
      timeout: 2000
    })

    return false;
  });

})