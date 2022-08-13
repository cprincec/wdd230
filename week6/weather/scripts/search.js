const button = document.querySelector("#searchButton");

async function getweather() {
    let cityName = document.querySelector("#city").value.toLowerCase();
    let searchURL = "https://api.openweathermap.org/data/2.5/weather?&appid=a1a44291512a7fa1df8d006b7b784f14&units=imperial&q=" + cityName;
    let response = await fetch(searchURL);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        search(data);
    }
}

function search(data) {
    document.querySelector("#city").value = "";
    document.querySelector("#user-weather-info").textContent = "";
    let container = document.querySelector("#user-weather-info");
    container.style.display = "block";
    container.style.border = "2px solid grey";
    container.style.boxShadow = "0 0 5px grey";
    let temperature = data.main.temp;
    let city = data.name + ", " + data.sys.country;
    let tempIcon = data.weather[0].icon;
    let tempDesc = data.weather[0].description;
    let humidity = data.main.humidity;

    let tempImg = document.createElement("img");
    tempImg.setAttribute("src", "https://openweathermap.org/img/wn/" + tempIcon + ".png");
    console.log(tempImg);
    console.log(city);
    console.log(tempDesc);
    console.log(temperature);
    console.log(humidity);


    let cityHtml = document.createElement("div");
    let imgTempHtml = document.createElement("div");
    let tempHtml = document.createElement("span");
    let tempDescHtml = document.createElement("span");
    let humidityHtml = document.createElement("div");
    let closeBtn = document.createElement("button");

    cityHtml.setAttribute("id", "cityName");
    imgTempHtml.setAttribute("class", "user-img-temp");
    closeBtn.setAttribute("id", "close-btn");

    cityHtml.textContent = city;
    tempHtml.innerHTML = temperature + "&deg;F";
    tempDescHtml.textContent = ", " + tempDesc;
    humidityHtml.textContent = "Humidity: " + humidity + "%";
    closeBtn.textContent = "x";

    container.append(cityHtml);
    container.append(closeBtn);
    imgTempHtml.append(tempImg);
    imgTempHtml.append(tempHtml);
    imgTempHtml.append(tempDescHtml);
    container.append(imgTempHtml);
    container.append(humidityHtml);

    closeBtn.addEventListener("click", function ()  {
        container.style.display = "none";
    })

    
}

button.addEventListener("click", getweather);