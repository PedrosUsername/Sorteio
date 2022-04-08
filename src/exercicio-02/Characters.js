import { useState } from "react";

import './Characters.css';
import b from "./assets/exercicio-02/bobesponja.png";
import l from "./assets/exercicio-02/lulamolusco.png";
import s from "./assets/exercicio-02/sirigueijo.png";

function Characters() {
    const [personagem, setPersonagem] = useState("");

    const path = "/assets/exercicio-02/";


    function processarInput(event){
        setPersonagem(event.target.value);
    }

    return (
        <div className='characters'>

            <div className='container__input'>
                
                <label className="input__item" for="name">Escreva o nome de um personagem de bob esponja: (ex.: sirigueijo, lula molusco)</label><br />
                <input onChange={processarInput} className="input__item" type="text" id="name" name="name" /> 
                
            </div>

            <div className='container__resultado'>

                <div>
                    {
                        personagem == "bob esponja" && <img src={b} alt="bob esponja" height={300}/>
                    }
                    {
                        personagem == "lula molusco" && <img src={l} alt="lula molusco" height={300}/>
                    }
                    {
                        personagem == "sirigueijo" && <img src={s} alt="sirigueijo" height={300}/>
                    }                                        
                </div>

            </div>

        </div>
    )
}

export default Characters;