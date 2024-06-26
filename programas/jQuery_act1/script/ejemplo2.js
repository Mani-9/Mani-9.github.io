$(document).ready(function (){
    $("#btn_mostrar").click(function(){
        $("p").show();
    });   
    $("#btn_ocultar").click(function(){
        $("p").hide();
    }); 
    $("#btn_mostrar_despacio").click(function(){
        $("p").show(3000);
    }); 
    $("#btn_ocultar_despacio").click(function(){
        $("p").hide("slow");
    });
    $("#btn_ocultar_slide").click(function(){
        $("p").slideUp(2000);
    });
    $("#btn_mostrar_slide").click(function(){
        $("p").slideDown(2000);
    });
     
});