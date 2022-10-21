import { useState } from 'react';
import './index.scss'
import JurosCompostos from '../../service/jurosCompostos';





export default function Financiamento() {

    const [entrada, setEntrada] = useState(0);
    const [valorEmp, setValorEmp] = useState(0);
    const [taxa, setTaxa] = useState(0);
    const [periodo, setPeriodo] = useState(0);
    const [Montante, setMontante] = useState(0);
    const [Juros, setJuros] = useState(0);
    const [Parcela, setParcela] = useState(0);

    function Calcular() {
        try {
            const f = JurosCompostos(entrada, valorEmp, taxa, periodo);
            setMontante(f[0].toFixed(2));
            setJuros(f[1].toFixed(2));
            setParcela(f[2].toFixed(2));
        } catch (err) {
            alert(err.message);
        }

    }


    return (

        <main className="financiamento">

            <section>

                <h1>Financiamento</h1>

                <div>
                    <label id='4'>Valor da entrada(R$)</label>
                    <input type="number" id='4' value={entrada} onChange={e => setEntrada(Number(e.target.value))} />
                </div>
                <div>
                    <label id='5'>Valor do Empreendimento(R$)</label>
                    <input type="number" id='5' value={valorEmp} onChange={e => setValorEmp(Number(e.target.value))} />
                </div>
                <div>
                    <label id='6'>Taxa de Juros(Anual)</label>
                    <input type="number" value={taxa} id='6' onChange={e => setTaxa(Number(e.target.value))} />
                </div>
                <div>
                    <label id='7'>Período do Financiamento(Por Ano)</label>
                    <input type="number" value={periodo} id='7' onChange={e => setPeriodo(Number(e.target.value))} />
                </div>

                <div>
                    <button onClick={Calcular}>CALCULAR </button>
                    <br />
                    <br />
                    <br />
                    <label id='1'>
                        Valor do Final a ser pago:
                    </label>
                    <p id='1'>{Montante}</p><br />
                    <label id='2'> Valor de juros:</label>
                    <p id='2'>{Juros}</p><br />
                    <label id='3'>
                        Valor da Parcela:
                    </label>
                    <p id='3'> {Parcela}</p>
                </div>

            </section>

        </main>
    );
}