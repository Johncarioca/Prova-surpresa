import './index.scss';
import { useState } from "react";
import Calcular from '../../service/febre';

export default function Febre() {
    const[Febre, SetFebre] = useState();
    const[Resp, SetResp] = useState('');

    function Soma() {
        try {
            let j= Calcular(Febre);
            SetResp(j);
        } catch (err) {
            alert(err.message)
        }

    }


    return(
        <main className="page-febre">

            <a href='/'>
                Voltar
            </a>    

            <h1>Sua Temperatura</h1>

            <p>Temperatura</p>
            <input type='number' value={Febre} onChange={e => SetFebre(Number(e.target.value))} />

            <button onClick={Soma}>Calcular</button>

            <p>A situação da temperatura é {Resp}</p>

        </main>
    );
}