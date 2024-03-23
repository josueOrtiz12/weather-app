const archivoJSON = './variables.json';

async function getApiKey() {
  const respuesta = await fetch(archivoJSON);
  const datosJSON = await respuesta.json();

  const API_KEY = datosJSON.API_KEY;
  return API_KEY;
}

async function callApi(pais, ciudad) {
  
  const apiKey = await getApiKey();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${pais},${ciudad}&appid=${apiKey}`;

  const respuesta = await fetch(url);
  const dataJson = await respuesta.json();

  return dataJson;
}
  
  (async () => {
    const dataJson = await callApi('Ve', 'Caracas');
    console.log(dataJson);

  const tempetureDate = dataJson.main.temp;
  // const weather = dataJson.weather[0].main;
  const {main} = dataJson.weather[0]
  const {icon} = dataJson.weather[0];

  document.getElementById("tempeture").innerHTML = tempetureDate;
  document.getElementById("weather").innerHTML = main;
  document.getElementById("icon").setAttribute("src" , `icons/${icon}.png`);


  })();


let hour = (new Date()).toLocaleTimeString();
document.getElementById("time").innerHTML = hour;

let onlyHour = parseInt((new Date()).toLocaleTimeString().slice(0, 2));

console.log(onlyHour,'hour act');

switch (true) {
  case (onlyHour >= 0) && (onlyHour <= 4):
    document.querySelector('body').style.backgroundImage  = `url(/background/night.jpg)`;
  break;
  
  case (onlyHour >= 4) && (onlyHour <= 6):
    console.log('de 4 a 6');
    document.querySelector('body').style.backgroundImage  = `url(/background/sunrise.jpg)`;
 
  break;
  
  case (onlyHour >= 6) && (onlyHour <= 7 ):
    document.querySelector('body').style.backgroundImage  = `url(/background/morning.jpg)`;
    
  break;

  case (onlyHour >= 7) && (onlyHour <= 14):

  document.querySelector('body').style.backgroundImage  = `url(/background/sunset.jpg)`;
  break;

  case (onlyHour >= 15) && (onlyHour <= 17):
      document.querySelector('body').style.backgroundImage  = `url(/background/sunsetOne.jpg)`;
  break;
  case (onlyHour >= 17) && (onlyHour <= 19):
    document.querySelector('body').style.backgroundImage  = `url(/background/sunsetTwo.jpg)`;
  break;

  case (onlyHour >= 19) && (onlyHour <= 23):
    document.querySelector('body').style.backgroundImage  = `url(/background/night.jpg)`;
  break;

  default:
    document.querySelector(body).style.background = "#f3f3f3 "
    break;
}









