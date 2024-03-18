//let letrae="enter"
//let letrai="imes"
//let letraa="ai"
//let letrao="ober"
//let letrau="ufat"

const cajadetexto = document.querySelector(".cajadetexto");
const resultado = document.querySelector(".resultado");
const button = document.getElementById('copiar');
// const btnCopy = document.querySelector('.copiar');



function btnEncriptar() {
    const textoEncriptado = encriptar(cajadetexto.value)
    resultado.value = textoEncriptado 
    cajadetexto.value ="";
    resultado.style.backgroundImage = "none"
    

}


function encriptar(stringEncriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }

    return stringEncriptada
}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(cajadetexto.value)
    resultado.value = textoEncriptado 
    cajadetexto.value ="";
    resultado.style.backgroundImage = "none"
    

function desencriptar(stringDesencriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }

    return stringDesencriptada
}
}



document.getElementById('copy').addEventListener('click', function() {
    // Obtener el textarea por su id
    const textarea = document.getElementById('result');
    
    // Verificar si el navegador es compatible con la API Clipboard
    if (navigator.clipboard) {
      // Copiar el texto del textarea al portapapeles
      navigator.clipboard.writeText(textarea.value)
        .then(() => {
          // Mostrar un mensaje de éxito
          alert('Texto copiado al portapapeles');
        })
        .catch(() => {
          // Mostrar un mensaje de error
          alert('No se pudo copiar el texto al portapapeles');
        });
    } else {
      // Si el navegador no es compatible con la API Clipboard, utilizar el método antiguo
      const range = document.createRange();
      range.selectNode(textarea);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      
      try {
        // Copiar el texto seleccionado al portapapeles
        document.execCommand('copy');
        // Mostrar un mensaje de éxito
        alert('Texto copiado al portapapeles');
      } catch (err) {
        // Mostrar un mensaje de error
        alert('No se pudo copiar el texto al portapapeles');
      }
      
      // Eliminar la selección
      window.getSelection().removeAllRanges();
    }
  });