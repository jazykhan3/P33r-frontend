import Hero from "../Hero";
import ExploreCategories from "./ExploreCategories";
import Listings from "./Listings";
import About from "./About";
import Works from "./Works";
import Review from "./Review";
import Questions from "./Questions";
import Footer from "./Footer";

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
