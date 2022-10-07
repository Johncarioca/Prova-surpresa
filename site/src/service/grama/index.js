

export default function Calcular(Grama){
    let total = 0;
    let resul = '';

    if(Grama<=0){
        resul='Peso Inválido'

    }

    else if(Grama >= 1000){
        total = (Grama / 100) * 3;
        resul='O total a pagar é R$'+total
                  
    }

    
    else if(Grama < 1000){
        total= (Grama / 100) * 3.5;
        resul='O total a pagar é R$'+total

    }
    

    else{
        resul='Peso Inválido'
    }

    return(resul)
}