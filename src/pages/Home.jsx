import React from "react";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import MenuHighlights from "../component/MenuHighlights";
import { colors } from "../App";
import "../App.css";
import HorizontalScrollText from "../component/HorizontalText";
import Restaurant from '../assets/Restaurant.png'; // ✅ Import the image directly
import HorizontalText from "../component/HorizontalText";
import RightScribble from "../assets/RightScribble.png"
import LeftScribble from "../assets/LeftScribble.png"


function Home() {
  return (
    <div
      style={{ backgroundColor: colors.bgDark }}
      className="text-white bg-gray-80 font-sans pb-[4rem]"
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Horizontal Scroll Text */}
      {/* <HorizontalScrollText /> */}

      {/* About Burger Section */}
      <section  className="flex flex-col sm:flex-row mx-[2rem] sm:mx-[6rem] p-[4rem] mb-[4rem] bg-[#D1EF53] text-black rounded-2xl">
        <div className="mb-[2rem]">
          <h3 className="text-2xl sm:mr-[4rem]  sm:text-7xl">
            THE BURGER <br/> ABOVE ALL<br/> BURGERS
          </h3>
        </div>
        <div className="">
          <p className="mb-[2rem] text-[rem] sm:text-1xl">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Aenean nec ornare neque.
          </p>

          <button
            style={{ backgroundColor: colors.textLight, fontFamily: "Bowlby One" }}
            className="about border-3 border-black px-12 shadow-black py-4 font-bold text-black"
          >
            ABOUT US
          </button>
        </div>
      </section>

        <MenuHighlights />
      

      {/* Testimonial Banner
      <div className=" mx-[2rem] sm:mx-[6rem] mb-[4rem] p-[4rem] bg-lime-300 text-black text-center text-3xl font-extrabold ">
        THE BEST BURGER I'VE EVER HAD
      </div> */}

      <HorizontalText/>

      {/* Visit Section */}
      <section className=" mx-[2rem] sm:mx-[6rem]  mb-[0rem] sm:mb-[4rem]  rounded-2xl   text-center space-y-[4rem] sm:space-y-[12rem] ">
        <div
          style={{
          backgroundImage: `url(${Restaurant})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}

          className="bg-white bg-cover rounded-4xl border-2 flex items-end h-[12rem] sm:h-[28rem] bg-[url(../assets/Restaurant.png)]"
        >

        </div>


        <div className="relative">
     
     <img  className=" h-[14rem] sm:h-[20rem] absolute top-[-12rem] left-[-6rem]"  src={RightScribble} alt="burger side" />

     </div>
      <div className=" mb-[8rem]">
      <h3 className="text-3xl sm:text-6xl m-auto font-bold mb-[2rem]">
          ORDER ONLINE OR <br/> COME VISIT US TODAY
        </h3>
        <button className="bg-[#D1EF53] text-black font-bold px-[6rem] py-[1rem] mt-2">
          GET STARTED
        </button>

      </div>

      <div className="relative">
     
      <img  className=" h-[14rem] sm:h-[20rem] absolute bottom-[-4rem] right-[-2rem]"  src={LeftScribble} alt="burger side" />

      </div>


      </section>

      {/* Footer */}
      <footer className= "bg-purple-300 text-black mx-[2rem] sm:mx-[6rem]  px-6 sm:px-[88px] pb-8 pt-12  rounded-2xl">
  <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between mb-8">
    
    {/* Logo Section */}
    <div>
      <h4 className="font-bold text-2xl">BURGER <br /> HEAVEN</h4>
    </div>

    {/* More Links */}
    <div>
      <h5 className="font-semibold mb-2">MORE</h5>
      <ul className="text-sm space-y-2.5">
        <li>About</li>
        <li>Menu</li>
        <li>Locations</li>
        <li>Privacy</li>
      </ul>
    </div>

    {/* Hours */}
    <div>
      <h5 className="font-semibold mb-2">HOURS</h5>
      <p className="text-sm">Open from 11AM to 11PM daily</p>
    </div>

    {/* Newsletter */}
    <div className="w-full md:w-auto">
      <h5 className="font-semibold mb-2">JOIN OUR NEWSLETTER</h5>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <input
          className="p-2 border border-black w-full sm:w-auto"
          type="text"
          placeholder="Your email"
        />
        <button className="bg-black text-white px-4 py-2 w-full sm:w-auto">SUBMIT</button>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="flex flex-col sm:flex-row justify-between items-center text-sm font-semibold gap-2">
    <small>&copy; {new Date().getFullYear()} Burger Heaven</small>
    <small>Privacy Public</small>
  </div>
</footer>

    </div>
  );
}

export default Home;
