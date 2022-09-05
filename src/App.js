// import logo from './logo.svg';
import './App.css';
import Main from './Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/vefatso' exact  element={<Main />} />
      </Routes>
    </BrowserRouter>
    </div>)
}

export default App;
