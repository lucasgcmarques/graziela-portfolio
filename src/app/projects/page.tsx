"use client";

import Link from 'next/link';
import Navigation from "@/components/Navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: 'Projeto 1', category: 'Branding', year: '2024' },
  { id: 2, title: 'Projeto 2', category: 'UI/UX', year: '2024' },
  { id: 3, title: 'Projeto 3', category: 'Ilustração', year: '2023' },
  { id: 4, title: 'Projeto 4', category: 'Motion', year: '2023' },
  { id: 5, title: 'Projeto 5', category: 'Branding', year: '2023' },
  { id: 6, title: 'Projeto 6', category: 'Design', year: '2022' },
];

export default function Projects() {
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

      // Grid items stagger animation
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 80, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8, 
          stagger: 0.1, 
          delay: 0.3,
          ease: "power3.out" 
        }
      );

      // Hover animations for each card
      const cards = gridRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card) => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            });
          });
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              duration: 0.3,
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
              Meu trabalho
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-black-50 mb-4 tracking-wide">
              Projects
            </h1>
            <p className="text-xl text-black-300 mb-12 max-w-2xl font-light">
              Uma seleção dos meus trabalhos mais recentes em design, branding e direção criativa.
            </p>
          </div>
          <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block"
              >
                <div className={`aspect-[4/3] rounded-2xl mb-4 overflow-hidden shadow-lg shadow-black-950/50 border border-black-700 relative ${
                  index % 3 === 0 
                    ? 'bg-gradient-to-br from-black-800 to-black-700' 
                    : index % 3 === 1 
                    ? 'bg-gradient-to-br from-black-900 to-black-800'
                    : 'bg-gradient-to-br from-cyan-900/30 to-black-800'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-full h-full group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-black-100 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-black-400 group-hover:text-black-300 transition-colors">{project.year}</span>
                </div>
                <p className="text-sm text-cyan-400 font-medium">
                  {project.category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
