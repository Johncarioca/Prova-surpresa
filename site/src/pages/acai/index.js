import {  useEffect, useState } from "react";
import Calcular from "../../service/acai";
import './index.scss';

export default function Acai() {

    const [Pequeno, SetPequeno] = useState(0);
    const [Medio, SetMedio] = useState(0);
    const [Grande, SetGrande] = useState(0);
    const [Desconto, SetDesconto] = useState(0);
    const [Resultado, SetResultado] = useState(0);

    function Final() {
        try {
            let J=Calcular(Pequeno,Medio,Grande,Desconto)
            SetResultado(J);    
        } catch (err) {
            alert(err.message)
        }
        
        
    }


    useEffect(()=> {
        Final();
    },[Pequeno,Medio,Grande,Desconto])
    

    return (
        <main className="acai">
        <section className="meio">
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
                <button onClick={Final}>Calcular</button> 

                <p>{Resultado} </p>
            </div>
        </section>
        </main>
    );
}