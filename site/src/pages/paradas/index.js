import './index.scss';
import { useState } from 'react';
import CalcularParadas from '../../service/paradas';

export default function Paradas() {
    const[Capacidade, SetCapacidade ] = useState(0);
    const[Consumo, SetConsumo ] = useState(0);
    const[Distancia, SetDistancia ] = useState(0);
    const[Resultado, SetResultado] = useState(0);


    function Calcular(){
        const f =  CalcularParadas(Capacidade,Consumo,Distancia)
        SetResultado(f);
    }

    return(
        <main className="paradas">
            <section className="meio">
                <div>
                    Capacidade <input type="number" value={Capacidade} onChange={e => SetCapacidade(e.target.value)} />
                </div>

                <div>
                    Consumo <input type="number" value={Consumo} onChange={e => SetConsumo(e.target.value)}/>
                </div>
                <div>
                    
                    Distância <input type="number" value={Distancia} onChange={e => SetDistancia(e.target.value)}/>
                </div>
                <div>
                    <button onClick={Calcular}>Calcular</button>

                    <p> {Resultado} </p>
                </div>

            </section>
        </main>
    )
}