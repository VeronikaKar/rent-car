import { Link } from "react-router-dom";
import backgroundImage from "../../components/images/background/pexels-pixabay-164634.webp";

const HomePage = () => {
  return (
    <div
      className="hero min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-white text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            <span className="text-blue-500">Discover</span> the{" "}
            <span className="text-blue-500">Ultimate</span> Car Rental
            Experience
          </h1>
          <p className="mb-5 text-red-500">
            Looking for the best car rental deals? Look no further! Our service
            provides you with the ultimate car rental experience. Choose from a
            wide range of vehicles, enjoy affordable rates, and drive with
            confidence. Whether you need a car for a business trip or a family
            vacation, we have the perfect solution for you.
          </p>
          <h2 className="mb-5 text-3xl font-bold">
            Why Choose Our Car Rental Service?
          </h2>
          <p className="mb-5 text-red-500">
            - Wide selection of vehicles
            <br />
            - Competitive pricing
            <br />
            - Excellent customer service
            <br />- Convenient pick-up and drop-off locations
          </p>
          <Link to="/catalog" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
