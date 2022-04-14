import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import RequireAuth from './RequireAuth/RequireAuth';
import ServiceDetails from './ServiceDetails/ServiceDetails';
import Register from './Pages/Login/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<RequireAuth><Cart></Cart></RequireAuth>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
