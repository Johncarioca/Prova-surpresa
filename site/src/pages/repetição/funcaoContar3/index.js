import { useEffect, useState } from 'react';
import './index.scss'


export default function Contar3 (){

    const [base, setbase] = useState(0);
    const [altura, setAltura] = useState(0);
    const [Resposta , setResposta ] = useState([]);

    function Calcular() {
        const x = ContarAte(base)
        setResposta(x);
    } 
    

    function ContarAte (base, alt){
        let k=[];
        let j=[];
    
        for(let i=0; i<=alt ;i++){
    
            for(let i=0; i<base; i++){
                k[i]="* ";
            }
    
            j[i]=k;
        }
    
        return j;
    }

    useEffect(()=> {
        Calcular();
    },[base,altura])




    return (

        <main className='conta2'>
            <div>
                
                <div>
                    <h1> Asterisco</h1>
                </div>
                
                
                <div>
                    base <input type="number" value={base} min={0} onChange={e => setbase(e.target.value)}/>
                </div>
                <div>
                    Altura <input type="number" value={altura} min={0} onChange={e => setAltura(e.target.value)}/>
                </div>
                <div>
                    <button onClick={Calcular}>Calcular</button>
                </div>

                <div className="array">
                    {Resposta.map(item=>
                        <p> {item} </p>
                    )}
                </div>
                
                
            </div>
        </main>
    );

}