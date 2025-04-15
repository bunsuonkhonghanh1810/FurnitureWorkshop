let newsPage = {
    quantity: 6,
    page: 1,
    pageQuantity: 0,
    indexMin: 0,
    indexMax: 0,
}

function renderArticle(article) {
    let articleBox = `
        <div id="${article.id}" class="article-box d-flex flex-column">
            <div class="article-box-img">
                <img src="${article.img[0]}" alt="">
            </div>
            <div class="article-box-text">
                <p class="title">${article.headline}</p>
                <p class="content">${article.title}</p>
            </div>
        </div>`;

    $('.news-big-box').append(articleBox);
}

function renderPages() {
    newsPage.pageQuantity = Math.ceil(news.length / newsPage.quantity);

    $('nav > ul').empty();

    $('nav > ul').append(`
        <li class="backward">
            <a><</a>
        </li>
    `)

    for (let i = 1; i <= newsPage.pageQuantity; i++) {
        $('nav > ul').append(`
            <li>
                <a>${i}</a>
            </li>
        `)
    }

    $('nav > ul').append(`
        <li class="forward">
            <a>></a>
        </li>
    `)

    if (newsPage.page == 1) $('.backward').remove();
    else if (newsPage.page == newsPage.pageQuantity) $('.forward').remove();

    changePages()

    $(document).ready(function() {
        $('.news-center li').click(function() {
            if ($(this).hasClass('backward')) newsPage.page--;
            else if ($(this).hasClass('forward')) newsPage.page++;
            else newsPage.page = parseInt($(this).text());
    
            renderPages();
            changePages();
        })

        $('.article-box').click(function() {
            let chosenArticle = $(this).attr('id');
            localStorage.setItem('chosenArticle', chosenArticle)
        })
    })
}

function changePages() {
    newsPage.indexMin = newsPage.quantity * (newsPage.page - 1);
    newsPage.indexMax = news.length < newsPage.quantity * newsPage.page ? news.length - 1 : newsPage.indexMin + (newsPage.quantity - 1);

    renderPagesList();
}

function renderPagesList() {
    $('.news-big-box').empty();

    for (let i = newsPage.indexMin; i <= newsPage.indexMax; i++) {
        renderArticle(news[i]);
    }
}

renderPages(news);


$('.article-box').click(function() {
    window.location.href = "article.html"
})