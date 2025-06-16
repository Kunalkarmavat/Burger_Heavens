import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollText = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    const isMobile = window.innerWidth < 768;
    const scrollLength = isMobile
      ? text.scrollWidth * 0.5 // scroll only 50% on mobile
      : text.scrollWidth;      // full scroll on desktop

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${scrollLength}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(text, {
      x: () => `-${text.scrollWidth - window.innerWidth}`,
      ease: "none",
    });

    return () => {
      ScrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-[6rem] w-full pt-[22rem] pb-[12rem] overflow-hidden flex items-center "
    >
      <div
        ref={textRef}
        className=" absolute bowlby-one-regular whitespace-nowrap text-[#E9E3DC] text-[12rem] font-bold min-w-max  px-[2rem]"
      >
        THE BEST BURGER I'VE EVER HAD 🍔 &nbsp;
      </div>
    </section>
  );
};

export default HorizontalScrollText;
