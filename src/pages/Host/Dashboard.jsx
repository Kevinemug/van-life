import React from "react";
import { Link, defer } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utilis";
import { BsStarFill } from "react-icons/bs";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

export default function Dashboard() {
  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>
        <BsStarFill className="star" />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        <React.Suspense fallback={<h3>Loading...</h3>}>
          {/* <Await resolve={loaderData}>{renderVanElements}</Await> */}
        </React.Suspense>
      </section>
    </>
  );
}
