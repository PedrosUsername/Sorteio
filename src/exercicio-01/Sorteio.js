import { useState } from "react";

import './Sorteio.css';

function Sorteio(props) {
    const [escolhidos, setEscolhidos] = useState([]);
    const [alunos, setAlunos] = useState(props.turma);
    const [errorFlag, setErrorFlag] = useState("");


    function sortear() {
        const rand1 = _randomIntFromInterval(0, alunos.length - 1);
        const rand2 = _randomIntFromInterval(0, alunos.length - 1);        
        let newEscolhidos = [];
        let newAlunos = [];        

        if(alunos[rand1]){
            newEscolhidos.push(alunos[rand1]);

            if(rand1 !== rand2) {
                newEscolhidos.push(alunos[rand2]);
            }
        }
        else {
            setErrorFlag("Todos os alunos ja foram sorteados");
        }


        newAlunos = alunos.filter( el => !newEscolhidos.includes(el) );

        setEscolhidos(newEscolhidos);
        setAlunos(newAlunos);
    }

    function _randomIntFromInterval(min, max) { // max ta incluido
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    return (
        <div className='sorteio'>
            <div className='container__sorteio'>
                <div className='container__resultado'>
                    <ul>
                        {
                            alunos.map( al => (
                                <li>
                                    { al.nome }
                                </li>
                            ))
                        }                                                
                    </ul>
                </div>

                <div className='container__resultado'>
                    <ul>
                        {
                            escolhidos.map( al => (
                                <li>
                                    { al.nome }
                                </li>
                            ))
                        }                                                
                    </ul>
                </div>
            </div>

            {
                <span>{errorFlag}</span>
            }

            <div className='container__botao'>
                <button onClick={() => sortear()} type="button">SORTEAR 2</button>
            </div>
        </div>
    );
}

export default Sorteio;