import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import SignUp from './pages/Login/SignUp';
import Login from './pages/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Pricing from './pages/Pricing/Pricing';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">

      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/loginDetails' element={<LoginForm/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
