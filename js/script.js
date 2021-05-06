const container = document.getElementById("container");
const inputFila = document.getElementById("input-filas");
const inputCol = document.getElementById("input-columnas");
const tamañoCelda = document.getElementById("tamaño-celdas");
const btnCrear = document.getElementById("btnCrear");
const checkBordes = document.getElementById("checkBordes");
const colorFondo = document.getElementById("color-fondo");
const colorCelda = document.getElementById("color-celda")
const btnLapiz = document.getElementById("btnLapiz");
const btnGoma = document.getElementById("btnGoma");
let estaPintando = true;

btnLapiz.addEventListener("click", function(){
    estaPintando = true;
    btnLapiz.classList.add("seleccionado");
    btnGoma.classList.remove("seleccionado");
});

btnGoma.addEventListener("click", function(){
    estaPintando = false;
    btnLapiz.classList.remove("seleccionado");
    btnGoma.classList.add("seleccionado");
});
console.log(colorFondo.value);
btnCrear.addEventListener("click", function(){
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${inputFila.value}, 1fr)`
    console.log(tamañoCelda.value);
    for(let i=0; i<inputFila.value; i++){
        for(let j=0; j<inputCol.value; j++){
            const celda = document.createElement("div");
            celda.style.width = `${tamañoCelda.value}px`;
            celda.style.height = `${tamañoCelda.value}px`;
            
            if(checkBordes.checked){
                celda.classList.toggle("border");
            }
            
            celda.style.background = `${colorFondo.value}`;
            
            celda.addEventListener("click", function(){
                 
                if(estaPintando){
                    celda.style.background = `${colorCelda.value}`;
                }
                else{
                    celda.style.background = `${colorFondo.value}`;
                }
            });

            container.appendChild(celda);
        }
    }
});