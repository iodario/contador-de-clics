import './App.css';
import Boton from './componentes/Boton'
import Contador from './componentes/Contador'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import { useState } from 'react';

function App() {

  //utilizamos Hook useState
  //elemento numClics es el valor que queremos usar como estado
  //elemento setNumClics es la funcion que nos va a a permitir utilizarlo
  // le asignamos el valor retornado por useState()

  const [numClics, setNumClics] = useState(0);




  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp" />
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        {
          
        }
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;




//3:20:00 ASIGNAMOS FUNCIONES A LOS PROPS
//3:24:24 CREANDO ESTILOS PARA EL BOTON
//numClics es una variable que definimos arriba, 
//y se pasa como asignacion de una prop del componente <Contador />

