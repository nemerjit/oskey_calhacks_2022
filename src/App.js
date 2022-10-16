import './App.css';
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import Sheets from './pages/sheets'
import NewMusic from './pages/newmusic'
import NavBar from './components/navbar'
import SheetMusicGenerator from './pages/sheetmusic'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/sheets" element={<Sheets />}></Route>
        <Route path="/newmusic" element={<NewMusic />}></Route>
        <Route path="/sheetmusic" element={<SheetMusicGenerator/>}></Route>
      </Routes>
        
    </div>
  );
}

export default App;
