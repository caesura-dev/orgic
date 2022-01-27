function body(file)
{
    var doc;
    fetch(file)
        .then(response => response.arrayBuffer())
        .then(ab => {
            mammoth.convertToHtml({arrayBuffer : ab})
            .then(function(result){
                var html = result.value; // The generated HTML
                document.body.innerHTML = html;
            })
            .done();
        })
}
