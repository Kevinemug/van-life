import {  Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./server";
import Vans,{loader as vansLoader} from "./pages/Vans/Vans";
import NotFound from "./pages/NotFound";
import VanDetail,{loader as vanDetailLoader} from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import HostLayoutComponet from "./pages/Host/HostLayoutComponent";
import VansHost,{loader as vansHostLoader} from "./pages/Host/VansHost";
import VansHostDetail,{loader as vansHostDetailLoader } from "./pages/Host/VansHostDetail";
import VansHostInfo from './pages/Host/VansHostInfo';
import VansHostPhotos from './pages/Host/VansHostPhotos';
import VansHostPricing from './pages/Host/VansHostPricing';
import Error from "./components/error";
import Login,{loader as loginLoader,action as loginAction} from './pages/Login';
import { requireAuth } from "./utilis";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"  element={<Layout />}>

    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route 
    path ="login"
     element={<Login />}
     loader={loginLoader}
     action ={loginAction}
      />
    <Route>
    <Route 
    path="vans" 
    element={<Vans />}
    errorElement ={<Error/>}
     loader={vansLoader} 

     />
    <Route 
    path="vans/:id" 
    element={<VanDetail />} 
    errorElement ={<Error/>}
    loader={vanDetailLoader }
    />

    </Route>
    <Route path="host" element={<HostLayoutComponet />} >

    <Route
     index 
     element={<Dashboard />}
      loader ={async ({request}) => await requireAuth(request)}
      />
    <Route 
    path="reviews" 
    element={<Reviews />}
loader ={async ({request}) => await requireAuth(request)}
     />
    <Route 
    path="income" 
    element={<Income />}
loader ={async ({request}) => await requireAuth(request)}
     />

    <Route
     path="vans"
      element={<VansHost/>}
      errorElement ={<Error/>}
       loader ={vansHostLoader} />
    <Route 
    path="vans/:id" 
    element={<VansHostDetail/>}
    errorElement ={<Error/>}
     loader ={vansHostDetailLoader} >
      <Route 
      index
       element={<VansHostInfo/>}
       loader ={async ({request}) => await requireAuth(request)}

       />
      <Route 
      path="pricing"
       element={<VansHostPricing/>}
       loader ={async ({request}) => await requireAuth(request)}

        />

      <Route
       path="photos" 
      element={<VansHostPhotos/>}
      loader ={async ({request}) => await requireAuth(request)}

      />
    </Route>
    </Route>
    <Route path="*" element={<NotFound />} />

  </Route>

  ))
  return (
    <>
    <RouterProvider router ={router}/>
    </>
  );
}

export default App;
