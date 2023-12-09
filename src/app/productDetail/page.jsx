"use client"
import '../globals.css';
import AboutProduct from '@/Components/ProductDetailsPage/AboutProduct';
import MapLocation from '@/Components/ProductDetailsPage/MapLocation';
import Reviews from '@/Components/ProductDetailsPage/Reviews';
import Footer from '@/Components/LandingPage/Footer';

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
