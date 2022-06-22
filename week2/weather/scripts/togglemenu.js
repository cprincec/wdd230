function toggleMenu()   {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");    
};


const date = new Date(document.lastModified);
const updated = document.querySelector("#updated");
const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "saturday"
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