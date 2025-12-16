"use client";

import Navigation from "@/components/Navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = ['Design', 'Branding', 'UI/UX', 'Ilustração', 'Motion'];

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, x: -100 },
        { 
          opacity: 1, 
          scale: 1, 
          x: 0, 
          duration: 1.2, 
          delay: 0.3, 
          ease: "power3.out" 
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, x: 60 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          delay: 0.5, 
          ease: "power3.out" 
        }
      );

      // Skills animation with stagger
      gsap.fromTo(
        skillsRef.current?.children || [],
        { opacity: 0, scale: 0, y: 20 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.08, 
          delay: 0.8, 
          ease: "back.out(1.7)" 
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navigation />
      <section className="py-24 px-6 pt-32 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div ref={headerRef}>
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-2">
              Sobre mim
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-black-50 mb-12 tracking-wide">
              About
            </h1>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div 
                ref={imageRef}
                className="aspect-[4/5] bg-gradient-to-br from-black-800 to-black-700 rounded-2xl mb-6 shadow-xl shadow-black-950/50 border border-black-700 overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            <div ref={contentRef} className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif text-black-100 mb-4">Olá, eu sou Graziela</h2>
              <p className="text-black-300 mb-4 leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-black-300 mb-6 leading-relaxed font-light">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="space-y-3">
                <h3 className="font-serif text-xl text-black-100">Habilidades</h3>
                <div ref={skillsRef} className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-black-800 border border-black-600 text-cyan-400 rounded-full text-sm font-medium hover:bg-cyan-400 hover:text-black-950 transition-colors duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
