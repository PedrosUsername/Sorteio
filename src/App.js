import logo from './logo.svg';
import './App.css';

/*
* importar um componente de cada vez
* aparentemente importar mais de um componente gera conflitos de CSS
*/

// <Sorteio turma={turma}/>
import Sorteio from './exercicio-01/Sorteio';

// <Characters />
// import Characters from './exercicio-02/Characters';

/*
* 
* 
*/

function App() {
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
         <Sorteio turma={turma}/>
      </main>
    </div>
  );
}

export default App;
