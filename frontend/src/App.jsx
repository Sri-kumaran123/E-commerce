
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Protected from './pages/Protected';
import UserProfile from './pages/UserProfile';
import AddProduct from './pages/AddProduct';
import Cart from './pages/Cart';


function App() {
  

  return <div>
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/manage/register' element={<Signup manage={true} />} />
      <Route path='/profile' element={<Protected />}>
        <Route index element={<UserProfile />} />
        <Route path='add-product' element={<AddProduct />} />
      </Route>
    </Routes>
    
  </div>
}

export default App
