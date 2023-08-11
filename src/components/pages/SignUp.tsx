import "./App.css";
import registerCover from './assets/register-cover.png';
import ButtonWithBackground from "../commons/buttons/ButtonWithBackground";
import Input from "../commons/email-input/Input";

function App() {
  return (
    <div className='container'>
      <img src={registerCover} alt="library" className='image' />
      <div className="input">
        <h1 className="h1">Crear una cuenta</h1>
        <Input content="Nombre" placeholder="Ej. Ronaldo" type="text"/>
        <Input content="Celular" placeholder="Ej. 6702XXXX" type="number"/>
        <Input content="Identificador" placeholder="Ej. 1248XXXX" type="number"/>
        <Input content="Correo Electronico" placeholder="Ingresa tu email" type="email"/>
        <Input content="Contraseña" placeholder="Ingresa tu contraseña" type="password" />
        <div className="button-container">
          <ButtonWithBackground className="Green-Button" text="Registrarme" />
          <ButtonWithBackground className="White-Button" text="Ya tengo cuenta" />
        </div>
      </div>
    </div>
  );
}

export default App;
