import React from "react";

export default function LogoScroller() {
  const logos = [
    { name: "USK Corp", url: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783083430/width_550_xjadfc.jpg" },
    { name: "LA Crown", url: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783316903/6235355e-6971-43bb-92cc-5f17028ffc5e_lnkdyw.png" },
    { name: "VS India", url: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783082873/VSINDIA2_t2iuw5.png" },
    { name: "Global Brand", url: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783082877/images_wmiuma.jpg" },
    { name: "WSM", url: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783082876/cropped-WSM-LOGO-1-scaled-1_gzqs9w.webp" },
    { name: "Dew or Dare", url: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783314880/dew-or-dare-logo_1_1_somv9a.avif" },
    { name: "Nut Soul", url: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783321091/artboard_2_copy_720_grmc3v.png" },
    { name: "Aashirwad Hospital", url: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783322791/fa440686-513e-4371-9c95-94c2e1470b54_k4uiyb.png" }
  ];

  // Repeat items exactly twice to fill scroll marquee for a mathematically seamless 50% translation loop
  const marqueeItems = [...logos, ...logos];

  return (
    <div className="space-y-4 select-none">
      <p className="text-[9px] font-bold tracking-widest text-zinc-400 dark:text-zinc-650 uppercase text-center">
        Collaborated with teams at
      </p>
      
      {/* Side Fade Masks */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-[#ffffff] before:to-transparent dark:before:from-[#030303] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-[#ffffff] after:to-transparent dark:after:from-[#030303]">
        <div className="flex w-max gap-24 items-center animate-marquee whitespace-nowrap py-2 hover:[animation-play-state:paused]">
          {marqueeItems.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center cursor-pointer"
            >
              {/* Inner wrapper sized to image so overflow-hidden clips correctly */}
              <div
                className={`inline-flex isolate overflow-hidden opacity-50 hover:opacity-100 transition-all duration-300 ${
                  logo.name === "Aashirwad Hospital" || logo.name === "Nut Soul" ? "" : "rounded-2xl"
                }`}
              >
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="h-14 sm:h-16 w-auto object-contain grayscale dark:brightness-125 hover:grayscale-0 dark:hover:brightness-100 transition-all duration-300 block"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
