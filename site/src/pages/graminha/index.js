import './index.scss'
import { useEffect, useState } from "react";
import Calcular from '../../service/grama';


export default function Grama() {
    const[Grama, SetGrama ] = useState(0);
    const[Resultado, SetResultado] = useState(0);

    function Final() {

        try {
            let J=Calcular(Grama);
        SetResultado(J)
        } catch (err) {
            alert(err.message)
        }
        
    }



    useEffect(()=>{
        Final();
    },[])

    return (
        <main className="grama">
            <section className="meio">
                <div>
                    <p>QTD.Grama</p>
                    <input type="text" value={Grama} onChange={e => SetGrama(Number(e.target.value))} />
                </div>
              
                <div>
                    <button onClick={Final}>Calcular</button>

                    <p> {Resultado} </p>
                </div>

            </section>
        </main>
    );
}