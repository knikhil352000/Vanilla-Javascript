const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    if(id){
        //remove active from other buttons
        btns.forEach(function(btn){
            console.log(btn.classList);
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        // Hide other articles
        articles.forEach(function(article){
            article.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
    }
})