"use client";

import Carousel3D from "@/components/Carousel3D/Carousel3D";

export default function Home() {
  return (
    <>
      <Carousel3D />
      <div className="absolute inset-0 flex flex-col items-start justify-between px-6 py-8 pointer-events-none z-10">
        <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4 drop-shadow-lg">
          Portfolio
        </p>
        <h1 className="text-7xl md:text-8xl font-serif text-black-50 mb-6 tracking-wide drop-shadow-lg">
          Creative
        </h1>
      </div>
    </>
  );
}
