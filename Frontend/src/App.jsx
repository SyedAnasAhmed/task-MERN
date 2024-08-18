import "./App.css";
import { HeroCarousel } from "./Components/Carousel";
import Header from "./Components/Header";
import Hero2 from "./Components/Hero2Section";
import Navbar from "./Components/Navbar";
import SmallCarousel from "./Components/SmallCarousel";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div class={`h-56 mx-auto flex justify-center`}>
        <div className="w-[61%]" >
          <HeroCarousel />
        </div>
        <div className="flex ">
          <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2cfab4db-f253-4160-b0ea-ed441c31ef30.png?format=avif" alt="" />
          <img src="https://f.nooncdn.com/mpcms/EN0001/assets/8315c971-9d6c-4e3a-96d5-f846f2f4cebb.png?format=avif" alt="" />
        </div>
      </div>
      <SmallCarousel />
      <Hero2/>
    </>
  );
}

export default App;
