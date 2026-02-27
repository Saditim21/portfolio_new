import React from "react";
import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const shouldSplitTitle = title.includes(" ");
  const titleParts = shouldSplitTitle ? title.split(" ") : [title];
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
          }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);
  return (
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-6 xs:gap-8 sm:gap-12 md:gap-16 pt-10 xs:pt-12 sm:pt-16"
        >
          <p
            className={`text-[10px] xs:text-xs sm:text-sm font-light tracking-[0.2rem] xs:tracking-[0.3rem] sm:tracking-[0.5rem] uppercase px-4 xs:px-6 sm:px-8 md:px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-4 xs:px-6 sm:px-8 md:px-10">
            <h1
              className={`flex flex-col gap-4 xs:gap-6 sm:gap-8 uppercase banner-text-responsive md:gap-12 lg:block ${textColor}`}
            >
              {titleParts.map((part, index) => (
                <span key={index}>{part} </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-4 xs:px-6 sm:px-8 md:px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t sm:border-t-2" />
        <div className="py-8 xs:py-10 sm:py-12 md:py-16 text-end">
          <AnimatedTextLines
            text={text}
            className={`font-light uppercase value-text-responsive ${textColor}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
