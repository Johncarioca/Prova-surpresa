import { useEffect, useState } from 'react';
import './index.scss'


export default function Contar3() {
    const [Asterisco, setAsterisco] = useState(false);
    const [Bolinha, setBolinha] = useState(false);
    const [Quadrado, setQuadrado] = useState(false);
    const [Img, setImg] = useState(false);
    const [base, setbase] = useState(0);
    const [altura, setAltura] = useState(0);
    const [Resposta, setResposta] = useState([]);

    function mostrarAsterisco() {
        setAsterisco(true);
        setBolinha(false);
        setQuadrado(false);
        setImg(false);
    }

    function mostrarBolinha() {
        setAsterisco(false);
        setBolinha(true);
        setQuadrado(false);
        setImg(false);
    }

    function mostrarQuadrado() {
        setAsterisco(false);
        setBolinha(false);
        setQuadrado(true);
        setImg(false);
    }

    function mostrarImg() {
        setAsterisco(false);
        setBolinha(false);
        setQuadrado(false);
        setImg(true);
    }

    function Calcular() {
        if (Asterisco === true) {
            const x = ContarAteAsterisco(base, altura)
            setResposta(x);
        }
        else if (Bolinha === true) {
            const x = ContarAteBolinha(base, altura)
            setResposta(x);
        }
        else if (Quadrado === true) {
            const x = ContarAteQuadrado(base, altura)
            setResposta(x);
        }
        else if (Img === true) {
            const x = ContarAteImg(base, altura)
            setResposta(x);
        }
    }





    function ContarAteAsterisco(base, alt) {
        let k = [];
        let j = [];

        for (let i = 0; i < alt; i++) {

            for (let i = 0; i < base; i++) {
                k[i] = " ∗ ";
            }

            j[i] = k;
        }





        return j;

    }

    function ContarAteBolinha(base, alt) {
        let k = [];
        let j = [];

        for (let i = 0; i < alt; i++) {

            for (let i = 0; i < base; i++) {
                k[i] = " ● ";
            }

            j[i] = k;
        }
        return j;

    }

    function ContarAteQuadrado(base, alt) {
        let k = [];
        let j = [];

        for (let i = 0; i < alt; i++) {

            for (let i = 0; i < base; i++) {
                k[i] = " ▇ ";
            }

            j[i] = k;
        }
        return j;

    }

    function ContarAteImg(base, alt) {
        let k = [];
        let j = [];


        for (let i = 0; i < alt; i++) {

            for (let i = 0; i < base; i++) {
                let x = <img src='https://w7.pngwing.com/pngs/9/168/png-transparent-steven-universe-face-youtube-together-breakfast-rose-quartz-face.png' height={'30px'} width={'30px'} />
                k[i] = x;
            }

            j[i] = k;
        }
        return j;

    }

    useEffect(() => {
        Calcular();
    }, [base, altura])




    return (

        <main className='conta2'>
            <div>

                <div>
                    <h1> Diversos Estilos</h1>
                </div>

                <div>
                    <button onClick={mostrarAsterisco} >∗</button>
                    <button onClick={mostrarBolinha} >●</button>
                    <button onClick={mostrarQuadrado}>▇</button>
                    <button onClick={mostrarImg}>Imagem</button>
                </div>
                <div>
                    Base: <input type="number" value={base} min={0} onChange={e => setbase(e.target.value)} />
                </div>
                <div>
                    Altura: <input type="number" value={altura} min={0} onChange={e => setAltura(e.target.value)} />
                </div>
                <div>
                    <button onClick={Calcular}>Calcular</button>
                </div>

                <div>
                    {Resposta.map(item =>
                        <p> {item} </p>
                    )}
                </div>


            </div>
        </main>
    );

}