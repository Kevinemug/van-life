import { Outlet } from "react-router-dom"
import Header from './header';
import Footer from "./Footer";

export default function Layout(){

return(
    <>
   <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    </>
)


}