$(document).ready(() => {
    const API_KEY = "8a23bbf32e024b5b98c24ebfd1cfb188";
    const URL = "http://newsapi.org/v2/top-headlines?country=us&";

    $.getJSON(`${URL}apiKey=${API_KEY}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
});
