const input = document.getElementById("original");
const textarea = document.getElementById("myTextarea");

function encriptar(){
  let texto = input.value.toLowerCase();
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  textarea.value = texto;
  textarea.style.display = "block"; // muestra el textarea
}

function desencriptar(){
  let textEncriptado = textarea.value.toLowerCase();
  
  // Si el texto está encriptado, lo desencripta; de lo contrario, simplemente actualiza el texto del área de texto
  if (textEncriptado.indexOf("enter") !== -1 || textEncriptado.indexOf("imes") !== -1 || textEncriptado.indexOf("ai") !== -1 || textEncriptado.indexOf("ober") !== -1 || textEncriptado.indexOf("ufat") !== -1) {
    textEncriptado = textEncriptado.replace(/ufat/g, "u");
    textEncriptado = textEncriptado.replace(/ober/g, "o");
    textEncriptado = textEncriptado.replace(/ai/g, "a");
    textEncriptado = textEncriptado.replace(/imes/g, "i");
    textEncriptado = textEncriptado.replace(/enter/g, "e");
  }
  
  textarea.value = textEncriptado;
  textarea.style.display = "block"; // muestra el textarea
}

function copyToClipboard() {
  const copyText = document.getElementById("myTextarea");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  alert("¡Texto copiado al portapapeles!");
}

function encriptarPalabra(palabra){
  let texto = palabra.toLowerCase();
  texto = texto.replace(/e/g, "enter");
  texto = texto.replace(/i/g, "imes");
  texto = texto.replace(/a/g, "ai");
  texto = texto.replace(/o/g, "ober");
  texto = texto.replace(/u/g, "ufat");
  return texto;
}

function desencriptarPalabra(palabra){
  let textEncriptado = palabra.toLowerCase();
  textEncriptado = textEncriptado.replace(/ufat/g, "u");
  textEncriptado = textEncriptado.replace(/ober/g, "o");
  textEncriptado = textEncriptado.replace(/ai/g, "a");
  textEncriptado = textEncriptado.replace(/imes/g, "i");
  textEncriptado = textEncriptado.replace(/enter/g, "e");
  return textEncriptado;
} 
