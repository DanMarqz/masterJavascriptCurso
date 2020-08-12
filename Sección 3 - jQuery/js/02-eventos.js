$(document).ready(() => {
    //MouseOver y MouseOut
    var caja = $("#caja");

    // caja.mouseover(function(){
    //     $(this).css("background","green")
    // });

    // caja.mouseout(function(){
    //     $(this).css("background","purple")
    // });

    function cambiaVerde(){
        $(this).css("background","green")
    }

    function cambiaMorado(){
        $(this).css("background","purple")
    }

    //Hover
    caja.hover(cambiaVerde,cambiaMorado);

    //Click, Doble click
    caja.click(function(){
        $(this).css("background","blue")
            .css("color", "white");
    })

    caja.dblclick(function(){
        $(this).css("background","pink")
            .css("color", "red");
    })

    //focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function(){
        $(this).css("border","2px solid red")
    });

    nombre.blur(function(){
        $(this).css("border","1px solid #ccc");
        datos.text($(this).val()).show();
    });

    // Mousedown y Mouswup
    datos.mousedown(function(){
        $(this).css("border-color","gray")
    });
    datos.mouseup(function(){
        $(this).css("border-color","black")
    });

    //MouseMove
    $(document).mousemove(function(){
        $("body").css("cursor","none");
        $("#sigueme").css("left",event.clientX)
                    .css("top",event.clientY);
    })
});