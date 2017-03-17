# Caesar

## Tecnologías de la Información y Comunicación 2º Bachillerato

Ejercicio de **cifrado César** para el apartado de __Criptografía__ en el tema de seguridad.

Aquí tienes la función de cifrado:

```javascript
function caesar(texto, clave) {
    var output="";
    clave = parseInt(clave);
    for (var i=0; i<texto.length;i++){
		output += String.fromCharCode(texto.charCodeAt(i)+clave);
    }
    return output;    
}
```

IES Virgen del Carmen.

Curso 2016/17.
