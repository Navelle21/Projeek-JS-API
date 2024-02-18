let ui_cityName = document.getElementById("cityID");
let ui_startSearch = document.getElementById("searchWeather");

ui_startSearch.addEventListener("click", getWeather);

async function getWeather(){
  try{
    
    const data = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${ui_cityName.value}&days=3`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c34341e4f6mshae22f52e82020aap181751jsn1d34b6a2e7a7",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
      }
    })
    let results = await data.json();
    let currWeather = document.getElementsByName("currWeather");
    let weather = document.getElementById("weather");
    let logo = document.getElementById("logo");
    let temp = document.getElementById("temp");
    let humidity = document.getElementById("humidity");
    let card = document.getElementById("card");
    let lastUpdate = document.getElementById("lastUpdate");

    currWeather.innerHTML = "Current Weather";

    weather.innerHTML = `"${results.current.condition.text}"`;

    logo.setAttribute("src", results.current.condition.icon);
    logo.style.height = "140px";

    temp.innerHTML = `${results.current.temp_c}&degC`;

    humidity.innerHTML = `${results.current.humidity}%`;
    
    card.style.backgroundColor = "rgba(121,178,208,255)";
    card.style.borderRadius = "20px";
    card.style.width = "400px";
    card.style.height = "450px";

    lastUpdate.innerHTML = `updated at (${results.current.last_updated})`;
    
    document.getElementById("result").innerHTML = `Showing the weather of ${ui_cityName.value}, ${results.location.country}`;
    
    getHariEsok(results);
    getLusa(results);
    //console.log(results);
  } catch (err){
    console.log(err);
  }
}

function getHariEsok(data){
    console.log(data.forecast.forecastday[1]);
    
    let results = data.forecast.forecastday[1];
    let forecastWeather = document.getElementById("forecastWeather");
    let fweather = document.getElementById("fweather");
    let flogo = document.getElementById("flogo");
    let ftemp = document.getElementById("ftemp");
    let fhumidity = document.getElementById("fhumidity");
    let fcard = document.getElementById("fcard");
    let lastUpdate = document.getElementById("flastUpdate");

    forecastWeather.innerHTML = "Forecast Weather";

    fweather.innerHTML = `"${results.day.condition.text}"`;

    flogo.setAttribute("src", results.day.condition.icon);
    flogo.style.height = "140px";

    ftemp.innerHTML = `${results.day.maxtemp_c}&degC`;

    fhumidity.innerHTML = `${results.day.avghumidity}%`;
    
    fcard.style.backgroundColor = "rgba(121,178,208,255)";
    fcard.style.borderRadius = "20px";
    fcard.style.width = "400px";
    fcard.style.height = "450px";

    lastUpdate.innerHTML = `estimation on (${results.date})`;
    
}

function getLusa(data){
    console.log(data.forecast.forecastday[2]);

    let results = data.forecast.forecastday[2];
    let LusaWeather = document.getElementById("LusaWeather");
    let Lweather = document.getElementById("Lweather");
    let Llogo = document.getElementById("Llogo");
    let Ltemp = document.getElementById("Ltemp");
    let Lhumidity = document.getElementById("Lhumidity");
    let Lcard = document.getElementById("Lcard");
    let lastUpdate = document.getElementById("LlastUpdate");

    LusaWeather.innerHTML = "Lusa Weather";
    console.log(Lweather);
    Lweather.innerHTML = `${results.day.condition.text}`;


    Llogo.setAttribute("src", results.day.condition.icon);
    Llogo.style.height = "140px";

    Ltemp.innerHTML = `${results.day.maxtemp_c}&degC`;

    Lhumidity.innerHTML = `${results.day.avghumidity}%`;
    
    Lcard.style.backgroundColor = "rgba(121,178,208,255)";
    Lcard.style.borderRadius = "20px";
    Lcard.style.width = "400px";
    Lcard.style.height = "450px";

    lastUpdate.innerHTML = `estimation on (${results.date})`;
}