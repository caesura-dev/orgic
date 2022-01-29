function populateList(sortBy){
    fetch('articles/articles.json')
        .then(response => response.text())
        .then(toParse => {
            var articles = JSON.parse(toParse)
            var list = document.getElementsByClassName("dynamicList")[0];
            if(sortBy == "aporia" || sortBy == "concresence"){
                for (let i = 0; i <= articles.length; i++){
                    if (articles[i].category == sortBy){
                        var filepath = 'articles/'+articles[i].edition+'/'+articles[i].filename;
                        list.innerHTML += "<a href='"+filepath+"'>"+articles[i].title+"</a></br>"
                    }
                }
            }
            if(sortBy == "editions"){
                let currentEd = -1;
                let totalEditions = 0;
                var sublist = document.getElementsByClassName("indent");
                for(let i = 0; i <= articles.length; i++){
                    if(articles[i].edition > currentEd){
                        currentEd = articles[i].edition;
                        totalEditions++;
                        list.innerHTML += "<h5>Edition "+currentEd+" || "+articles[i].date+"</h5> <div class='indent'></div>"
                    }
                    var filepath = 'articles/'+articles[i].edition+'/'+articles[i].filename;
                    sublist[totalEditions-1].innerHTML += "<a href='"+filepath+"'>"+articles[i].title+"</a></br>";
                }
            }
        });
    
}