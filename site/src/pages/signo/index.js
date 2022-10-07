import './index.scss';
import { useEffect, useState } from 'react';
import signo from '../../service/signo';

export default function Signo() {
    const [Mes, setMes] = useState('');
    const [Dia, setDia] = useState(0);
    const [Resultado, setResultado] = useState('---')


    useEffect(()=>{
        Verificar();
    },[])

    function Verificar() {
        try {
            let J= signo(Mes,Dia);
            setResultado(J)
        } catch (err) {
            alert(err.message)
        }    
    }
    
    

    




    return (
        <main className="signo">
            <section className='meio'>

                <h1>Veficação do signo de Líbras</h1>
                <div>
                    <p>Mês</p>
                    <input type="text" value={Mes} onChange={e => setMes(e.target.value)} />
                </div>
                <div>
                    <p>Dia</p>
                    <input type="number" value={Dia} onChange={e => setDia(Number(e.target.value))} />
                </div>

                <button onClick={Verificar}>Verificar</button>

                <p>{Resultado}</p>
            </section>
        </main>
    )



}

