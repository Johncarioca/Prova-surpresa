

export default function CalcularOrcamento(ganhos,gastos) {
    let msg = ''
    let r = ganhos / 100
    let j = gastos / r

    if (ganhos < gastos) {
        return msg ='Orçamento comprometido! Hora de rever seus ganhos';
    }

    else if (j >= 81  && j <= 100) {
        return msg = 'Cuidado, seu orçamento pode ficar comprometido';
    }

    else if (j >=51 && j <= 80) {
        return msg =' Atenção, melhor conter os gastos!';
    }

    else if (j >=21 && j <=50) {
        return msg = 'Muito bem, seus gastos não ultrapassam metade dos ganhos!';
    }

    else if (j >= 0 && j <=20) {
        return msg ='Parabéns, está gerenciando bem seu orçamento!';
    }

    else {
        return msg ='Erro';
    }

    
}