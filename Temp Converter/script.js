let celcius = document.getElementById("cel");
let fehrenheit = document.getElementById("feh");

celcius.oninput = () => {
    let output = (parseFloat(celcius.value)*9) /5 + 32;
    fehrenheit.value = parseFloat(output.toFixed(2));
}

fehrenheit.oninput = () => {
    let output = ((parseFloat(fehrenheit.value)-32)*5) /9;
    celcius.value = parseFloat(output.toFixed(2));
}