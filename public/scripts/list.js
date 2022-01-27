function populateList(sortBy){
    fetch('articles/articles.json')
        .then(response => response.text())
        .then(toParse => {
            var articles = JSON.parse(toParse)
            var list = document.getElementsByClassName("dynamicList")[0];
            for (let i = 0; i <= articles.length; i++){
                if (articles[i].category == sortBy){
                    var filepath = 'articles/'+articles[i].edition+'/'+articles[i].filename;
                    list.innerHTML += "<a href='"+filepath+"'>"+articles[i].title+"</a></br>"
                }
            }
        });
    
}