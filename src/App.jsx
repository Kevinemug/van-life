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
import HostLayoutComponet from "./pages/Host/HostLayoutComponent";
import VansHost from "./pages/Host/VansHost";
import VansHostDetail from "./pages/Host/VansHostDetail";
import VansHostInfo from './pages/Host/VansHostInfo';
import VansHostPhotos from './pages/Host/VansHostPhotos';
import VansHostPricing from './pages/Host/VansHostPricing';
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
          <Route path="vans" element={<VansHost/>} />
          <Route path="vans/:id" element={<VansHostDetail/>} >
            <Route index element={<VansHostInfo/>}/>
            <Route path="pricing" element={<VansHostPricing/>}/>
            <Route path="photos" element={<VansHostPhotos/>}/>
          </Route>
          <Route path="income" element={<Income />} />
          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
