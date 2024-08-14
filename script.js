function converter() {
    const quilometrosPorHora = parseFloat(document.getElementById('quilometrosPorHora').value);
    const metrosPorSegundo = quilometrosPorHora / 3.6;

    document.getElementById('resultado').innerHTML = `${quilometrosPorHora} km/h equivalem a ${metrosPorSegundo.toFixed(2)} m/s`;
}
