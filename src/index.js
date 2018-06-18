//Se cre la variable donde se imprimira el texto
let message = document.getElementById('text2').innerHTML;


//Se crea la función para el encriptado del texto
const encodeE = () =>{
  let word = document.getElementById('text').value;
  let salto = (parseInt(document.getElementById('rank').value))%26;
  let cifrado = cipher.encode(salto,word);
  document.getElementById('text2').innerHTML = cifrado;
};

//Se crea la función para el desencriptado del texto
const decodeE = () =>{
  let word = document.getElementById('text').value;
  let salto = (parseInt(document.getElementById('rank').value))%26;
  let decifrado = cipher.decode(salto,word);
  document.getElementById('text2').innerHTML = decifrado;

};
