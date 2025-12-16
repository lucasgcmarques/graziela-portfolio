"use client";

import Navigation from "@/components/Navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const socials = ['Instagram', 'LinkedIn', 'Behance', 'Dribbble'];

export default function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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

      // Form animation - slide in from left
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -100 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          delay: 0.3,
          ease: "power3.out" 
        }
      );

      // Form fields stagger
      const formFields = formRef.current?.querySelectorAll('input, textarea, button');
      gsap.fromTo(
        formFields || [],
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          delay: 0.5,
          ease: "power3.out" 
        }
      );

      // Info section - slide in from right
      gsap.fromTo(
        infoRef.current?.children || [],
        { opacity: 0, x: 60 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          stagger: 0.15, 
          delay: 0.4,
          ease: "power3.out" 
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
              Fale comigo
            </p>
            <h1 className="text-5xl md:text-6xl font-serif text-black-50 mb-4 tracking-wide">
              Contact
            </h1>
            <p className="text-xl text-black-300 mb-12 max-w-2xl font-light">
              Vamos conversar sobre seu próximo projeto? Entre em contato através do formulário ou redes sociais.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div 
              ref={formRef}
              className="bg-black-900/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-black-950/30 border border-black-700"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-black-200">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-black-800/50 rounded-xl border border-black-600 text-black-50 placeholder:text-black-500 transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-black-200">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-black-800/50 rounded-xl border border-black-600 text-black-50 placeholder:text-black-500 transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-black-200">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-black-800/50 rounded-xl border border-black-600 text-black-50 placeholder:text-black-500 transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none resize-none"
                    placeholder="Conte sobre seu projeto..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-cyan-400 text-black-950 rounded-xl font-medium hover:bg-cyan-300 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
            <div ref={infoRef} className="flex flex-col justify-center">
              <div className="space-y-8">
                <div className="group">
                  <h3 className="font-serif text-xl text-black-100 mb-2 group-hover:text-cyan-400 transition-colors">Email</h3>
                  <a
                    href="mailto:contato@graziela.com"
                    className="text-black-300 hover:text-cyan-400 transition-colors font-light"
                  >
                    contato@graziela.com
                  </a>
                </div>
                <div className="group">
                  <h3 className="font-serif text-xl text-black-100 mb-2 group-hover:text-cyan-400 transition-colors">Localização</h3>
                  <p className="text-black-300 font-light">
                    São Paulo, Brasil
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-black-100 mb-3">Redes Sociais</h3>
                  <div className="flex flex-wrap gap-3">
                    {socials.map((social, index) => (
                      <a
                        key={social}
                        href="#"
                        className="px-4 py-2 bg-black-800 border border-black-600 text-cyan-400 rounded-full text-sm font-medium hover:bg-cyan-400 hover:text-black-950 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
