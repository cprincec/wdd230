function toggleMenu()   {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");    
};


const date = new Date(document.lastModified).toString();
const updated = document.querySelector("#updated");
updated.textContent = `Last Updated: ${date}`;