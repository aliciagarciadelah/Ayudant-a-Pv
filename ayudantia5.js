$(document).ready(function() {
    
    

    var foto1j =$("#foto1")
    foto1j.click(function(){
        $(this).fadeTo("fast", 0);
    });
    
    foto1j.click(function(){
        $(this).fadeTo("fast",1);
    });
    

    

    var textoj =$(".texto")
    
    textoj.click(function(){
        $(".t").css("color","yellow");   

    })
    var texto1j =$(".texto1")
    texto1j.click(function(){
        $(this).text("HOLA");
    })


});
