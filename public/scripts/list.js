function populateList(sortBy){
    fetch('articles/articles.json') //fetches the JSON document including the information on all published articles, which is expected to be sorted by edition by default
        .then(response => response.text())
        .then(toParse => {
            var articles = JSON.parse(toParse)
            var list = document.getElementsByClassName("dynamicList")[0];
            if(sortBy == "editions"){
                let currentEd = -1;
                let totalEditions = 0;
                var sublist = document.getElementsByClassName("indent");
                for(let i = 0; i <= articles.length; i++){
                    if(articles[i].edition > currentEd){ //checks on every loop if it articles[i] is within a different edition than the last one
                        currentEd = articles[i].edition;
                        totalEditions++;
                        list.innerHTML += "<h5>Edition "+currentEd+" || "+articles[i].date+"</h5> <div class='indent'></div>"; //creates new title line for the edition and it's date of publication
                    }
                    var filepath = 'articles/'+articles[i].edition+'/'+articles[i].filename;
                    sublist[totalEditions-1].innerHTML += "<a href='"+filepath+"'>"+articles[i].title+"</a></br>";
                }
            }
        });
    
}