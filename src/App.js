import logo from './logo.svg';
import './App.css';

import Sorteio from './exercicio-01/Sorteio';

/*
* importar um componente de cada vez
* para evitar conflitos de CSS
*/



// exercicio 01
// import Sorteio from './exercicio-01/Sorteio';
//
// <Sorteio turma={turma}/>



// exercicio 02
// import Characters from './exercicio-02/Characters';
//
// <Characters />



// exercicio 03
// import ListItem from './exercicio-03/ListItem';
// import Formas from './exercicio-03/Formas';
//
// <Formas>
//  <ListItem flavour={bobEsponja}/>
//  <ListItem flavour={lulaMolusco} />    
// </Formas>



// exercicio extra
// import SuperMan from './exercicio-extra/SuperMan';
//
// <SuperMan />



/*
* 
* 
*/


function App() {
  const bobEsponja = {
    nome: "Bob Esponja",
    formas: [
      {
        nome: "forma 0",
        path: "https://pngimg.com/uploads/spongebob/spongebob_PNG1.png",
      },
      {
        nome: "forma 1",
        path: "https://cdn.wallpapersafari.com/40/73/y7XPaT.jpg",
      },
      {
        nome: "forma 2",
        path: "http://4.bp.blogspot.com/-UT-02dbaXk8/U_tS4qMXhgI/AAAAAAAAAEM/AfTBuxaMjMA/s1600/spongebobstrongarms.jpg",
      },
      {
        nome: "forma 3",
        path: "https://i.imgflip.com/1p74ap.jpg",
      },                  
    ]
  }

  const lulaMolusco = {
    nome: "Lula Molusco",
    formas: [
      {
        nome: "forma 0",
        path: "https://i.pinimg.com/originals/0b/fb/9f/0bfb9f58ed5515dc1ff9bdd04d0f4541.jpg",
      },
      {
        nome: "forma 1",
        path: "http://i.ytimg.com/vi/EjexPWJTaGo/hqdefault.jpg",
      },
      {
        nome: "forma 2",
        path: "https://i.pinimg.com/originals/01/b1/e3/01b1e35e3e2483ba39494c199d4c9f10.jpg",
      },
      {
        nome: "forma 3",
        path: "https://cdn.quotesgram.com/img/60/66/333019415-167800-spongebob-square-pants-squidward-tentacles.png",
      },           
    ]
  }
  
  const turma = [
      {
        key: 0,
        nome: "Leandro Fernandes Patrício"
      },
      {
        key: 1,
        nome: "Rithie Natan Carvalhaes Prado"
      },
      {
        key: 2,
        nome: "Rodrigo Mendes de Souza"
      },
      {
        key: 3,
        nome: "Rodrigo Ribeiro Rangel"
      },
      {
        key: 4,
        nome: "Weatherly Moura Albuquerque"
      },
      {
        key: 5,
        nome: "Cláudio Makoto Miyata"
      },      
      {
        key: 6,
        nome: "Flavius Marcelino da Costa"
      },      
      {
        key: 7,
        nome: "Julia da Costa Telles Téo"
      },      
      {
        key: 8,
        nome: "Murilo Henrique de Oliveira"
      },      
      {
        key: 9,
        nome: "Pedro H Ro G"
      },      
      {
        key: 10,
        nome: "DANNIEL DIAS AUGUSTO"
      },      
      {
        key: 11,
        nome: "Jéssica Silva Pereira Oliveira"
      },
      {
        key: 12,
        nome: "João Vitor Nunes dos Santos"
      },
      {
        key: 13,
        nome: "WALLACE GOULART"
      },
      {
        key: 14,
        nome: "Giuliano Mitteroheffer Morelli"
      },
      {
        key: 15,
        nome: "Lincoln Rodrigo Pereira de Melo"
      },
      {
        key: 16,
        nome: "Nicolas da Matta Freire Araujo"
      },
      {
        key: 17,
        nome: "Victor Guilherme dos Santos Silva"
      },
      {
        key: 18,
        nome: "Ana Clara Barbeta Vicente"
      },
      {
        key: 19,
        nome: "Daniel Lopez Giraldo"
      },
      {
        key: 20,
        nome: "Milan Moreira Cruz"
      },
      {
        key: 21,
        nome: "Thatyara Alves Gomes"
      },
      {
        key: 22,
        nome: "Wesley Matheus Sardinha"
      },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Practice Mode
        </p>
      </header>
      <main>

        <Sorteio turma={turma}/>

      </main>
    </div>
  );
}

export default App;
