async function updateContent(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    let mainNews = document.querySelector('main');
    mainNews.innerHTML = "";
    data.articles.forEach(element => {
        let article = document.createElement('article');

        let articleImage = document.createElement('img');
        articleImage.src = element.urlToImage;
        if (element.urlToImage === null) {
            article.style.display = "none";
        }

        let articleTitle = document.createElement('h2');
        articleTitle.innerHTML = element.title;
        articleTitle.classList.add('title');

        let articleContent = document.createElement('p');
        articleContent.innerHTML = element.content;
        articleContent.classList.add('content');

        article.append(articleImage, articleTitle, articleContent);
        mainNews.append(article);

    });
}

let choiceCountry = document.querySelector('select');
choiceCountry.addEventListener("change", function () {
    console.log(choiceCountry.value);

    updateContent('https://newsapi.org/v2/top-headlines?country=' + choiceCountry.value + '&apiKey=325c41e9c2a949c881b5a149af523308');

})

updateContent('https://newsapi.org/v2/top-headlines?country=fr&apiKey=325c41e9c2a949c881b5a149af523308');

let searchInput = document.querySelector('input');

searchInput.addEventListener('input', filterInput);

function filterInput() {
    let input = searchInput.value.toLowerCase();
    // let articles = document.querySelectorAll('article');

    updateContent('https://newsapi.org/v2/everything?q=' + input + '&apiKey=325c41e9c2a949c881b5a149af523308');


    // console.log(input);
    // for (let i = 0; i < articles.length; i++) {
    //     let titleElement = articles[i].querySelector('.title');
    //     if (titleElement.textContent.toLowerCase().indexOf(input) > -1) {
    //         articles[i].style.display = "block";
    //     } else {
    //         articles[i].style.display = "none";
    //     }
    // }
}



