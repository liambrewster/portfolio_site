
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/layouts/Hero";
import Portfolio from "./components/layouts/Portfolio";
import LatestPosts from "./components/layouts/LatestPosts";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <LatestPosts/>
      <Footer/>
    </div>
  );
}

export default App;
