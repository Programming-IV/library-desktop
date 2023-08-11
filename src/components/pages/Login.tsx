import "./Login.css";
import libraryBackground from '../../assets/library-cover.png';
import ButtonWithBackground from "../commons/buttons/ButtonWithBackground";
import ButtonWithoutBackground from "../commons/buttons/ButtonWithoutBackground";
import Input from "../commons/email-input/Input";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Login() {
  return (
    <div className='container-login'>
      <img src={libraryBackground} alt="library" className='image' />
      <div className="input">
        <h1 className="h1">Bienvenido de vuelta</h1>
        <Input content="Email" placeholder="Ingresa tu email" type="email"/>
        <Input content="Contraseña" placeholder="Ingresa tu contraseña" type="password" />
        <div className="question-account">
          <p>¿Todavía no tienes una cuenta?</p>
          <Link to="/signup">
            <ButtonWithoutBackground text="Crea una ahora" />
          </Link>
        </div>
        <ButtonWithBackground className="ButtonWithBackground" text="Iniciar sesion" />
      </div>
    </div>
  );
}

export default Login;
