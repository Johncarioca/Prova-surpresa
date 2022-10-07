


export default function Calcular(Pequeno,Medio,Grande,Desconto){
    let total = Pequeno * 13.50 + Medio * 15 + Grande * 17.50;
    let desc =  total*Desconto / 100;
    let resul = total - desc;
    return('Total a pagar é R$'+resul);

}