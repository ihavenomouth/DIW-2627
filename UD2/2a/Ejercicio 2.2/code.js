"use strict";


const ulResultado = document.querySelector("#resultado");
const txtTarea = document.querySelector("#txtTarea");
const btnAnadirTarea = document.querySelector("#btnAnadirTarea");





btnAnadirTarea.addEventListener("click", e=>{
  const tarea = txtTarea.value;

  ulResultado.innerHTML += `<li>${tarea}</li>`

});