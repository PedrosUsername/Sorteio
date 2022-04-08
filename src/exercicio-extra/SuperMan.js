import { useEffect, useState } from "react";

function SuperMan() {
    const [personagem, setPersonagem] = useState("");

    useEffect(() => {
        if (personagem === "Clark Kent")
            setPersonagem("Super Homem");
      }, [personagem]);

    function processarInput(event){
        setPersonagem(event.target.value);
    }

    return (
        <div>
            <label className="input__item" for="name">Escreva o nome de um personagem:</label><br />
            <input onChange={processarInput} type="text" id="name" name="name" /> 
            <article>
                <h1>{ personagem }</h1>
            </article>
        </div>
    )
}

export default SuperMan;