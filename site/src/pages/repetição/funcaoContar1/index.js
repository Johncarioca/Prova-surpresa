import { useState } from 'react';
import './index.scss'


export default function Contar (){

    const [Comeco, setComeco] = useState(0);
    const [Limite, setLimite] = useState(0);
    const [Resposta , setResposta ] = useState([]);

    function Calcular() {
        const x = ContarAte(Comeco, Limite)
        setResposta(x);
    } 
    

    function ContarAte (Comeco, Limite){
        let conta = [];
        let numeros = 0;
        for (let i = Comeco;  i <= Limite; i++) {
            conta[numeros] = i;
            numeros++;
        }
        return conta;
    }

    return (

        <main>
            <div>
                
                <div>
                    <h1> Array</h1>
                </div>
                <div>
                    inicio <input type="number"  value={Comeco}  onChange={e => setComeco(e.target.value)}/>
                </div>
                
                <div>
                    Fim <input type="number" value={Limite}  onChange={e => setLimite(e.target.value)}/>
                </div>
                <div>
                    <button onClick={Calcular}>Calcular</button>
                </div>

                <div>
                    {Resposta}
                </div>
                
                
            </div>
        </main>
    );

}