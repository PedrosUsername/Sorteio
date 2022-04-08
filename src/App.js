import logo from './logo.svg';
import './App.css';

import ListItem from './exercicio-03/ListItem';

/*
* importar um componente de cada vez
* aparentemente importar mais de um componente gera conflitos de CSS
*/

// <Sorteio turma={turma}/>
// import Sorteio from './exercicio-01/Sorteio';

// <Characters />
// import Characters from './exercicio-02/Characters';

// <Formas>
//  <ListItem flavour={bobEsponja}/>
//  <ListItem flavour={lulaMolusco} />    
// </Formas>


/*
* 
* 
*/
import Formas from './exercicio-03/Formas';


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
          nome: "Rick"
      },
      {
          key: 1,
          nome: "Ricko"
      },
      {
          key: 2,
          nome: "Ricc"
      },
      {
          key: 3,
          nome: "James"
      },
      {
          key: 4,
          nome: "Ash"
      }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sorteio de alunos
        </p>
      </header>
      <main>
        <Formas>
          <ListItem flavour={lulaMolusco}/>
          <ListItem flavour={bobEsponja}/>
        </Formas>
      </main>
    </div>
  );
}

export default App;
