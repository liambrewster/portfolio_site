
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/layouts/Hero";
import LatestPosts from "./components/layouts/LatestPosts";
import FeaturedWork from "./components/layouts/FeaturedWork";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <LatestPosts/>
      <FeaturedWork/>
    </div>
  );
}

export default App;
