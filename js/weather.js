const COORDS = "coords";

// function saveCoords(coordsObj){
//     localStorage.setItem(COORDS, JSON.stringify(coordsObj));
// }

function handleGeoSucces(postion){
    console.log(position);
}

function handleGeoError(postion){
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
        askForCoords();
    }
}


function init(){
    loadCoords();
}

init();
