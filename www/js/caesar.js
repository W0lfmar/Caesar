/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false */
// variables para el jslint


function caesar(texto, clave) {
    var output="";
    clave = parseInt(clave);
    for (var i=0; i<texto.length;i++){
		output += String.fromCharCode(texto.charCodeAt(i)+clave);
    }
    return output;    
}

function cifrar(){
    var texto = $("#texto_cifrar").val();
    var clave = $("#clave_cifrar").val();
    $("#texto_desc").val(btoa(caesar(texto,clave)));
}

function descifrar(){
    var texto = $("#texto_desc").val();
    var clave = $("#clave_desc").val();
    $("#texto_cifrar").val(atob(caesar(texto,-clave)));
}

