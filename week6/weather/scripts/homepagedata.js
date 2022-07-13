const URL = "https://byui-cit230.github.io/weather/data/towndata.json";

async function getTownData() {
    let response = await fetch(URL);
    if (response.ok) {
        let data = await response.json();
        displayTownData(data);
    }
}

function displayTownData(data) {

    /***Select just three towns from list of towns fetched from the API*/
    let three_towns = data.towns.filter(x => x.name === "Preston" || x.name === "Fish Haven" || x.name === "Soda Springs");
    
    //Reverse the array of the 3 selected towns
    // so that preston comes first.
    three_towns.reverse();

    // Go through each of the three towns and populate the created html 
    // with data from it.
    for (i = 0; i < three_towns.length; i++) {
        let yearfoundedHtml = document.querySelectorAll(".yearFounded");
        let populationHtml = document.querySelectorAll(".population");
        let img = document.querySelectorAll(".img")
        let rainfallHtml = document.querySelectorAll(".rainfall");
        let townNameHtml = document.querySelectorAll(".town-name");
        let townMottoHtml = document.querySelectorAll(".town-motto");

        let townName = three_towns[i].name;
        let townMotto = three_towns[i].motto;
        let photo = three_towns[i].photo;
        let yearFounded = three_towns[i].yearFounded;
        let population = three_towns[i].currentPopulation;
        let rainfall = three_towns[i].averageRainfall;

        townNameHtml[i].textContent = townName;
        townMottoHtml[i].textContent = townMotto;
        yearfoundedHtml[i].innerHTML = `Year Founded: <em>${yearFounded}</em>`;
        populationHtml[i].innerHTML = `Population: <em>${population}</em>`;
        rainfallHtml[i].innerHTML = `Annual Rainfall: <em>${rainfall}</em>`;
    }
}

getTownData();