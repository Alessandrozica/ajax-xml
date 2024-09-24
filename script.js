
//endereço do xml
const xmlURL = 'https//:folhadecianorte.com/sitemap-news.xml';

//função para buscar o xml
function buscarXML(){
    fetch(xmlURL)
    .then(Response => Response.text)
    .then(Data => {
        //Aqui vamos converter o texto em DOM
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");

        //agora vamos extrair os dados desejados(ex: URL da notícia)
        let noticias = xml.getElementsByTagName("url");
        //elementos (no html) onde vou exibir as notícias
        let manchetesContainer = document.getElementById("manchetes");
        manchetesContainer.innerHTML = ""; //limpa o elementos

        //percorrer as notícias usando um for
        for(let i = 0; i < noticias.length; i++){
            let loc = noticias[i].getElementsByTagName("loc")[0].textContent;
            let data_publi =
            noticias[i].getElementsByTagName("news:publication_date")[0].textContent;
            let titulo = noticias[i].getElementsByTagName("news:title")[0].textContent;
            let manchetesHTML = "<div class='noticias'>";
            let manchetesHTMLclassend = "</div";
            let h21 = "<h2>";
            let h21end = "</h2>";
            let linkend = "'>leia mais</a>";
            let montadiv = manchetesHTMLclass+
            

                            h21+
                            ${titulo}+
                            h21end+
                            link1+
                            ${loc}+
                            linked+
                            manchetesHTMLclassend;
                            manchetesContainer.innerHTML +=montadiv;
        

        }
    }).catch(error => {console.error('erro ao carregar o xml', error);});
}
Window.onload = buscarXML;//atualiza ao carregar a pagina