import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BodyContent from './component/bodyContent/bodyContent';
import Sidebar from './component/sidebar/sidebar';
import DefaultBodyContent from './component/defaultBodyContent/default';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
        <Route path='/' element={<BodyContent />}></Route>
        <Route path='*' element={<DefaultBodyContent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
