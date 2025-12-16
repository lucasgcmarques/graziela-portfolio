"use client";

import Navigation from "@/components/Navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const showcaseItems = [
  { id: 1, title: 'Work 1', category: 'Photography' },
  { id: 2, title: 'Work 2', category: 'Design' },
  { id: 3, title: 'Work 3', category: 'Illustration' },
  { id: 4, title: 'Work 4', category: 'Branding' },
  { id: 5, title: 'Work 5', category: 'Photography' },
  { id: 6, title: 'Work 6', category: 'Design' },
  { id: 7, title: 'Work 7', category: 'Motion' },
  { id: 8, title: 'Work 8', category: 'Illustration' },
];

const gradients = [
  'from-black-800 to-black-700',
  'from-black-900 to-black-800',
  'from-cyan-900/30 to-black-800',
  'from-black-700 to-magenta-900/20',
  'from-black-800 to-cyan-900/30',
  'from-magenta-900/20 to-black-900',
];

export default function Showcase() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current?.children || [],
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.15, 
          ease: "power3.out" 
        }
      );

      // Masonry items with scroll trigger
      const items = gridRef.current?.children;
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 100, scale: 0.9 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8, 
            stagger: 0.08, 
            delay: 0.2,
            ease: "power3.out" 
          }
        );

        // Add hover animations
        Array.from(items).forEach((item) => {
          const card = item as HTMLElement;
          
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.03,
              duration: 0.4,
              ease: "power2.out"
            });
          });
          
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              duration: 0.4,
              ease: "power2.out"
            });
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navigation />
      <section className="py-24 px-6 pt-32 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div ref={headerRef}>
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-2">
              Galeria
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-black-50 mb-4 tracking-wide">
              Showcase
            </h1>
            <p className="text-xl text-black-300 mb-12 max-w-2xl font-light">
              Uma galeria visual dos meus trabalhos e experimentações criativas.
            </p>
          </div>
          <div ref={gridRef} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {showcaseItems.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid group cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-br ${gradients[index % gradients.length]} rounded-2xl overflow-hidden shadow-lg shadow-black-950/40 border border-black-700 relative ${
                    index % 3 === 0
                      ? 'aspect-[3/4]'
                      : index % 3 === 1
                      ? 'aspect-square'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  
                  {/* Overlay content on hover */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div>
                      <h3 className="font-serif text-xl text-white mb-1">{item.title}</h3>
                      <p className="text-cyan-400 text-sm font-medium">{item.category}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 md:hidden">
                  <h3 className="font-serif text-lg text-black-100 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-sm text-cyan-400 font-medium">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
