
const ponteiroSegundos = document.querySelector(".segundos");
const ponteiroMinutos = document.querySelector(".minutos");
const ponteiroHoras = document.querySelector(".horas");

function setDate() {
    const data = new Date();
    const segundos = data.getSeconds();
    const segundosEmGraus = (segundos / 60) * 360 + 90;
    const minutos = data.getMinutes();
    const minutosEmGraus = (minutos / 60) * 360 + 90;
    const horas = data.getHours();
    const horasEmGraus = (horas / 12) * 360 + 90;
    ponteiroSegundos.style.transform = `rotate(${segundosEmGraus}deg)`;
    ponteiroMinutos.style.transform = `rotate(${minutosEmGraus}deg)`;
    ponteiroHoras.style.transform = `rotate(${horasEmGraus}deg)`;
}

setInterval(setDate, 1000);