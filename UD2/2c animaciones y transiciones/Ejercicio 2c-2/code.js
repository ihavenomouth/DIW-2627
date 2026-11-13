"use strict";


const fieldset = document.querySelector("fieldset");

fieldset.addEventListener("click", e=>{
  // alert(e.target.tagName);

  if(e.target.tagName!="LABEL") return;
  
  e.target.classList.toggle("elegido")
})