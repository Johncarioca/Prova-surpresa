export default function Calcular(febre) {
    let Resp = '';

    if (febre >= 41) {
        Resp = 'Hipertemia';
    }

    else if (febre >= 39.6 && febre < 41) {
        Resp ='Febre Alta';
    }

    else if (febre >=37.6 && febre < 39.6) {
        Resp = 'Febre';
    }
    
    else if (febre >=36 && febre < 37.6 ) {
        Resp ='Normal';
    }

    else if (febre < 36 ) {
        Resp ='Hipotemia'
    }

    return Resp;

}