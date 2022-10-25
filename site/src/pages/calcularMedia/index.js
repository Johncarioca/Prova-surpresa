import './index.scss'
import { calcularMedia } from '../../service/calculoMedia/index';
import { Alunos } from '../../service/calculoMedia/aluno';
import { useState } from 'react';

export default function Index() {

    const [qtdAluno, setQtdAluno] = useState(0);
    const [alunos, setAlunos] = useState([]);
    const [notaAluno, setNotaAluno] = useState([]);
    const [res, setRes] = useState()
    let array = []
    
    function gerarAlunos() {
        const resp = Alunos(qtdAluno);
        setAlunos(resp)
    }

    
    console.log(notaAluno);

    return(
        <main>
            <h1>ALunos</h1>
            <p>Quantidade de alunos: <input type="number" value={qtdAluno} onChange={e=> setQtdAluno(e.target.value)} /> <button onClick={gerarAlunos}>OK</button> </p>
            {alunos.map((item, index) => (
                <div>
                    <p>Aluno {item} <input type="number" value={notaAluno[index]} onChange={e => {
                          
                            array[index] = Number(e.target.value)
                           console.log(array)
                           
                            
                    }} /></p>
                </div>
            ))

            }
            <button onClick={() => setRes(calcularMedia(array ))}>Calcular</button>
            {res}
        </main>
    );
}