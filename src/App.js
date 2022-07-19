import './App.css';
import Boton from './componentes/Boton'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'

function App() {

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={freeCodeCampLogo} alt="Logo de freeCodeCamp" />
      </div>
      <div className="contenedor-principal">
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={ manejarClic } />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={ reiniciarContador } />
      </div>
    </div>
  );
}

export default App;





//3:20:00 ASIGNAMOS FUNCIONES A LOS PROPS
//3:24:24 CREANDO ESTILOS PARA EL BOTON