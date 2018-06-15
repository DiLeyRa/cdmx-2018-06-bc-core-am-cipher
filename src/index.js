let message = document.getElementById('text2').innerHTML;


const encodeE = () =>{
  let word = document.getElementById('text').value;
  let salto = (parseInt(document.getElementById('rank').value))%26;
  let cifrado = cipher.encode(salto,word);
  document.getElementById('text2').innerHTML = cifrado;
};

const decodeE = () =>{
  let word = document.getElementById('text').value;
  let salto = (parseInt(document.getElementById('rank').value))%26;
  let decifrado = cipher.decode(salto,word);
  document.getElementById('text2').innerHTML = decifrado;

};
