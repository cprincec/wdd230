const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
}) 
.then(function (jsonObject) {
    // console.table(jsonObject);
    const prophets = jsonObject["prophets"];

    for (let i = 0; i < prophets.length; i++)   {
    let name = prophets[i].name + " " + prophets[i].lastname;
    let birthdate = prophets[i].birthdate;
    let birthplace = prophets[i].birthplace;
    let imageSource = prophets[i].imageurl;

    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let div = document.createElement("div");
    let dobP = document.createElement("p");
    let pobP = document.createElement("p");
    let img = document.createElement("img");
    
    h2.textContent = name;
    dobP.textContent = "Date of Birth: " + birthdate;
    pobP.textContent = "Place of Birth: " + birthplace;
    img.setAttribute("src", imageSource);
    div.textContent = i + 1;
    
    document.querySelector("div.cards").appendChild(card);
    card.appendChild(div);
    card.appendChild(h2);
    card.appendChild(dobP);
    card.appendChild(pobP);
    card.appendChild(img);  
}
});



