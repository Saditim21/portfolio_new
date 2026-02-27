import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;
  const aboutText = `For me, code isn’t just about shipping—it’s about responsibility. If someone uses something I built every day, it should be reliable, understandable, and pleasant.

When I’m not building:
⚽ Playing football or training to reset my head
📚 Reading and learning how products, systems, and people work
🧩 Reworking old ideas or interfaces just to make them better
☕ Having long talks about design, tech, and where products go wrong`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-3xl sm:rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Code with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-8 sm:gap-12 md:gap-16 px-4 xs:px-6 sm:px-8 md:px-10 pb-10 sm:pb-16 text-base xs:text-lg sm:text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpg"
          alt="man"
          className="w-full max-w-xs xs:max-w-sm sm:max-w-md rounded-2xl sm:rounded-3xl object-cover aspect-[3/4] lg:aspect-auto lg:w-md flex-shrink-0"
        />
        <AnimatedTextLines text={aboutText} className={"w-full lg:max-w-xl xl:max-w-2xl"} />
      </div>
    </section>
  );
};

export default About;
