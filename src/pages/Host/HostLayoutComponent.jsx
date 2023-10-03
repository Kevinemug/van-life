import { Outlet,Link} from "react-router-dom";
const HostLayoutComponet = () => {
    return (  
        <>
<nav>
<Link to="/host">Dashboard</Link>
<Link to="/host/income">Income</Link>
<Link to="/host/reviews">Reviews</Link>
</nav>
        <Outlet/>
        
        </>
    );
}
 
export default HostLayoutComponet;