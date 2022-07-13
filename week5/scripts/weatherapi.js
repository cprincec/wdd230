apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a1a44291512a7fa1df8d006b7b784f14&units=imperial";

//GET WEATHER DATA FROM API IN JSON FORMAT
async function getdata(url) {
    let response = await fetch(url);
    if (response.ok)    { 
        let data = await response.json();
        console.log(data);
        document.querySelector("#current-temp").textContent = data.main.temp;
        let imgAddress = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        let weatherDesc = data.weather.description;
        document.querySelector("#imagesrc").textContent = imgAddress;
        document.querySelector("#icon").setAttribute("src", imgAddress);
        document.querySelector("#icon").setAttribute("alt", weatherDesc);
    }
}

getdata(apiURL);