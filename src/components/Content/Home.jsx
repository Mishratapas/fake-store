import Navbar from "../Header/Navbar";
import bg1 from "../../images/bg1.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="card bg-dark text-white border-0">
        <img src={bg1} className="card-img" alt="" height="710px" />
        <div className="card-img-overlay">
          <div className="container mt-5">
            <h5 className="card-title display-3 fw-bold mb-0 text-white">
              NEW ARRIVALS
            </h5>
            <p className="card-text fs-2">CHECK OUT FAST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
