function body(file, toRender)
{
        const pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.min.js';

        const scale = 1.4;
        const container = document.getElementsByClassName("container")[toRender-1];
        const loadingTask = pdfjsLib.getDocument(file);
            loadingTask.promise.then(function(pdfDocument){
                return pdfDocument.getPage(toRender).then(function(pdfPage){
                    const pdfPageView = new pdfjsViewer.PDFPageView({
                        container: container,
                        scale,
                        defaultViewport: pdfPage.getViewport({
                            scale
                        }),
                        textLayerFactory: new pdfjsViewer.DefaultTextLayerFactory()
                    });

                    pdfPageView.setPdfPage(pdfPage);
                    return pdfPageView.draw();
                });
            });
}
      