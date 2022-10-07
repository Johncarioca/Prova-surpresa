import {  useEffect, useState } from "react";

export default function Acai() {

    const [Pequeno, SetPequeno] = useState(0);
    const [Medio, SetMedio] = useState(0);
    const [Grande, SetGrande] = useState(0);
    const [Desconto, SetDesconto] = useState(0);
    const [Resultado, SetResultado] = useState(0);

    function Calcular(){
        let total = Pequeno * 13.50 + Medio * 15 + Grande * 17.50;
        let desc =  total*Desconto / 100;
        let resul = total - desc;
        SetResultado(resul);

    }


    useEffect(()=> {
        Calcular();
    },[Pequeno,Medio,Grande,Desconto])
    

    return (
        <section>
            <div>
                <p>QTD.Pequeno</p>
                <input type="text" value={Pequeno} onChange={e => SetPequeno(Number(e.target.value))}/>
            </div>
            <div>
                <p>QTD.Medio</p>
                <input type="text" value={Medio} onChange={e => SetMedio(Number(e.target.value))}/>
            </div>
            <div>
                <p>QTD.Grande</p>
                <input type="textr" value={Grande} onChange={e => SetGrande(Number(e.target.value))}/>
            </div>
            <div>
                <p>QTD.desconto</p>
                <input type="text" value={Desconto} onChange={e => SetDesconto(Number(e.target.value))}/>
            </div>
            <div>
                <button onClick={Calcular}>Calcular</button> 

                <p>O valor total: {Resultado} </p>
            </div>
        </section>
    );
}