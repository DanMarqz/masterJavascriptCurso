$(document).ready(function(){
    //Selector de ID
    $("#rojo").css("background","red")
            .css("color","white");

    $("#amarillo").css("background","yellow")
                .css("color","green");

    $("#verde").css("background","green")
            .css("color","white");

    //Selector de clases
    var mi_clase = $(".cebra").css("padding","5px");

    $('.sin_borde').click(function(){
        console.log("Clicked!");
        $(this).addClass('cebra');
    });

    //Selector de etiquetas
    var parrafos = $("p").css("cursor","pointer");

    parrafos.click(function(){
        var that = $(this)
        if(!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }
    });

    //Selector de atributo
    $('[title="Google"]').css('background','#ccc');
    $('[title="Facebook"]').css("background","blue");
});