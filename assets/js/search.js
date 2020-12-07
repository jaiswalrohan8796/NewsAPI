$(document).ready(() => {
    $.getJSON(
        "http://www.whateverorigin.org/get?url=" +
            encodeURIComponent(
                "http://newsapi.org/v2/sources?language=en&apiKey=8a23bbf32e024b5b98c24ebfd1cfb188"
            ) +
            "&callback=?",
        function (data) {
            const res = JSON.parse(data.contents);
            res.sources.forEach((source) => {
                $(".source-wrapper").append(
                    `
                    <li class="source-item text-center">
                        <a href="${source.url}" target="_blank">
                            <p class="name">${source.name}</p>
                            <p class="class">${source.category}</p>
                        </a>
                    </li>
                    `
                );
            });
            chooseRandomColor();
        }
    );
    function chooseRandomColor() {
        const listItems = document.querySelectorAll('.source-item')

        listItems.forEach(item => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            item.style.backgroundColor = `#${randomColor}`;
        })
    }


    function searchHandler() {
        $(".search-wrapper").empty()
        $('.source-wrapper').hide()
        var query = document.getElementById('search').value
        document.getElementById('search-mode').innerHTML = `Results for ${query}`;

        $.getJSON(
            "http://www.whateverorigin.org/get?url=" +
                encodeURIComponent(
                    `http://newsapi.org/v2/everything?q=${query}&apiKey=8a23bbf32e024b5b98c24ebfd1cfb188`
                ) +
                "&callback=?",
            function (data) {
                const res = JSON.parse(data.contents);
                res.articles.forEach((news) => {
                    const date = new Date(news.publishedAt).toDateString();
                    var title = news.title.substr(0, 64) + " . .";
                    var author = news.author;
    
                    $(".search-wrapper").append(
                        `
                            <li class="card">
                                <a href="${news.url}" target="_blank">
                                    <img src="${news.urlToImage}" class="card-img-top" alt="">
                                    <div class="card-body">
                                        <p class="card-title">${author}</p>
                                        <h5 class="card-text">${title}</h5>
                                    </a>
                                    <p class="card-time">${date}</p>
                                    <img id="share" class="share-btn" height="20px" width="20px" src="./assets/images/share.svg" alt="" srcset="">
                                    </div>
                            </li>
                        `
                    );
                });
            }
        );

    }
    const searchBtn = document.getElementById('search-icon')
    searchBtn.addEventListener('click',searchHandler);
});
