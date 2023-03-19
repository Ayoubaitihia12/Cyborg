import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Libary from "./Components/Libary";
import Navbar from "./Components/Navbar";
import Popular from "./Components/Popular";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Popular/>
      <Libary/>
      <Footer/>
    </div>
  );
}

export default App;
