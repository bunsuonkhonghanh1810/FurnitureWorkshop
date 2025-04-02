function renderArticle() {
    let chosenArticle = news[parseInt(localStorage.getItem('chosenArticle').slice(2, localStorage.getItem('chosenArticle').length)) - 1];
    
    $('.article-center-left').append(`<p id="main-article-title">${chosenArticle.headline}</p>`)
    for (let i = 0; i < chosenArticle.article.length; i++) {
        $('.article-center-left').append(`<p class="main-articles">${chosenArticle.article[i]}</p>`)
    }
    $('.article-center-left').append(`<img src="${chosenArticle.img[1]}" alt="">`)

    for (let i = 0; i < 3; i++) {
        $('.side-articles').append(`
            <div class="side-article d-flex">
                <img src="../assets/img/news/blank.jpg" alt="">
                <p>25+ MẪU GIƯỜNG NGỦ HỘC KÉO THÔNG MINH CHO CĂN PHÒNG NHỎ CỦA BẠN</p>
            </div>`)
    }
}


renderArticle();