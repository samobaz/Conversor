const input = document.getElementById("value")
const btnConvert = document.getElementById("btn-convert")
const lenghtUnit= document.getElementById("length-unit")
const volumenUnit = document.getElementById("volumen-unit")
const massUnit = document.getElementById("mass-unit")

btnConvert.addEventListener("click", function(){
    let unit = input.value
    convertHTML(lenghtUnit, 0.264, unit, ["Meters", "Feets"])
    convertHTML(volumenUnit, 3.281, unit, ["Liters", "Gallons"])
    convertHTML(massUnit, 2.204, unit, ["Kilograms", "Pounds"])
})

function convertHTML(metricValue, value, unit, metrics ){
    metricValue.textContent = `${unit} ${metrics[0]} as ${metrics[1]} ${(unit * value).toFixed(3)} // ${unit} ${metrics[1]} as ${metrics[0]} ${(unit / value).toFixed(3)}`
}

function adjustInputWidth() {
    input.style.width = '1ch'; // reset
    input.style.width = (input.value.length + 1) + 'ch';
}

input.addEventListener('input', adjustInputWidth);

window.addEventListener('DOMContentLoaded', () => {
    input.value = ''; // si querés limpiar el contenido
    adjustInputWidth(); // si querés mantener el valor pero resetear el ancho
});