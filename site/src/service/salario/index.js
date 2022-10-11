

export default function CalcularSalario(SalarioBase,Bonus, Desc){

    const umPorcento = SalarioBase /100 * Bonus;
    const salarioFinal =  SalarioBase - Desc 
    const x =  salarioFinal + umPorcento;
    return ('O seu Salário é de ' + x)
    
}