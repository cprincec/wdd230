// Get news from Google News API and display it on homepage.

const newsURL = "https://newsapi.org/v2/top-headlines?q=weather&from=2022-07-14&sortBy=popularity&apiKey=bee8f274d7fb432687407e9138af87aa"


async function getNewsData() {
    let response = await fetch(newsURL);
    if (response.ok) {
        let data = await response.json();
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
        eventImg.setAttribute("src", article.urlToImage);

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