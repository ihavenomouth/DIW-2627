"use strict";


const btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.addEventListener("click", ()=>{
  // alert("Hola caracola");

  btnEnviar.disabled = true;

  // Magia llamando al servidor

  setTimeout( ()=>{
    btnEnviar.disabled = false;
  }, 2000 );
})