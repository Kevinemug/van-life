
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import "./server"
import Vans from './pages/Vans';
// import { HashRouter } from "react-router-dom";
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout';
function App() {

  return (
    <>
   
      <Routes>

        <Route element={<Layout/>}>
        <Route path="/" element ={<Home/>}/>
      <Route  path="/about" element ={<About/>}/>
      <Route  path="/vans" element ={<Vans/>}/>
      <Route  path="/vans/:id" element ={<VanDetail/>}/>

        </Route>
    </Routes>

    </>
  )
}

export default App
