import AboutProduct from "./AboutProduct";
import MapLocation from "./MapLocation";
import Reviews from "./Reviews";
import Footer from "../LandingPage/Footer";

function ProductDetailPage() {
  return (
    <>
      <div className="px-4 md:px-6 lg:px-20 xl:px-32">
        <AboutProduct />
        <Reviews />
        <MapLocation />
      </div>
      <Footer calledFrom="productDetail" />
    </>
  );
}

export default ProductDetailPage;
