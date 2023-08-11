import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
