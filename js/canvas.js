let canvas=document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let c=canvas.getContext("2d");

let numBolas=1000;

if (canvas.width<800){
    if(canvas.width<560){
        numBolas=200
    }else numBolas=500;
}else numBolas=1000

let mouse={
    x:undefined,
    y:undefined,
    scroll:0
}

const maxRadio=40;
const colores=[
    "#537FE7",
    "#7B66FF",
    "#C0EEF2",
    "#E9F8F9"
]


window.addEventListener("mousemove",
    function(event){
        mouse.x=event.x;
        mouse.y=event.y-100+mouse.scroll;
})


window.addEventListener("scroll",
    function(event){
        mouse.scroll=this.scrollY;
    })

window.addEventListener("resize",
    function(){
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;

        if (canvas.width<800){
            if(canvas.width<560){
                numBolas=200
            }else numBolas=500;
        }else numBolas=1000

        iniciar();
})

function Circulo(x,y,velox,veloy,radio){
    this.x=x;
    this.y=y;
    this.velox=velox;
    this.veloy=veloy;
    this.radio=radio;
    this.minRadio=radio;
    this.color=colores[Math.floor(Math.random()*colores.length)];

    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radio,0,Math.PI*2,false);
        c.fillStyle=this.color;
        c.fill();
    }

    this.update=function(){
        if(this.x+this.radio>innerWidth||this.x-this.radio<0){
            this.velox=-this.velox;
        }
        if(this.y+this.radio>innerHeight||this.y-this.radio<0){
            this.veloy=-this.veloy;
        }
        this.x+=this.velox;
        this.y+=this.veloy;

        this.draw();

        //Interacción
        if(mouse.x - this.x <50 && mouse.x-this.x>-50 && mouse.y - this.y <50 && mouse.y-this.y>-50){
            if(this.radio<maxRadio)
            this.radio+=2;
        }else if(this.radio>this.minRadio){
            this.radio-=1;
        }
    }
}

let arrayCirculos=new Set();

function iniciar(){

    arrayCirculos=new Set();

    for(let i=0;i<numBolas;i++){
        let radio=Math.random()*3+1;
        let x=Math.random()*(innerWidth-radio*2)+radio;
        let y=Math.random()*(innerHeight-radio*2)+radio;
        let velox=(Math.random()-0.5)*1;
        let veloy=(Math.random()-0.5)*1;
        arrayCirculos.add(new Circulo(x,y,velox,veloy,radio));
    }
}

function animar(){
    requestAnimationFrame(animar);
    c.clearRect(0,0,innerWidth,innerHeight);

    arrayCirculos.forEach(circulo=>circulo.update())

}

animar();

iniciar();






