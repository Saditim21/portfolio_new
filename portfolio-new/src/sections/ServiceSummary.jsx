import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  useGSAP(() => {
    // Disable parallax on mobile for better readability
    if (isMobile) return;

    const multiplier = isTablet ? 0.5 : 1;

    gsap.to("#title-service-1", {
      xPercent: 15 * multiplier,
      scrollTrigger: {
        trigger: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -20 * multiplier,
      scrollTrigger: {
        trigger: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 25 * multiplier,
      scrollTrigger: {
        trigger: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -15 * multiplier,
      scrollTrigger: {
        trigger: "#title-service-4",
        scrub: true,
      },
    });
  }, [isMobile, isTablet]);

  return (
    <section className="mt-12 sm:mt-16 md:mt-20 overflow-hidden font-light text-center mb-16 sm:mb-24 md:mb-32 lg:mb-42 py-8 sm:py-12">
      {/* Mobile Layout - Simple stacked list */}
      <div className="sm:hidden flex flex-col gap-3 text-[28px] xs:text-[32px] leading-tight px-4">
        <p>Architecture</p>
        <div className="flex items-center justify-center gap-3">
          <p className="font-normal">Development</p>
          <div className="w-8 h-0.5 bg-gold" />
          <p>Deployment</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p>APIs</p>
          <div className="w-8 h-0.5 bg-gold" />
          <p className="italic">Frontends</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <p>Scalability</p>
          <div className="w-8 h-0.5 bg-gold" />
          <p>Databases</p>
        </div>
      </div>

      {/* Tablet & Desktop Layout - Parallax effect */}
      <div className="hidden sm:block text-[42px] md:text-[56px] lg:text-[72px] xl:text-[90px] leading-tight">
        <div id="title-service-1">
          <p>Architecture</p>
        </div>
        <div
          id="title-service-2"
          className="flex items-center justify-center gap-3 md:gap-4"
        >
          <p className="font-normal">Development</p>
          <div className="w-12 md:w-20 lg:w-28 h-0.5 md:h-1 bg-gold flex-shrink-0" />
          <p>Deployment</p>
        </div>
        <div
          id="title-service-3"
          className="flex items-center justify-center gap-3 md:gap-4"
        >
          <p>APIs</p>
          <div className="w-12 md:w-20 lg:w-28 h-0.5 md:h-1 bg-gold flex-shrink-0" />
          <p className="italic">Frontends</p>
          <div className="w-12 md:w-20 lg:w-28 h-0.5 md:h-1 bg-gold flex-shrink-0" />
          <p>Scalability</p>
        </div>
        <div id="title-service-4">
          <p>Databases</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSummary;
