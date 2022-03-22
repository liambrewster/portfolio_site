
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/layouts/Hero";
import Portfolio from "./components/layouts/Portfolio";
import LatestPosts from "./components/layouts/LatestPosts";
import FeaturedWork from "./components/layouts/FeaturedWork";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <LatestPosts/>
      <FeaturedWork/>
      <Footer/>
    </div>
  );
}

export default App;
