const API_KEY = "87538267f36859310727e841127144a8";
const COORDS = "coords";

function getWeather(lat,log){
  fetch(`https:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(position){
    console.log("Error!");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parer(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);

    }
}


function init(){
    loadCoords();
}

init();
