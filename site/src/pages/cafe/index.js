import Cafe from "../../service/cafe";
import { useState } from "react";

export default function Index() {
    const [N, SetN] = useState(0);
    const [L, SetL] = useState(0);
    const [D, SetD] = useState(0);
    const [Resp, SetResp] = useState(0);

    function Calcular(){
        try {

            let j = Cafe(N,L,D)
            SetResp(j);
            console.log(Resp);

        } 
        catch (err) {
            alert(err.message);
        }
    }
    

    return (
        <main>

            <h1>Café</h1>

            <div>
                Qtd. de alunos<input type='number' value={N} onChange={e => SetN(Number(e.target.value))} />

                Capacidade<input type='number' value={L} onChange={e => SetL(Number(e.target.value))} />

                Consumo<input type='number' value={D} onChange={e => SetD(Number(e.target.value))} />
            </div>
            <button onClick={Calcular}>Calcular</button>
            <div>
                {Resp}
                
            </div>

        </main>
    );




}