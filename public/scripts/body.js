function body(file, type)
{
    var doc;
    fetch(file) //fetches a document file from an http request to the domain and returns a promise with the data of that file as pure byte data
        .then(response => response.arrayBuffer()) //promise is named response, and that promise is instructed to return a new promise which contains the byte data as an array buffer
        .then(ab => { //the new ArrayBuffer returned from this second promise is named ab and the following function is executed with ab in it's scope
            if (type == "docx")
            {
                mammoth.convertToHtml({arrayBuffer : ab}) //converts the bytes in ab into an html string and returns that html string from within a promise
                .then(function(result){ //the html string is named result and passed into the following function:
                    var html = result.value; // the generated HTML
                    document.getElementsByClassName("content")[0].innerHTML = html;
                })
                .done();
            }
            if (type == "odt")
            {
                try 
                {
                    html = new ODTDocument(ab).getHTML();
                    document.getElementsByClassName("content")[0].innerHTML = html;
                } 
                catch(e) 
                {
                    alert("Couldn't parse odt file.");
                    throw e;
                }
            }
            if (type != "docx" && type != "odt")
            {
                alert("Document type out of bounds");
            }
        })
}
