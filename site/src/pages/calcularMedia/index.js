import './index.scss'
import Media from '../../service/calculoMedia/media.js';
import { useState } from 'react';


export default function Medias() {
    const [Alunos, SetAlunos] = useState(0);
    const [RespMedia, SetRespMedia] = useState(0);
    const [RespMaior, SetRespMaior] = useState(0);
    const [RespMenor, SetRespMenor] = useState(0);
    const [inputs, SetInputs] = useState(0);



    function Calcular() {
        try {
            const f = Media(nota);
            SetRespMedia(f);
            SetRespMaior(f);
            SetRespMenor(f);
        } catch (err) {
            alert(err.message);
        }

    }


    return (
        <main>

            <h1>Nota da Sala</h1>

            <label id='1'>
                QTD.Alunos
            </label>

            <input id='1' type='number' />
{/* 
            {inputs.map(item=>
                <tr>
                    <label id={item.indice}>Aluno {item.indice}</label>
                    <input type="number" id={item.indice} />
                </tr>
            )}; */}






            <button onClick={Calcular}>Calcular</button>

            <div>
                Média da sala:{RespMedia}
                Maior nota:{RespMaior}
                Menor nota:{RespMenor}


            </div>






        </main>
    );


}