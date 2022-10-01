// import logo from './logo.svg';
import './App.css';
import Main from './Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useFetch } from "./useFetch";

function App() {
  const [data, loading, error] = useFetch("http://85.193.91.30/?content=json");
  const url = "http://85.193.91.30/media/";
  const textMarquee = "античный минимализм 50%";
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main data={data} loading={loading} error={error} url={url} textMarquee={textMarquee}/>} />
        {/* <Route path='/vefatso' exact element={<Main data={data} loading={loading} error={error} url={url} textMarquee={textMarquee}/>} /> */}
      </Routes>
    </BrowserRouter>
    </div>)
}

export default App;
