import './index.scss';
import CalcularOrcamento from '../../service/orcamento';
import { useState } from 'react';


export default function Orcamento() {
    const [Ganhos, SetGanhos] = useState();
    const [Gastos, SetGastos] = useState();
    const [Resposta, SetResposta] = useState();

    function Soma() {
        try {
            const f = CalcularOrcamento(Ganhos, Gastos)
            SetResposta(f)
        } catch (err) {
                alert(err.message)
        }

    }

    return (
        <main>

            <a href="/">Voltar</a>

            <h1>Situação do Orçamento da Familia</h1>

            <div>
                ganhos<input type='number' value={Ganhos} onChange={e => SetGanhos(e.target.value)} />
            </div>

            <div>
                gastos <input type='number' value={Gastos} onChange={e => SetGastos(e.target.value)} />
            </div>

            <div>
                <button onClick={Soma}>Calcular</button>
            </div>

            <div>
                ???{Resposta}
            </div>

        </main>
    );
}