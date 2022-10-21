

function JurosCompostos(entrada,capital, taxaAnual, periodo) {
    

    let restante = capital - entrada;

    let montante = restante * (Math.pow((1 + (taxaAnual / 100)),periodo))

    let juros= montante - restante;

    let parcela = montante / periodo;

    return [montante, juros, parcela];


}


// let x = JurosCompostos(100,1000, 10, 10 )
// console.log(x);

export default JurosCompostos;