import './App.css';
import { Routes, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Account from './pages/Account';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/tasks' element={<Tasks />} />
        <Route exact path='/account' element={<Account />} />
        <Route exact path='/landing' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
