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
                    document.body.innerHTML = html;
                })
                .done();
            }
            if (type == "odt")
            {
                try 
                {
                    html = new ODTDocument(ab).getHTML();
                    document.body.innerHTML = html;
                } 
                catch(e) 
                {
                    alert("Couldn't parse odt file.");
                    throw e;
                }
            }
        })
}
