
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register  />} />
          <Route path='*' element={<Error404 />} />
          <Route path='/Dashboard' element = {<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
