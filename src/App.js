import Home from './pages/Home';
import './App.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProductView from './pages/ProductView';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useContext , useEffect } from 'react';
import { AuthContext } from './store/FirebaseContext';
import CreatePage from './pages/CreatePage';

function App() {

  const auth = getAuth()
  const {setUser}= useContext(AuthContext)
  useEffect(()=>{
    onAuthStateChanged(auth , (user)=>{
      setUser(user)
      // console.log(user);

      
    })},[])
 
  return (
    <div  >
      <Router>
        <Routes>

          <Route exact path='/ChocolateTheBrand' element={<Home/>} />

          <Route exact path='/signup' element={<Signup/>} />

          <Route exact path='/login' element={<Login/>} />

          <Route exact path='/products' element={<ProductView/>} />

          <Route exact path='/create' element={<CreatePage/>} />
          
          
          
          
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
