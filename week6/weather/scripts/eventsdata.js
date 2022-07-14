const eventsURL = "https://byui-cit230.github.io/weather/data/towndata.json";

async function getEventsData() {
    let response = await fetch(eventsURL);
    if (response.ok) {
        let data = await response.json();
        displayTownData(data);
    }
}


function displayTownData(data) {

    /***Select just three towns from list of towns fetched from the API*/
    let townName = document.querySelector("h2").textContent;
    data.towns.forEach(town => {
        if (townName.includes(town.name))   {

            for (let i = 0; i < town.events.length; i++ ) {  
                let eventBox = document.createElement("div");
                let eventDate = document.createElement("h4");
                let eventDesc = document.createElement("p");
                let eventsContainer = document.querySelector(".events-container");
    
                eventBox.setAttribute("class", "events-box")
                eventDate.setAttribute("class", "events-date")
                eventDesc.setAttribute("class", "event")

                let dataAndEvent = (town.events[i]).split(":");
                
                eventDate.textContent = dataAndEvent[0].trim();
                eventDesc.textContent = dataAndEvent[1].trim();
                eventBox.append(eventDate);
                eventBox.append(eventDesc);
                eventsContainer.append(eventBox);
            }
        }
    
    
}
    
);

}




getEventsData(eventsURL);