import { useEffect, useState } from 'react';
import './index.scss'


export default function Contar2 (){

    const [qtd, setQtd] = useState(0);
    const [Resposta , setResposta ] = useState([]);

    function Calcular() {
        const x = ContarAte(qtd)
        setResposta(x);
    } 
    

    function ContarAte (qtd){
        let conta = [];
        for (let i = 1;  i <= qtd; i++) {
            conta[i] = '* ';
            
        }
        return conta;
    }

    useEffect(()=> {
        Calcular();
    },[qtd])




    return (

        <main className='conta2'>
            <div>
                
                <div>
                    <h1> Asterisco</h1>
                </div>
                
                
                <div>
                    QTD. <input type="number" value={qtd} min={0} onChange={e => setQtd(e.target.value)}/>
                </div>
                <div>
                    <button onClick={Calcular}>Calcular</button>
                </div>

                <div className="array">
                    {Resposta}
                </div>
                
                
            </div>
        </main>
    );

}