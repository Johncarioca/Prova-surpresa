import './index.scss';
import { useEffect, useState } from 'react';


export default function Signo() {
    const [Mes, setMes] = useState('');
    const [Dia, setDia] = useState(0);
    const [Resultado, setResultado] = useState('---')


    function Verificar() {

        if (Mes === 'Setembro' && Dia < 23) {
            setResultado('É do signo de Libra? Não')
        }
        else if (Mes === 'Outubro' && Dia > 22) {
            setResultado('É do signo de Libra? Não')
        }
        else if(Dia>31 || Dia <1){
            setResultado('Data Inválida')
        }


        
        else if(Dia >=23 && Mes === 'Setembro'){
            setResultado('É do signo de Libra? Sim')
        }

        else if( Dia <= 22 && Mes ==='Outubro'){
            setResultado('É do signo de Libra? Sim')
        }


       
        else {
            setResultado('Data Inválida')
        }

        
    }

    useEffect(()=>{
        Verificar();
    },[Mes,Dia])




    return (
        <main>
            <section>

                <h1>Veficação do signo de Libras</h1>
                <div>
                    <p>Mês</p>
                    <input type="text" value={Mes} onChange={e => setMes(e.target.value)} />
                </div>
                <div>
                    <p>dia</p>
                    <input type="number" value={Dia} onChange={e => setDia(e.target.value)} />
                </div>

                <button onClick={Verificar}>Verificar</button>

                <p>{Resultado}</p>
            </section>
        </main>
    )



}

