import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './home';
import Bollywood from './bollywood';
import Technology from "./technology";
import Hollywood from "./hollywood";
import Fitness from "./fitness";
import Food from "./food";
import Post from "./post";
import Notfound from "./notfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/bollywood' element={<Bollywood/>}/>
           <Route path='/technology' element={<Technology/>}/>
           <Route path='/hollywood' element={<Hollywood/>}/>
           <Route path='/fitness' element={<Fitness/>}/>
           <Route path='/food' element={<Food/>}/>
           <Route path='/post' element={<Post/>}/>
           <Route path='*' element={<Notfound/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
