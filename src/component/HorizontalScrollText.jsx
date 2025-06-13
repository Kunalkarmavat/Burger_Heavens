import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css"

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollText = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${text.scrollWidth}`, // dynamically adjust to text width
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(text, {
      x: () => `-${text.scrollWidth - window.innerWidth}px`,
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
      className="relative w-full h-[22rm] md:h-screen overflow-hidden flex items-center"
    >
      <div
        ref={textRef}

        className="bowlby-one-regular whitespace-nowrap text-white text-4xl md:text-[12rem] font-bold ml-[10rem] "
      >
       THE  BEST BURGER I'VE EVER HAD 🍔 &nbsp;&nbsp;
      </div>
    </section>
  );
};

export default HorizontalScrollText;
