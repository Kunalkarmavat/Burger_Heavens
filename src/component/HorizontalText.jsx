import { useEffect, useRef } from "react";
import gsap from "gsap";

const HorizontalText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textWidth = textRef.current.offsetWidth;
    const containerWidth = textRef.current.parentElement.offsetWidth;

    gsap.fromTo(
      textRef.current,
      { x: -textWidth },
      {
        x: containerWidth,
        duration: 14,
        ease: "linear",
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="relative w-full overflow-hidden mb-[2rem] sm:mb-[4rem]  py-[2rem] sm:py-[8rem] text-center text-3xl font-extrabold">
      <h3
        ref={textRef}
        className="whitespace-nowrap text-[#D1EF53] text-2xl sm:text-8xl absolute left-0"
      >
 🍔 Taste. Sizzle. Repeat. | Burger Bliss Starts Here! 🥪
      </h3>
    </div>
  );
};

export default HorizontalText;
