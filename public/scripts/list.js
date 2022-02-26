function populateList(sortBy) {
  fetch("../articles/articles.json", {
    mode: "no-cors",
    headers: { "content-type": "application/json", origin: "*" },
  }) //fetches the JSON document including the information on all published articles, which is expected to be sorted by edition by default
    .then((response) => console.log(response))
    /*.then((articles) => {
      console.log(articles);
      var list = document.getElementsByClassName("dynamicList")[0];
      if (sortBy == "aporia" || sortBy == "concresence") {
        articles = articles.sort(SortArray); //sorts objects alphabetically by title
        for (let i = 0; i <= articles.length; i++) {
          if (articles[i].category == sortBy) {
            var filepath =
              "articles/" + articles[i].edition + "/" + articles[i].filename;
            list.innerHTML +=
              "<a href='" + filepath + "'>" + articles[i].title + "</a></br>";
          }
        }
      }
      if (sortBy == "editions") {
        let currentEd = -1;
        let totalEditions = 0;
        var sublist = document.getElementsByClassName("indent");
        for (let i = 0; i <= articles.length; i++) {
          if (articles[i].edition > currentEd) {
            //checks on every loop if it articles[i] is within a different edition than the last one
            currentEd = articles[i].edition;
            totalEditions++;
            list.innerHTML +=
              "<h5>Edition " +
              currentEd +
              " || " +
              articles[i].date +
              "</h5> <div class='indent'></div>"; //creates new title line for the edition and it's date of publication
          }
          var filepath =
            "articles/" + articles[i].edition + "/" + articles[i].filename;
          sublist[totalEditions - 1].innerHTML +=
            "<a href='" + filepath + "'>" + articles[i].title + "</a></br>";
        }
      }
    })
    */
    .catch((err) => console.log(err));
}

function SortArray(x, y) {
  //returns a value less than 0 if the first title value is less than the second
  return x.title.localeCompare(y.title);
}
