/*******Show dropdown menu in small view*****/
function toggleMenu()   {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");    
};

/*******Set the last Updated date****/
const date = new Date(document.lastModified);
const updated = document.querySelector("#updated");
const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const yearModified = date.getFullYear();
const monthModified = monthNames[date.getMonth()];
const dateModified = date.getDate();
const weekModified = dayNames[date.getDay()];
updated.textContent = `Last Updated: ${weekModified}, ${dateModified} ${monthModified} ${yearModified}`;

/*****Display Ad banner depending on Day of the week******/
const currentDate = new Date();
const currentDay = currentDate.getDay();
const ad = document.querySelector(".ad");

if (dayNames[currentDay] == "Friday") {
    ad.style.display = "block";
} else {
    ad.style.display = "none";
};


/*********Show Full Article Story*******/
function showStory() {
    let story = document.querySelector(".story");
    let showStory = document.querySelector(".showStory");
    story.style.display = "block";
    showStory.style.display = "none";
}
