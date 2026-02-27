import { Icon } from "@iconify/react/dist/iconify.js";

const Marquee = ({
  items,
  className = "text-white bg-black",
  icon = "mdi:star-four-points",
  iconClassName = "",
  reverse = false,
  speed = 30,
}) => {
  // Duplicate items for seamless loop
  const allItems = [...items, ...items];

  return (
    <div
      className={`overflow-hidden w-full h-12 xs:h-14 sm:h-16 md:h-20 lg:h-[100px] flex items-center marquee-text-responsive font-light uppercase ${className}`}
    >
      <div
        className={`flex shrink-0 gap-4 xs:gap-6 sm:gap-8 md:gap-12 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {allItems.map((text, index) => (
          <span
            key={index}
            className="flex items-center shrink-0 gap-4 xs:gap-6 sm:gap-8 md:gap-12"
          >
            <span className="whitespace-nowrap">{text}</span>
            <Icon icon={icon} className={`shrink-0 ${iconClassName}`} />
          </span>
        ))}
      </div>
      <div
        className={`flex shrink-0 gap-4 xs:gap-6 sm:gap-8 md:gap-12 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {allItems.map((text, index) => (
          <span
            key={`dup-${index}`}
            className="flex items-center shrink-0 gap-4 xs:gap-6 sm:gap-8 md:gap-12"
          >
            <span className="whitespace-nowrap">{text}</span>
            <Icon icon={icon} className={`shrink-0 ${iconClassName}`} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
