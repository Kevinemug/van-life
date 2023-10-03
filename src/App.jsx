import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./server";
import Vans from "./pages/Vans/Vans";
// import { HashRouter } from "react-router-dom";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
         
         
          <Route path="/host" element={<Dashboard />} >

          <Route path="/reviews" element={<Reviews />} />
          <Route path="/income" element={<Income />} />
          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
