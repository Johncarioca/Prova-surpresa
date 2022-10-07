import './index.scss'
import { useEffect, useState } from "react";

export default function Grama() {
    const[Grama, SetGrama ] = useState(0);
    const[Resultado, SetResultado] = useState(0);

    function Calcular(){
        let total = 0;

        if(Grama<=0){
            SetResultado('Peso Inválido')

        }

        else if(Grama >= 1000){
            total = (Grama / 100) * 3;
            SetResultado('O total a pagar é R$'+total)
                      
        }

        
        else if(Grama < 1000){
            total= (Grama / 100) * 3.5;
            SetResultado('O total a pagar é R$'+total)

        }
        

        else{
            SetResultado('Peso Inválido')
        }
    }

    useEffect(()=>{
        Calcular();
    },[])

    return (
        <main>
            <section>
                <div>
                    <p>QTD.Grama</p>
                    <input type="text" value={Grama} onChange={e => SetGrama(Number(e.target.value))} />
                </div>
              
                <div>
                    <button onClick={Calcular}>Calcular</button>

                    <p> {Resultado} </p>
                </div>

            </section>
        </main>
    );
}