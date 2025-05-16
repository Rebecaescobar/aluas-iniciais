 let nomeAplicativos = ["TikTok", "Instagram", "WhatsApp", "Snapchat", "Spotify", "Netflix", "YouTube", "VSCO", "BeReal", "Uber"]
 let downloads = [2.5, 2.2, 1.8, 1.5, 1.3, 1.2, 1.1, 0.9, 0.8, 0.7];
 let avaliacoes = [4.7, 4.8, 4.5, 3.9, 4.6, 4.3, 4.9, 4.2, 3.8, 4.1];
 let categorias = ["Social", "Social", "Comunicação", "Social", "Música", "Streaming", "Vídeo", "Foto", "Social", "Transporte"];

 console.table(nomeAplicativos);
 console.table(downloads);
 console.table(avaliacoes);
 console.table(categorias);

letMaiorNumeroDeDownloads = downloads [0];
letCategoriaMaiorDownloads = [0];
letAplicativoMaiorDownloads = [0];

let maiorAvaliacao = avaliacoes[0];
let categoriaMaiorAvaliacao = categorias [0];
let aplicativoMaiorAvaliacao = nomeAplicativos

let somaTotalDownloads = 0;
let mediaDownloads = 0;

let novoArray = [];
let contadorNovoArray = 0;

let totalDownloadsSocial = 0;

let categoriaMaisAplicativos = "";
let maiorContagem = 0;


 

for( let i = 0; i< nomeAplicativos.length; i ++  ) {
if (downloads[i] > letMaiorNumeroDeDownloads) {
    letMaiorNumeroDeDownloads = downloads[i];
    letCategoriaMaiorDownloads = categorias [i];
    letAplicativoMaiorDownloads = nomeAplicativos [i];
}
if (avaliacoes[i] > maiorAvaliacao) {
    maiorAvaliacao = avaliacoes[i];
    cetegoriaMaiorAvaliacao = categorias [i];
    aplicativoMaiorAvaliacao = nomeAplicativos [i];
 }

 somaTotalDownloads += downloads=[i];

 if (avaliacoes[i] > 4.5) {
    novoArray [contadorNovoArray] = nomeAplicativos [i];
    contadorNovoArray ++;
 }

 if ( categorias [i] === "social") {
    totalDownloadsSocial += downloads [i];
 }
}
for (let categoria in contadorCategorias) {
    if (contadorCategoria )
}
mediaDownloads = somaTotalDownloads / downloads.length;

console.table(nomeAplicativos);
console.table(downloads);
console.table(avaliacoes);
console.table(categorias);

console.log(`O aplicativo com maior número de downloads é o ${letAplicativoMaiorDownloads} da categoria ${letCategoriaMaiorDownloads}`);
console.log(`O aplicativo com a maior avaliação é ${aplicativoMaiorAvaliacao} da categoria ${categoriaMaiorAvaliacao} :D`);
console.log( `A média de downloads do aplicativo é ${mediaDownloads} milhões`);
console.log(`Os aplicativos com maior avaliação são os ${aplicativoMaiorAvaliacao}`);
console.log(`O total de downloads da categoria social é: ${totalDownloadsSocial} M`);