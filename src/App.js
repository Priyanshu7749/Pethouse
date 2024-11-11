import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import AdoptionSearch from './components/AdoptionSearch';
import Aboutus from './components/Aboutus';
import Volunteer from './components/Volunteer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/adoptionsearch' element={<AdoptionSearch/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/volunteer' element={<Volunteer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
