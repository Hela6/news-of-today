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




// SearchBar //
// let searchInput = document.querySelector("input")

// function showInput() {
//     searchInput.classList.toggle("active")
//     searchInput.value = "";
//     setTimeout(() => {
//         filterInput();
//     }, 400);
// }


// function filterInput() {
//     let choice = document.querySelectorAll("articles");
//     let filter = searchInput.value.toUpperCase();
//     for (let i = 0; i < articles.length; i++) {
//         if (articles[i].name.toUpperCase().indexOf(filter) > -1) {
//             this.article[i].style.display = "";
//             console.log("ok");
//         }
//         else {
//             this.article[i].style.display = "none";
//             console.log("no ref");
//         }
//     }
// }

///////////////////////////////