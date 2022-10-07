
export default function Signo(Mes, Dia) {
    let resul = '';

    if (Mes === 'Setembro' && Dia < 23) {
        resul='É do signo de Libra? Não'
    }
    else if (Mes === 'Outubro' && Dia > 22) {
        resul='É do signo de Libra? Não'
    }
    else if(Dia>31 || Dia <1){
        resul='Data Inválida'
    }

    else if(Dia >=23 && Mes === 'Setembro'){
        resul='É do signo de Libra? Sim'
    }

    else if( Dia <= 22 && Mes ==='Outubro'){
        resul='É do signo de Libra? Sim'
    }


   
    else {
        resul='Data Inválida'
    }


    return resul;


}