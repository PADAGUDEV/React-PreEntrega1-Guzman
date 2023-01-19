// import logo from './logo.svg';
import './App.css';
// import {Componente} from './Componentes';
// import { FeedbackMessage } from "./FeedbackMessage";
// import {Input, Item,Titulo} from './Componentes';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    {/* <Componente/>
    <FeedbackMessage nombre = "FeedbackMessage" app= "react"/>
    <Input placeholder = "ingrese el valor que quiera"/>
    <Item valor= "21"/>
    <Titulo nombre="un ejercicio con props"/> */}
    <NavBar background={"black" }/>
    <ItemListContainer greeting="lista de productos"/>

</>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
