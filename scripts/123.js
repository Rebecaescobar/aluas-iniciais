const visualizacoes = [1200, 850, 1100, 1350, 950];
const diadaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
 
let maisVisualizacoes = visualizacoes[0];
let diadeMaisVisualizacoes = "";

let totaldeVisualizacoes = 0;

let storiePopular = 0;

mediaDiaria = 0

for (let i = 0; i < visualizacoes.length; i++) {
    if (visualizacoes[i] > maisVisualizacoes) {
      maisVisualizacoes = visualizacoes[i];
      diadeMaisVisualizacoes = diadaSemana[i];
    }
    totaldeVisualizacoes += visualizacoes[i];

    media = totaldeVisualizacoes / visualizacoes.length

    if (visualizacoes[i] > 1000) {
        storiePopular++;
}
}
    console.log(`O dia com mais visualizações é ${diadeMaisVisualizacoes} com ${maisVisualizacoes} views`);
    console.log(`O total de visualizações nesse periodo é de: ${totaldeVisualizacoes}`);
    console.log(`Stories populaes: ${storiePopular} dias`);
    console.log(`A média dos dias é ${media.toFixed(2)}`);
    