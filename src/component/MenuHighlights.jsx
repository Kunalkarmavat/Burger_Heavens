import React from 'react';
import { colors } from '../App';
import fries from '../assets/Fries.png'; // ✅ Import the image directly
import burger from '../assets/burger.png'; // ✅ Import the image directly

function MenuHighlights() {
  return (
    <section className=" mx-[2rem] sm:mx-[6rem] grid grid-cols-1 sm:grid-cols-2 gap-8 ">
      {/* First Item */}
      <div
        className="h-[23rem]  sm:h-[44rem] pl-8 pb-8 rounded-2xl border-4 flex items-end "
        style={{
          backgroundImage: `url(${fries})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ backgroundColor: colors.bgDark }} className="p-8 rounded-2xl ">
          <h4 className="sm:w-2xs  sm:text-2xl font-bold">
            CRISPY CHICKEN <br /> SANDWICH
          </h4>
          <button style={{ color: colors.accentPurple }} className="text-[1.1rem] font-extrabold">
            ORDER ONLINE
          </button>
        </div>
      </div>

      {/* Second Item */}
      <div
        className="h-[23rem]  sm:h-[44rem] pl-8 pb-8  rounded-2xl border-4 flex items-end"
        style={{
          backgroundImage: `url(${burger})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div style={{ backgroundColor: colors.bgDark }} className="p-8 rounded-2xl">
          <h4 className="sm:w-2xs sm:text-2xl font-bold">
            CRISPY CHICKEN <br /> SANDWICH
          </h4>
          <button style={{ color: colors.accentPurple }} className="text-[1.1rem] font-extrabold">
            ORDER ONLINE
          </button>
        </div>
      </div>
    </section>
  );
}

export default MenuHighlights;
