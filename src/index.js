//se crea la variable que almacenara el texto a cifrar y se manda a llamar mediante el id que lo contiene
let sCifrar = document.getElementById ('texto');
let numCaracter = document.getElementById ('rango');
let caja = document.getElementById('texto2');
let palabra;
let nvaPalabra = [];
let cifradoPalabra = [];

const cifrar = () =>{
  caja.innerHTML = " ";
  palabra = sCifrar.value;
  rango = parseInt(numCaracter.value);
  //console.log(palabra);
  for (let i = 0; i<palabra.length; i++){
  if(palabra<=90){
      //console.log(palabra[i]);
      nvaPalabra [i]= (((palabra.charCodeAt(i)) - 65 + rango) % 26 + 65);
      //console.log(nvaPalabra);
      cifradoPalabra [i]= String.fromCharCode(nvaPalabra [i]);

  //console.log(cifradoPalabra);//Esto es para imprimir el texto en una sola linea por que si no
    }else{
        //console.log(palabra[i]);
        nvaPalabra [i]= (((palabra.charCodeAt(i)) - 97 + rango) % 26 + 97);
        //console.log(nvaPalabra);
        cifradoPalabra [i]= String.fromCharCode(nvaPalabra [i]);
    }
  //console.log(cifradoPalabra);//Esto es para imprimir el texto en una sola linea por que si no
caja.innerHTML += cifradoPalabra[i];
  }

}

const dCifrar = () =>{
  caja.innerHTML = " ";
  palabra = sCifrar.value;
  rango = numCaracter.value;
  //console.log(palabra);
  for (let i = 0; i<palabra.length; i++){
  if(palabra<=90){
      //console.log(palabra[i]);
      nvaPalabra [i]= (((palabra.charCodeAt(i)) - 65 - rango) % 26 + 65);
      //console.log(nvaPalabra);
      cifradoPalabra [i]= String.fromCharCode(nvaPalabra [i]);
      caja.innerHTML += cifradoPalabra[i];//el mas es para concatenar todas las letras de la palabras

    }
    else{
        //console.log(palabra[i]);
        nvaPalabra [i]= (((palabra.charCodeAt(i)) - 97 - rango) % 26 + 97);
        //console.log(nvaPalabra);
        cifradoPalabra [i]= String.fromCharCode(nvaPalabra [i]);

    }
    caja.innerHTML += cifradoPalabra[i];
  }

 }
