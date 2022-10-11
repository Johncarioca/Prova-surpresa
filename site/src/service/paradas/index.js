


export default function CalcularParadas(Capacidade,Consumo,Distancia) {

    let x = Distancia / Consumo;
    let t = x / Capacidade;
    return ('Você precisará fazer ' + Math.ceil(t) + '.0 paradas para abastecer');





}