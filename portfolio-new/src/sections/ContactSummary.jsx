import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ContactSummary = () => {
  const textRef = useRef(null);
  const items = [
    "Innovation",
    "Precision",
    "Trust",
    "Collaboration",
    "Excellence",
  ];
  const items2 = ["contact me", "contact me", "contact me", "contact me"];

  useGSAP(() => {
    // Simple fade-in animation for the text
    gsap.from(textRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[80svh] sm:min-h-[90svh] gap-8 sm:gap-12 md:gap-16 py-12 sm:py-16 md:py-20">
      <Marquee items={items} speed={25} />
      <div
        ref={textRef}
        className="overflow-hidden font-light text-center contact-text-responsive px-4 xs:px-6 sm:px-8 md:px-10 py-8 sm:py-12"
      >
        <p className="leading-snug">
          " Let's build a <br />
          <span className="font-normal">memorable</span> &{" "}
          <span className="italic">inspiring</span> <br />
          web application <span className="text-gold">together</span> "
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        speed={20}
        className="text-black bg-transparent border-y sm:border-y-2"
        iconClassName="stroke-gold stroke-2 text-primary"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
