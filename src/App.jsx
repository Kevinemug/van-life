
import {Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import "./server"
import Vans from './pages/Vans';
// import { HashRouter } from "react-router-dom";
import VanDetail from './pages/VanDetail';
function App() {

  return (
    <>
    <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route  path="/about" element ={<About/>}/>
      <Route  path="/vans" element ={<Vans/>}/>
      <Route  path="/vans/:id" element ={<VanDetail/>}/>
    </Routes>

    </>
  )
}

export default App
