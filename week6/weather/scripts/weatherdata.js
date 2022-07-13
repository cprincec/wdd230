const weatherApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a1a44291512a7fa1df8d006b7b784f14&units=imperial";
const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a1a44291512a7fa1df8d006b7b784f14&units=imperial";

function calculateWindChill(temp, windSpeed)    {
    Chill = 35.74 + (0.6215 * temp) - 35.75 * (Math.pow(windSpeed, 0.16)) + 0.4275 * temp * (Math.pow(windSpeed, 0.16));
    windChill = Math.round(Chill);
}

async function getWeatherData(url) {
    let response = await fetch(url);
    if (response.ok)    {
        let weatherData = await response.json();
        document.querySelector("#tempDesc").textContent = weatherData.weather[0].description;
        document.querySelector("#temp").textContent = weatherData.main.temp;
        document.querySelector("#humidity").textContent = weatherData.main.humidity;
        document.querySelector("#windSpeed").textContent = weatherData.wind.speed;

        //WINDCHILL CALCULATION
        /****Assign weather summary values****/
        const temp = parseFloat(document.querySelector("#temp").textContent);
        const windSpeed = parseFloat(document.querySelector("#windSpeed").textContent);
        const windChillUnit = document.querySelector("#windChillUnit");
        let windChill;

        if (temp <= 50 && windSpeed > 3) {
            calculateWindChill(temp, windSpeed);
        } else {
            windChill = "N/A";
            windChillUnit.textContent = "";
        }
        document.querySelector("#windChill").textContent = windChill;
    }
}


// VARIABLES FOR FORECAST DATA.
const weekDayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat"
];

let day = 0;
let temps = document.querySelectorAll(".temp");
let icons = document.querySelectorAll(".weather");
let weekDays = document.querySelectorAll(".day");
let dayObject = new Date().getDay();

//GET FORECAST DATA.
async function getForecastData(url) {
    let response = await fetch(url);
    if (response.ok)    {
        let data = await response.json();      
        
        //DISPLAY FORECAST DATA.
        for (let i = 0; i < data.list.length; i++ ) {
            if (data.list[i].dt_txt.includes("18:00:00"))   {
                    temps[day].innerHTML = data.list[i].main.temp + "&deg;F";
                    icons[day].setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png");
                    day++;
            }
        }
        //DISPLAY FORECAST WEEK DAYS FOR 5 DAYS
        for (let j = 0; j < 5; j++ )  {
            weekDays[j].innerHTML = weekDayNames[(dayObject + j) % weekDayNames.length];
        }
    }
}

getWeatherData(weatherApiURL);
getForecastData(forecastApiURL);