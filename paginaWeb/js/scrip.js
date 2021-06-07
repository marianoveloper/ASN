$(document).ready(function () {
/*
    function showPopup(){
        $('.modal fade').addClass('show');
        $('.modal fade').addClass('show');
    }

    $("#close").click(function(){
        $('.pop-up').removeClass('show');
        $('.pop-up-wrap').removeClass('show');
    });

    $(".btn-abrir").click(showPopup);

    setTimeout(showPopup, 2000);
*/

function redireccionar(){
    alert("1");
    document.getElementById('id01').style.display='active';
    $("#id01").trigger("click");
  } 
  setTimeout ("redireccionar()", 1000); //tiempo expresado en milisegundos
});


