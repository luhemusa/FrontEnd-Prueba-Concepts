import { Fragment } from 'react'
import DivAnimation from './utils/DivAnimation'
import './css/body.css'
//router
import { Routes, Route, Link } from "react-router-dom";
//components
import Home from './components/Home'
import Trends from './components/Trends'
import NavBar from './components/NavBar'
import Collections from './components/Collections';
import Tips from './components/Tips';


const App = () => {
  return (
    <div className="App">
      <DivAnimation>
        <NavBar />
        <Routes className=".container">
          <Route path="/" element={<Home />} />
          <Route path="trends" element={<Trends />} />
          <Route path="collections" element={<Collections />} />
          <Route path="tips" element={<Tips />} />
        </Routes>
      </DivAnimation>
    </div>
  );
}

export default App;
