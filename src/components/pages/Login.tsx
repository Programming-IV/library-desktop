import "./Login.css";
import libraryBackground from './assets/library-cover.png';
import ButtonWithBackground from "../commons/buttons/ButtonWithBackground";
import ButtonWithoutBackground from "../commons/buttons/ButtonWithoutBackground";
import Input from "../commons/email-input/Input";

function App() {
  return (
    <div className='container'>
      <img src={libraryBackground} alt="library" className='image' />
      <div className="input">
        <h1 className="h1">Bienvenido de vuelta</h1>
        <Input content="Email" placeholder="Ingresa tu email" type="email"/>
        <Input content="Contraseña" placeholder="Ingresa tu contraseña" type="password" />
        <div className="question-account">
          <p>¿Todavía no tienes una cuenta?</p>
          <ButtonWithoutBackground text="Crea una ahora" />
        </div>
        <ButtonWithBackground className="ButtonWithBackground" text="Iniciar sesion" />
      </div>
    </div>
  );
}

export default App;
