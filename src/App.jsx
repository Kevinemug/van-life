import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./server";
import Vans from "./pages/Host/Vans";
// import { HashRouter } from "react-router-dom";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import HostLayoutComponet from "./pages/Host/HostLayoutComponent";
function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route>
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          </Route>
         
         
          <Route path="host" element={<HostLayoutComponet />} >

          <Route index element={<Dashboard />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<Vans/>} />
          <Route path="income" element={<Income />} />
          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
