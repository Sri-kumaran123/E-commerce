
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Protected from './pages/Protected';

function App() {
  

  return <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/manage/register' element={<Signup manage={true} />} />
      <Route path='/profile' element={<Protected />}>

      </Route>
    </Routes>
    
  </div>
}

export default App
