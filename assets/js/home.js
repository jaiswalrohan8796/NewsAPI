$(document).ready(() => {
    $.getJSON(
        "http://www.whateverorigin.org/get?url=" +
            encodeURIComponent(
                "http://newsapi.org/v2/top-headlines?country=in&apiKey=8a23bbf32e024b5b98c24ebfd1cfb188"
            ) +
            "&callback=?",
        function (data) {
            const res = JSON.parse(data.contents);
            res.articles.forEach((news) => {
                const date = new Date(news.publishedAt).toDateString();
                var title = news.title.substr(0, 64) + " . .";
                var author = news.author;

                $(".card-wrapper").append(
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
});
