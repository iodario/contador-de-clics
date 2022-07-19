import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <h1>hola</h1>
        <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp"/>
      </div>
    </div>
  );
}

export default App;
