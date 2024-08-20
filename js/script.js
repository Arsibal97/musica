/*
var zFondos150 = ["url('./img/150x150/coche-1.jpg')","url('./img/150x150/coche-2.jpg')","url('./img/150x150/coche-3.jpg')","url('./img/150x150/coche-4.jpg')"];
var zFondos600 = ["url('./img/600x400/coche-1.jpg')","url('./img/600x400/coche-2.jpg')","url('./img/600x400/coche-3.jpg')","url('./img/600x400/coche-4.jpg')"];

var imagenPrincipal = document.querySelectorAll(".imagen-principal")[0];
var subImagenes = document.querySelectorAll('[class *= "subImagen-"]');

imagenPrincipal.style.backgroundImage=zFondos600[0];
subImagenes[0].style.backgroundImage=zFondos150[0];
subImagenes[1].style.backgroundImage=zFondos150[1];
subImagenes[2].style.backgroundImage=zFondos150[2];
subImagenes[3].style.backgroundImage=zFondos150[3];

subImagenes[0].addEventListener("mouseover",accion0);
subImagenes[1].addEventListener("mouseover",accion1);
subImagenes[2].addEventListener("mouseover",accion2);
subImagenes[3].addEventListener("mouseover",accion3);

function accion0(){imagenPrincipal.style.backgroundImage =zFondos600[0];}
function accion1(){imagenPrincipal.style.backgroundImage =zFondos600[1];}
function accion2(){imagenPrincipal.style.backgroundImage =zFondos600[2];}
function accion3(){imagenPrincipal.style.backgroundImage =zFondos600[3];}

/**
  URL CÓDIGO FUENTE: https://francescricart.com/como-generar-una-galeria-de-imagenes-de-producto-con-javascript/
*/

/*evento para que las imagenes cambien segun donde le demos el click */
let fondos= ["imagenes/iclasica.png","imagenes/imetal.png","imagenes/iregueton.png","imagenes/irock.png"]
let cajas=document.querySelectorAll('.genero-clasica, .genero-metal, .genero-requeton, .genero-rock');
let conte=document.querySelector('.imagg');

cajas.forEach((caja, index)=> {
  caja.addEventListener('click',() => action(index))
});
function action(index) {
  
    conte.setAttribute('src', fondos[index]);
  }
 
/*evento para que el video cambie segun donde le des click en la tabla */
let ruta=["video/Vclasica.mp4","video/Vregueton.mp4","video/Vmetal.mp4","video/Vrock.mp4"];
let cajasV = document.querySelectorAll('.A1, .A2, .A3, .A4');
let cajavideo = document.querySelector('.Vid');

cajasV.forEach((caja, index) => {
    caja.addEventListener('click', () => cambiarVideo(index));
});

function cambiarVideo(index) {
    cajavideo.setAttribute('src', ruta[index]);
}


let imagen=document.querySelector('ul > img')

imagen.addEventListener('click',mostrar);
function mostrar() {
let lista=document.querySelectorAll('header li');
lista.forEach(Element=>{
    if(Element.classList.contains('bloque')){
        Element.classList.remove('bloque');
        }else{
            Element.classList.add('bloque');
        }  
})

}

let sonidos={
  clasica:[],
  regueton:[],
  metal:[],
  rock:[]
}
let cantClasica=5;
let cantRegueton=5;
let cantMetal=5;
let cantRock=5;

for(let i=1;i<=cantClasica;i++){
  sonidos.clasica.push(new Audio(`canciones/clasica${i}.mp3`));
}
for(let i=1;i<=cantRegueton;i++){
  sonidos.regueton.push(new Audio(`canciones/requeton${i}.mp3`));
}
for(let i=1;i<=cantMetal;i++){
  sonidos.metal.push(new Audio(`canciones/metal${i}.mp3`));
}
for(let i=1;i<=cantRock;i++){
  sonidos.rock.push(new Audio(`canciones/rock${i}.mp3`));
}

document.querySelector(".genero-clasica").addEventListener('click',function(){
  pararTodo();
  let num=Math.round(Math.random()*(sonidos.clasica.length-1));
  sonidos.clasica[num].play();
});
document.querySelector(".genero-requeton").addEventListener('click',function(){
  pararTodo();
  let num=Math.round(Math.random()*(sonidos.regueton.length-1));
  sonidos.regueton[num].play();
});
document.querySelector(".genero-metal").addEventListener('click',function(){
  pararTodo();
  let num=Math.round(Math.random()*(sonidos.metal.length-1));
  sonidos.metal[num].play();
});
document.querySelector(".genero-rock").addEventListener('click',function(){
  pararTodo();
  let num=Math.round(Math.random()*(sonidos.rock.length-1));
  sonidos.rock[num].play();
});

function pararTodo(){
  sonidos.clasica.forEach(a=>a.pause());
  sonidos.regueton.forEach(a=>a.pause());
  sonidos.metal.forEach(a=>a.pause());
  sonidos.rock.forEach(a=>a.pause());

}