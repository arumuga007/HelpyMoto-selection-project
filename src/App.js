import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BodyContent from './component/bodyContent/bodyContent';
import Sidebar from './component/sidebar/sidebar';
import DefaultBodyContent from './component/defaultBodyContent/default';
import Navbar from './component/Navbar/Navbar';
import { useState } from 'react';

function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className="App">
      <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
      <BrowserRouter>
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <Routes>
        <Route path='/' element={<BodyContent />}></Route>
        <Route path='/HelpyMoto-selection-project' element={<BodyContent />}></Route>
        <Route path='*' element={<DefaultBodyContent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
