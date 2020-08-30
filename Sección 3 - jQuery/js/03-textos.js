$(document).ready(function(){
  
  reloadLinks();

  $('#add_btn').click(function(){
    $('#menu').html('<li><a href="' + $('#add_link').val() + '"></a></li>');
    reloadLinks();
  });

});

function reloadLinks(){
  $('a').each(function(index){
    var that = $(this);
    var enlace = that.attr('href');
    that.text(enlace);
  });
}