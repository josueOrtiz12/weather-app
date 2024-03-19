const archivoJSON = './variables.json';

function getApiKey(){
  fetch(archivoJSON)
  .then((respuesta) => respuesta.json())
  .then((datosJSON) => {
    // Accede a los datos del archivo JSON
    console.log()
    const API_KEY = datosJSON.API_KEY;
    // Usa las variables como necesites
    console.log(`API Key: ${API_KEY}`);
    return API_KEY;
  });
}



async function callApi(pais, ciudad) {
    const apiKey = getApiKey()
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

  case (onlyHour >= 15) && (onlyHour <= 17):
      // document.getElementById('contry').style.color = "red"
      document.querySelector('body').style.background = `linear-gradient(180deg, rgba(107,163,180,1) 0%, rgba(202,215,94,1) 41%, rgba(201,187,114,1) 100%), rgb(107,163,180)`;
  break;
  case (onlyHour >= 17) && (onlyHour <= 19):
      // document.getElementById('contry').style.color = "red"
      document.querySelector('body').style.background = `linear-gradient(180deg, rgba(166,107,180,1) 0%, rgba(188,147,65,1) 53%, rgba(114,168,201,1) 100%), rgb(166,107,180)`;
  break;

  case (onlyHour >= 19) && (onlyHour <= 23):
      // document.getElementById('contry').style.color = "red"
      document.querySelector('body').style.background = `linear-gradient(rgb(3 2 22) 0%, rgb(3 3 24) 68%, rgb(4 2 28))`;
  break;

  default:
    document.querySelector(body).style.background = "#f3f3f3 "
    break;
}









