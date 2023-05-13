//criando as variáveis 
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

//vai colocar os horários reais nas variáveis 
const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    //antes do valor da hora vai ter um zero
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min
    if (s < 10) s = '0' + s;

    //vai inserir os horários normais na tela 
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})