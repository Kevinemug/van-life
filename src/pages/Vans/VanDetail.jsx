
import { useLoaderData ,Link} from "react-router-dom"
import { getVans } from "../../api"
export function loader({params}){
    return getVans(params.id)
}
export default function VanDetail(){
    const van = useLoaderData()

return(
    <>
     <section>
         <Link
                    to=".."
                    relative="path"
                    className="back-button"
                >&larr; <span>Back to all vans</span></Link>
          <div className="van-detail-container">
         
                    <div className="van-detail">
                        <img src={van.imageUrl} />
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
            </div>
     </section>
          </>
)


}