
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/layouts/Hero";
import LatestPosts from "./components/layouts/LatestPosts";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <LatestPosts/>
    </div>
  );
}

export default App;
