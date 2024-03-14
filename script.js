async function callApi(pais, ciudad) {
    const claveAPI = 'bedca9901b63809b9a5857951ea9132a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${pais},${ciudad}&appid=${claveAPI}`;
  
    const respuesta = await fetch(url);
    const dataJson = await respuesta.json();
  
    return dataJson;
  }
  
  (async () => {
    const dataJson = await callApi('Ve', 'Caracas');
    console.log(dataJson);

  const tempetureDate = dataJson.main.temp;
  const weather = dataJson.weather[0].main;


  document.getElementById("tempeture").innerHTML = tempetureDate;
  document.getElementById("weather").innerHTML = weather;
  })();


let hour = (new Date()).toLocaleTimeString();
document.getElementById("time").innerHTML = hour;

let onlyHour = parseInt((new Date()).toLocaleTimeString().slice(0, 2));

console.log(onlyHour);

switch (true) {
  case (onlyHour >= 0) && (onlyHour <= 4):
    document.querySelector('body').style.background = `linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 68%, rgba(92,9,119,1) 88%, rgba(0,212,255,1) 100%), rgb(2, 0, 36)`;

  break;
  
  case (onlyHour >= 4) && (onlyHour <= 6):
    console.log('de 4 a 6');
    document.querySelector('body').style.background =`linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(255,227,0,1) 100%), rgb(2, 0, 36)`;
 
  break;
  
  case (onlyHour >= 6) && (onlyHour <= 7 ):
    document.querySelector('body').style.background = `linear-gradient(180deg, rgba(29,144,176,1) 0%, rgba(57,227,227,1) 100%), rgb(29, 144, 176)`;
    
  break;

  case (onlyHour >= 7) && (onlyHour <= 14):

  document.querySelector('body').style.background = `linear-gradient(180deg, rgba(29,127,176,1) 0%, rgba(175,189,196,1) 100%), rgb(29, 127, 176)`;
  break;

  case (onlyHour >= 15) && (onlyHour <= 18):
    console.log('funciona');
      // document.getElementById('contry').style.color = "red"
      document.querySelector('body').style.background = `linear-gradient(rgb(2, 0, 36) 0%, rgb(9, 9, 121) 68%, rgb(92, 9, 119) 88%), rgb(2, 0, 36)`;
  break;

  case (onlyHour >= 19) && (onlyHour <= 23):
    console.log('funciona');
      // document.getElementById('contry').style.color = "red"
      document.querySelector('body').style.background = `linear-gradient(rgb(3 2 22) 0%, rgb(3 3 24) 68%, rgb(4 2 28))`;
  break;

  default:
    document.querySelector(body).style.background = "#f3f3f3 "
    break;
}









