// Get news from Google News API and display it on homepage.

const newsURL = "https://gnews.io/api/v4/top-headlines?q=weather climate cloud&max=6&from=2022-07-14&sortBy=relevance&token=94fb8a3ae10b2e049d013859d9b67694"


async function getNewsData() {
    let response = await fetch(newsURL);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        displayNews(data);
    } 
}


function displayNews(data) {

    data.articles.forEach(article => {  
        let eventBox = document.createElement("div");
        let eventImg = document.createElement("img");
        let eventDate = document.createElement("p");
        let eventURL = document.createElement("a");
        let eventSource = document.createElement("span");
        let eventsContainer = document.querySelector(".events-container");

        eventBox.setAttribute("class", "events-box");
        eventURL.setAttribute("class", "events-date");
        eventURL.setAttribute("href", article.url);
        eventSource.setAttribute("class", "events-date");
        eventImg.setAttribute("src", article.image);

        eventBox.classList.add("news-box");
        eventSource.classList.add("news-source"); 

        eventDate.textContent = article.title;
        eventURL.textContent = "Read more";
        eventSource.innerHTML = "Source:" + " " + article.source.name;
        
        eventBox.append(eventImg)
        eventBox.append(eventDate);
        eventBox.append(eventURL);
        eventBox.append(eventSource);
        eventsContainer.append(eventBox);
        }
    
    );

}

getNewsData(newsURL);