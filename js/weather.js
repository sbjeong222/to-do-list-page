const API_KEY = "b6fbcc31bfa885bc7b1a4d438398559e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            const city = document.querySelector(".weather span:first-child");
            const weather = document.querySelector(".weather span:last-child");
            city.innerText = `< 현재 위치 : ${data.name} >`;
            weather.innerText = `< 현재 날씨 : ${data.weather[0].main} >  < 현재 온도 : ${data.main.temp}도 >`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
