import { useOutletContext } from "react-router-dom";

const VansHostPhotos = () => {
    const { currentVan } = useOutletContext()

    return ( <>
        <img src={currentVan.imageUrl} className="host-van-detail-image" />
  </> );
}
 
export default VansHostPhotos;