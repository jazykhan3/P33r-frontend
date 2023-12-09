"use client"
import './globals.css';
import Hero from '@/Components/Hero';
import ExploreCategories from '@/Components/LandingPage/ExploreCategories';
import Listings from '@/Components/LandingPage/Listings';
import About from '@/Components/LandingPage/About';
import Works from '@/Components/LandingPage/Works';
import Review from '@/Components/LandingPage/Review';
import Questions from '@/Components/LandingPage/Questions';
import Footer from '@/Components/LandingPage/Footer';

function LandingPage() {
  return (
    <>
      <Hero />
      <ExploreCategories />
      <Listings />
      <About />
      <Works />
      <Review />
      <Questions />
      <Footer calledFrom="landingPage" />
    </>
  );
}

export default LandingPage;