"use strict";


function anadirTarea(){
  const txtTarea = document.querySelector("#txtTarea");
  const textoTarea = txtTarea.value;
  
  const UlResultado = document.querySelector("#resultado");  
  
  UlResultado.innerHTML += `<li>${textoTarea}</li>`;

}



const btnAnadirTarea = document.querySelector("#btnAnadirTarea");


btnAnadirTarea.addEventListener("click", anadirTarea);


