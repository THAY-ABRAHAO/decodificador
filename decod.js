function criptografar() {
  let texto = document.getElementById("texto").value;
  let titulo = document.getElementById("titulo");
  let aviso = document.getElementById("aviso");
  //let ilustração = document.getElementById("ilustração");

  let textoCriptografado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    document.getElementById("texto").value = textoCriptografado;
    titulo.innerHTML = "Texto criptografado com sucesso!";
    aviso.innerHTML = "";
    //ilustração.src = "./img/logo2.png";
  } else {
    //ilustração.src = "./img/Vector.png";
    titulo.innerHTML = "Nenhuma mensagem foi encontrada";
    aviso.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar";
    alert( "É necessário digitar um texto!");
  }
}

function descriptografar() {
  let texto = document.getElementById("texto").value;
  let titulo = document.getElementById("titulo");
  let aviso = document.getElementById("aviso");
  //let ilustração = document.getElementById("ilustração");

  let textoCriptografado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCriptografado;
      titulo.innerHTML = "Texto descriptografado com sucesso";
      aviso.innerHTML = "";
     // ilustração.src = "./img/desencriptado.jpg";
    } else {
      //ilustração.src = "./img/logo2.png";
      titulo.innerHTML = "Nenhuma mensagem foi encontrada";
      aviso.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar!";
      alert("É necessário digitar um texto");
    }
    
}