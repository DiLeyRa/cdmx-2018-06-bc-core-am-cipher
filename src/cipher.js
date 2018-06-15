window.cipher = {
encode : (offset, string) =>{//una funcion dentro de un objeto se llama metodo
    let newMessage = [];
    let encryptMessage = [];
    let encryptMessageString;

    for (let i=0; i<string.length; i++){
      console.log(string.charAt(i));
      if(string.charCodeAt(i)=== 32){//Para los espacios en blanco
        encryptMessage[i]= " ";
      }else{//para las demas letras
        if(string.charCodeAt(i)<=90 && string.charCodeAt(i)>=65){
          //cifrado mayusculas
            newMessage[i] = (((string.charCodeAt(i)) - 65 + offset) % 26 + 65);
            console.log("***");
            console.log(newMessage[i]);
            console.log("***");
            encryptMessage[i]= String.fromCharCode(newMessage [i]);
          }else if (string.charCodeAt(i)<=122 && string.charCodeAt(i)>=97){
            //cifrado minusculas
              newMessage[i]= (((string.charCodeAt(i)) - 97 + offset) % 26 + 97);
              console.log(newMessage);
              encryptMessage[i]= String.fromCharCode(newMessage [i]);
          }
      }
    }
    encryptMessageString = encryptMessage.join("");
    return encryptMessageString;
  },
  decode : (offset, string) =>{
    let newMessage = [];
    let encryptMessage = [];
    let encryptMessageString;


    for (let i = 0; i<string.length; i++){
      if(string.charCodeAt(i)=== 32){//Para los espacios en blanco
        encryptMessage [i]= " ";
      }else{//para las demas letras

        if(string.charCodeAt(i)<=90 && string.charCodeAt(i)>=65){
          //descifrado mayusculas
          if (((string.charCodeAt(i)) - 65 - offset)<0){
            newMessage [i]=   (((string.charCodeAt(i)) - 65 - offset) % 26 + 91);
            console.log("***");
            console.log(newMessage[i]);
            console.log("***");
            encryptMessage [i]= String.fromCharCode(newMessage [i]);
            //console.log(encryptMessage);
          }
            else{newMessage [i]=   (((string.charCodeAt(i)) - 65 - offset) % 26 + 65);
              console.log(newMessage);
            encryptMessage [i]= String.fromCharCode(newMessage [i]);
          }

          }else if (string.charCodeAt(i)<=122 && string.charCodeAt(i)>=97){
            //descifrado minusculas
            if(((string.charCodeAt(i)) - 97 - offset)<0){
              newMessage [i]= (((string.charCodeAt(i)) - 97 - offset) % 26 + 123);
              console.log("***");
              console.log(newMessage[i]);
              console.log("***");
              encryptMessage [i]= String.fromCharCode(newMessage [i]);
            }else{
              newMessage [i]= (((string.charCodeAt(i)) - 97 - offset) % 26 + 97);
                console.log(newMessage);
              encryptMessage [i]= String.fromCharCode(newMessage [i]);
            }

          }
      }

    }
console.log(encryptMessage);
    encryptMessageString = encryptMessage.join("");
    return encryptMessageString;

  }

};
