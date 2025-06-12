import React from "react";
import "./App.css";
import burgerHero from './assets/burger-hero.png';
<style>

</style>

export const colors = {
  bgDark: "#1E1E1E",
  textLight: "#E9E3DC",
  accentPurple: "#B3A0CD",
  highlightYellow: "#D1EF53",
};

function App() {
  return (
    <div style={{backgroundColor: colors.bgDark }} className=" text-white bg-gray-80 font-sans " >
      {/* Navbar */}
      <nav className="flex sm:px-12  sm:pt-6 justify-between items-center ">
        <h1  className="  font-light text-lg ml-8 sm:text-2xl">BURGER HEAVEN</h1>
        <ul className="flex items-center space-x-12 text-sm mr-4">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><button style={{background:colors.accentPurple}} className="bg-purple-200 text-black sm:px-12 sm:py-4">ORDER ONLINE</button></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center sm:py-12 ">
        <h2 className="text-4xl md:text-8xl font-extrabold leading-20 max-w-6xl m-auto">
          NEW YORK'S FAVORITE ORGANIC HAMBURGER JOINT
        </h2>
        {/* Placeholder for hero image */}
        <div className="w-[86%]  h-[24rem]  mx-auto flex items-center justify-center">
          <img src={burgerHero} alt="burger side" />

        </div>
      </section>

   {/* About Burger Section */}
<section className="bg-lime-300 text-black flex flex-col md:flex-row items-start justify-center sm:p-20 sm:mx-12 rounded-3xl">
  <div className="w-4xl">
    <h3 className="text-3xl sm:text-7xl  ">
      THE BURGER ABOVE ALL BURGERS
    </h3>
  </div>
  <div className="w-4xl">
    <p className="mb-12 text-2xl">
      Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Aenean nec ornare neque.
    </p>
  
  <button style={{backgroundColor:colors.textLight,fontFamily:"Bowlby One" }} className=" about border-3 border-black px-12 shadow-black   py-4 font-bold text-black">
      ABOUT US
    </button>
  </div>
</section>



      {/* Menu Highlights */}
      <section className="grid md:grid-cols-2 gap-4 py-8">
        <div className="bg-white text-black rounded mx-4 md:mx-0">
          <img src="https://via.placeholder.com/400x300.png?text=Fries" alt="fries" className="rounded-t" />
          <div className="p-4">
            <h4 className="font-bold">SALT & VINEGAR FRENCH FRIES</h4>
            <button className="text-purple-600 text-sm font-bold">ORDER ONLINE</button>
          </div>
        </div>
        <div className="bg-white text-black rounded mx-4 md:mx-0">
          <img src="https://via.placeholder.com/400x300.png?text=Chicken+Sandwich" alt="chicken sandwich" className="rounded-t" />
          <div className="p-4">
            <h4 className="font-bold">CRISPY CHICKEN SANDWICH</h4>
            <button className="text-purple-600 text-sm font-bold">ORDER ONLINE</button>
          </div>
        </div>
      </section>

      {/* Testimonial Banner */}
      <div className="bg-lime-300 text-black text-center text-3xl font-extrabold py-6">
        THE BEST BURGER I'VE EVER HAD
      </div>

      {/* Visit Section */}
      <section className="py-8 text-center">
        <img src="https://via.placeholder.com/800x400.png?text=Diner+Scene" alt="people eating" className="rounded mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-2">ORDER ONLINE OR COME VISIT US TODAY</h3>
        <button className="bg-lime-300 text-black font-bold px-6 py-2 mt-2">GET STARTED</button>
      </section>

      {/* Footer */}
      <footer className="bg-purple-300 text-black py-8 mt-8">
        <div className="flex flex-col md:flex-row justify-between px-4 md:px-8">
          <div>
            <h4 className="font-bold">BURGER HEAVEN</h4>
            <small>Copyright Burger Heaven</small>
          </div>
          <div>
            <h5 className="">MORE</h5>
            <ul className="text-sm">
              <li>About</li>
              <li>Menu</li>
              <li>Locations</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold">HOURS</h5>
            <p className="text-sm">Open from 11AM to 11PM daily</p>
          </div>
          <div>
            <h5 className="font-bold">JOIN OUR NEWSLETTER</h5>
            <div className="flex">
              <input className="p-1 border border-black mr-2" type="text" placeholder="Your email" />
              <button className="bg-black text-white px-4 py-1">SUBMIT</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
