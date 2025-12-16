"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Carousel3DCanvas = dynamic(() => import("./Carousel3DCanvas"), {
  ssr: false,
});

export default function Carousel3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="animate-pulse text-cyan-400">Carregando...</div>
      </div>
    );
  }

  return <Carousel3DCanvas />;
}
