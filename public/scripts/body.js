function body(file, type)
{
    var doc;
    fetch(file)
        .then(response => response.arrayBuffer())
        .then(ab => {
            if (type == "docx")
            {
                mammoth.convertToHtml({arrayBuffer : ab})
                .then(function(result){
                    var html = result.value; // The generated HTML
                    document.getElementById("content").innerHTML = html;
                })
                .done();
            }
            if (type == "odt")
            {
                try 
                {
                    html = new ODTDocument(ab).getHTML();
                    document.getElementById("content").innerHTML = html;
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
