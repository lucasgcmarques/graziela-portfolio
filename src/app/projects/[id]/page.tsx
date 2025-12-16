"use client";

import Link from 'next/link';
import Navigation from "@/components/Navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const headerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Back link animation
      gsap.fromTo(
        headerRef.current?.querySelector('a'),
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
      );

      // Header animation
      gsap.fromTo(
        headerRef.current?.querySelectorAll('p, h1, .meta') || [],
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          delay: 0.2,
          ease: "power3.out" 
        }
      );

      // Hero image animation
      gsap.fromTo(
        heroImageRef.current,
        { opacity: 0, scale: 0.95, y: 60 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 1, 
          delay: 0.4,
          ease: "power3.out" 
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          delay: 0.6,
          ease: "power3.out" 
        }
      );

      // Gallery with scroll trigger
      const galleryItems = galleryRef.current?.children;
      if (galleryItems) {
        gsap.fromTo(
          galleryItems,
          { opacity: 0, y: 60, scale: 0.95 },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8, 
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navigation />
      <section className="py-24 px-6 pt-32 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div ref={headerRef}>
            <Link
              href="/projects"
              className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 mb-8 transition-colors font-medium group"
            >
              <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
              Voltar para projetos
            </Link>
            <p className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-2">
              Branding
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-black-50 mb-4 tracking-wide">
              Projeto {params.id}
            </h1>
            <div className="meta flex items-center gap-4 text-black-400 mb-12">
              <span>2024</span>
              <span className="w-1 h-1 rounded-full bg-cyan-400" />
              <span>Cliente</span>
            </div>
          </div>
          
          <div 
            ref={heroImageRef}
            className="aspect-video bg-gradient-to-br from-black-800 to-black-700 rounded-2xl mb-12 shadow-xl shadow-black-950/50 border border-black-700 overflow-hidden group"
          >
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-magenta-500/10 group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          <div ref={contentRef} className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-serif text-black-100 mb-4">Sobre o projeto</h2>
              <p className="text-black-300 mb-4 leading-relaxed font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-black-300 leading-relaxed font-light">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
            <div className="bg-black-800/50 rounded-2xl p-6 border border-black-700 h-fit">
              <h3 className="font-serif text-xl text-black-100 mb-4">Detalhes</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-black-400 mb-1">Cliente</dt>
                  <dd className="text-black-200 font-medium">Nome do Cliente</dd>
                </div>
                <div>
                  <dt className="text-black-400 mb-1">Ano</dt>
                  <dd className="text-black-200 font-medium">2024</dd>
                </div>
                <div>
                  <dt className="text-black-400 mb-1">Serviços</dt>
                  <dd className="text-black-200 font-medium">Branding, Design, Estratégia</dd>
                </div>
              </dl>
            </div>
          </div>
          
          <div ref={galleryRef} className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="aspect-square bg-gradient-to-br from-black-800 to-black-700 rounded-2xl shadow-lg shadow-black-950/30 border border-black-700 overflow-hidden group cursor-pointer">
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-transparent group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-black-900 to-cyan-900/20 rounded-2xl shadow-lg shadow-black-950/30 border border-black-700 overflow-hidden group cursor-pointer">
              <div className="w-full h-full bg-gradient-to-br from-magenta-500/10 to-transparent group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
