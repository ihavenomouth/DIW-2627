"use strict";


const galeria = document.querySelector("#galeria");

let i=1;

const arrDescripciones = ["Zorro con taza de doble asa", "Zorrito chibi", "Zorro de mirada inquietante", "Zorro gafapasta", "Mirada aviesa", "Zorro cansado y con cara de pena", "Saludo amistoso", "Mañana cozy, ¿eso es chocolate?"];

document.querySelector("#btnAdd").addEventListener("click", e=>{
  const img = document.createElement("img");
  img.src=`ideogram${i}.jpeg`;

  const p = document.createElement("p");
  p.textContent = arrDescripciones[i-1];

  i++;
  if (i>8) i=1;

  
  const div = document.createElement("div");
  div.append(img, p)
  galeria.append(div);
});


document.querySelector("#btnRemove").addEventListener("click", e=>{
  galeria.lastChild.remove();
});

// const txtTamaño = document.querySelector("#txtTamaño");
// alert(txtTamaño.value)

document.querySelector("#txtTamaño").addEventListener("input", e=>{
  const nuevoTamaño = e.target.valueAsNumber;

  galeria.style=`--min-col-size: ${nuevoTamaño}px;`

  e.target.previousElementSibling.textContent = `Tamaño mínimo (${nuevoTamaño}px)`;
});


document.querySelector("#txtFiltro").addEventListener("input", e=>{
  const texto = e.target.value;

  for(let divImagen of galeria.children){

    const p = divImagen.lastChild;

    if( p.textContent.toLocaleUpperCase("es").includes(texto.toLocaleUpperCase("es")) ){
      divImagen.style="";
      // console.log("Display:none = " + i.src)
    }
    else{
      divImagen.style="display:none";
      // console.log("Display:none = " + i.src)
    }
  }

});