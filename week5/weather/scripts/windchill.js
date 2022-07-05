/****Assign weather summary values****/
const temp = parseFloat(document.querySelector("#cover").textContent);
const windSpeed = parseFloat(document.querySelector("#windSpeed").textContent);
const windChillUnit = document.querySelector("#windChillUnit");
let windChill;

function calculateWindSpeed(temp, windSpeed)    {
    Chill = 35.74 + (0.6215 * temp) - 35.75 * (Math.pow(windSpeed, 0.16)) + 0.4275 * temp * (Math.pow(windSpeed, 0.16));
    windChill = Math.round(Chill);
}

if (temp <= 50 && windSpeed > 3) {
    calculateWindSpeed(temp, windSpeed);
} else {
    windChill = "N/A";
    windChillUnit.textContent = ""
}
document.querySelector("#windChill").textContent = windChill;

