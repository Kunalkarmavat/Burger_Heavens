import React from 'react';
import burgerHero from '../assets/burger-hero.png';

function HeroSection() {
  return (
    <section className="text-center sm:py-12">
      <h2 className=" text-2xl md:text-8xl mt-18 md:mt-0 font-extrabold md:leading-20 leading-6 px-[4rem] sm:max-w-6xl min-w-1xl md:px-[0rem] m-auto mb-[2rem] sm:mb-[0rem]">
        NEW YORK'S FAVORITE ORGANIC HAMBURGER JOINT
      </h2>
      <div className="md:w-[86%] w-[86%] h-[10rem] md:h-[24rem] mx-auto flex items-center justify-center">
        <img src={burgerHero} alt="burger side" />
      </div>
    </section>
  );
}

export default HeroSection;
