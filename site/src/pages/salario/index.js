import './index.scss'
import { useEffect, useState } from "react";
import CalcularSalario from '../../service/salario';


export default function Salario() {
    const[SalarioBase, SetSalarioBase ] = useState(0);
    const[Bonus, SetBonus ] = useState(0);
    const[Desc, SetDesc ] = useState(0);
    const[Resultado, SetResultado] = useState(0);


    function Calcular(){
        try {
            const f =  CalcularSalario(SalarioBase,Bonus,Desc)
            SetResultado(f);            
        } catch (err) {
            alert(err.message);
        }

    }




    useEffect(()=>{
        Calcular();
    },[SalarioBase, Bonus, Desc])

    return (
        <main className="salario">
            <section className="meio">
                <div>
                    Salario Base <input type="number" value={SalarioBase} onChange={e => SetSalarioBase(e.target.value)} />
                </div>

                <div>
                    Bonus <input type="number" value={Bonus} onChange={e => SetBonus(e.target.value)}/>
                </div>
                <div>
                    
                    Desconto <input type="number" value={Desc} onChange={e => SetDesc(e.target.value)}/>
                </div>
                <div>
                    <button onClick={Calcular}>Calcular</button>

                    <p> {Resultado} </p>
                </div>

            </section>
        </main>
    );
}