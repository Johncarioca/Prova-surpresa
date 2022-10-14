import { useState } from 'react';
import './index.scss'
import CalcularIngresso from '../../service/ingresso';






export default function Ingresso(){

    const [Inteiras, setInteiras] = useState('');
    const [Meias, setMeias] = useState('');
    const [DiaSemana, setDiaSemana] = useState('');
    const [Nacionalidade, setNacionalidade] = useState(false);
    const [Resposta, setResposta] = useState(0);

    function soma(){
        try {
            const f = CalcularIngresso(Inteiras, Meias, DiaSemana, Nacionalidade);
            setResposta(f); 
        } catch (err) {
            alert(err.message);
        }
        
    }


    return(

        <main className=" Ingresso">
            
            <section>
                
                <h1>Ingresso</h1>

                <div>
                    Inteiras <input type="number"  value={Inteiras}  onChange={e => setInteiras(e.target.value)}/> 
                </div>
                <div>
                    Meias <input type="number" value={Meias}  onChange={e => setMeias(e.target.value)}/>
                </div>
                <div>
                    Dia Semana <input type="text" value={DiaSemana}  onChange={e => setDiaSemana(e.target.value)}/>
                </div>
                <div>
                    Nacionalidade <input type="checkbox" value={Nacionalidade}  onChange={e => setNacionalidade(e.target.checked)}/>
                </div>

                <div>
                    <button onClick={soma}>CALCULAR </button>  
                    <br/>
                    <br/>
                    <br/>
                    {Resposta}
                </div>

            </section>
            
        </main>
    );
}