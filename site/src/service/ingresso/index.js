




export default function CalcularIngresso(Meias, Inteiras, DiaSemana, Nacionalidade){

    let msg= '';
    


    if (DiaSemana === "quarta" && Nacionalidade === false) {
        
        const ingresso1 = Inteiras * 14.25
        const ingresso2 = Meias * 14.25
        const total = ingresso1 + ingresso2;

        return msg = "O total a se pagar é: " + total;
    }

    else if (DiaSemana === "quarta" && Nacionalidade === true) {
        const ingresso1 = Inteiras * 5
        const ingresso2 = Meias * 5
        const total = ingresso1 + ingresso2;

        return msg = "O total a se pagar é: " + total;
            
    }

    else if (DiaSemana != "quarta" && Nacionalidade === true) {
        const ingresso1 = Inteiras * 5
        const ingresso2 = Meias * 5
        const total = ingresso1 + ingresso2;

        return msg = "O total a se pagar é: " + total;
            
    }

    else if (DiaSemana != "quarta" && Nacionalidade != true) {
        const ingresso1 = Inteiras * 28.50
        const ingresso2 = Meias * 14.25
        const total = ingresso1 + ingresso2;

        return msg = "O total a se pagar é: " + total;
    
    }

    else{
        return msg ='Erro inesperado';
    }

    

} 