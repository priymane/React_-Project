
import './App.css';
import LoginSignup from './Pages/LoginSignup';
import ShopCategory from './Pages/ShopCategory'
import Cart from './Pages/Cart'
import Shop from './Pages/Shop'
import Material from './Pages/Material';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import men_banner from './components/assests/banner_mens.png'
import women_banner from './components/assests/banner_women.png'
import kid_banner from './components/assests/banner_kids.png'

import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner}category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path ="/product" element={<Material/>}>
        <Route path = ":productID" element={<Material/>}/>
    
      </Route>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
          
     
    </div>
  )
}

export default App;
