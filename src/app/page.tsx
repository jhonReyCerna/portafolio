"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Git & GitHub",
];

function SnakeCarousel() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current as HTMLDivElement | null;
    if (!track) return;
    let animationFrame: number;
    let scrollLeft = 0;
    const speed = 1.2;
    function animate() {
      scrollLeft += speed;
      if (track && scrollLeft >= track.scrollWidth / 2) scrollLeft = 0;
      if (track) track.scrollLeft = scrollLeft;
      animationFrame = window.requestAnimationFrame(animate);
    }
    animate();
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  // Duplicar el array para efecto infinito
  const items = [...skills, ...skills];
  return (
    <div
      ref={trackRef}
      className="flex gap-4 min-w-max py-2 px-2"
      style={{width: '100%', overflow: 'hidden', scrollBehavior: 'auto'}}
    >
      {items.map((skill, idx) => (
        <span
          key={idx}
          className="bg-blue-900/60 text-blue-200 rounded-full px-6 py-3 text-base font-semibold whitespace-nowrap shadow hover:scale-105 transition-transform duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#18181B] flex flex-col font-sans overflow-hidden text-white">
      {/* Menú de navegación superior elegante */}
      <nav className="w-full bg-[#23232A] shadow-lg fixed top-0 left-0 z-30 border-b border-[#23232A]">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-4">
          <span className="text-lg font-bold tracking-tight">Portafolio</span>
          <ul className="flex gap-8 text-gray-300 font-medium text-base">
            <li><a href="#" className="hover:text-white transition">Inicio</a></li>
            <li><a href="#" className="hover:text-white transition">Proyectos</a></li>
            <li><a href="#" className="hover:text-white transition">Sobre mí</a></li>
            <li><a href="#" className="hover:text-white transition">Contacto</a></li>
          </ul>
        </div>
      </nav>
      <div className="h-16" />
      {/* Portada / Hero principal */}
      <main className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto w-full gap-10 py-12 px-4">
        {/* Información y botones a la izquierda */}
        <section className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight">Desarrollador web full stack</h1>
          <span className="text-2xl text-blue-400 font-semibold mb-3">Apasionado por la tecnología y la innovación.</span>
          <p className="text-lg text-gray-300 mb-4 max-w-md">
            Más de 2 años de experiencia creando soluciones digitales modernas y escalables.<br />
            Comprometido con la excelencia y el crecimiento profesional.<br />
            Ubicación: Trujillo, Perú
          </p>
          <div className="flex gap-4 mb-4 justify-center md:justify-start">
            <a href="mailto:tuemail@ejemplo.com" className="bg-blue-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition">Contáctame</a>
            <a href="/cv.pdf" download className="bg-white text-blue-600 font-bold px-8 py-4 rounded-full shadow-lg border-2 border-blue-600 hover:bg-blue-50 transition">Descargar CV</a>
          </div>
          <div className="flex gap-4 mt-1 justify-center md:justify-start">
            <a href="https://linkedin.com" target="_blank" rel="noopener" className="bg-blue-500 text-white rounded-full p-3 shadow hover:bg-blue-700 transition" title="LinkedIn">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"/></svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener" className="bg-gray-800 text-white rounded-full p-3 shadow hover:bg-gray-900 transition" title="GitHub">
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.585 8.199-6.082 8.199-11.385 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </section>
        {/* Imagen profesional y nombre a la derecha */}
        <section className="flex-1 flex flex-col items-center justify-center mb-6">
          <div className="relative flex items-center justify-center group">
            {/* Halo animado profesional */}
            <span className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-blue-600 via-purple-500 to-blue-300 animate-pulse shadow-2xl" style={{filter: 'blur(12px)', opacity: 0.7}}></span>
            {/* Fondo circular blanco con sombra profunda y animación de elevación */}
            <div className="absolute w-52 h-52 rounded-full bg-white shadow-2xl z-0 animate-float" />
            <Image src="/img/foto_foto.jpeg" alt="Foto profesional" width={220} height={220} className="rounded-full object-cover relative z-10 shadow-xl animate-float" />
            {/* Overlay con nombre, visible solo al hacer hover */}
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 text-white text-xl font-bold drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none">
              Jhon Cerna Alvarado
            </span>
          </div>
        </section>
      </main>
      {/* Sección Sobre mí */}
      <section id="about" className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 bg-clip-text mb-10 text-center drop-shadow-lg">Sobre mí</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Biografía corta */}
          <div className="bg-[#23232A] rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
            <span className="mb-4 text-blue-400">
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </span>
            <h3 className="text-xl font-bold mb-2 text-white">Biografía</h3>
            <p className="text-gray-300 mb-2">
              Soy Jhon Cerna Alvarado, desarrollador web full stack enfocado en crear soluciones digitales modernas y funcionales. Me apasiona la innovación, el aprendizaje continuo y el diseño de experiencias que aporten valor real.
            </p>
            <p className="text-gray-400 text-sm">
              Mi objetivo profesional es contribuir al éxito de los proyectos, combinando habilidades técnicas y blandas para lograr resultados sobresalientes.
            </p>
          </div>
          {/* Habilidades blandas */}
          <div className="bg-[#23232A] rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <span className="mb-4 text-purple-400">
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.87-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-1 2h2v6h-2z"/></svg>
            </span>
            <h3 className="text-xl font-bold mb-4 text-white">Habilidades blandas</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-purple-900/60 text-purple-200 rounded-full px-4 py-2 text-sm font-semibold">Trabajo en equipo</span>
              <span className="bg-purple-900/60 text-purple-200 rounded-full px-4 py-2 text-sm font-semibold">Comunicación</span>
              <span className="bg-purple-900/60 text-purple-200 rounded-full px-4 py-2 text-sm font-semibold">Liderazgo</span>
              <span className="bg-purple-900/60 text-purple-200 rounded-full px-4 py-2 text-sm font-semibold">Resolución de problemas</span>
              <span className="bg-purple-900/60 text-purple-200 rounded-full px-4 py-2 text-sm font-semibold">Adaptabilidad</span>
              <span className="bg-purple-900/60 text-purple-200 rounded-full px-4 py-2 text-sm font-semibold">Pensamiento crítico</span>
            </div>
          </div>
        </div>
        {/* Habilidades técnicas debajo */}
        <div className="mt-10">
        <div className="bg-[#23232A] rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 w-full max-w-4xl mx-auto">
            <span className="mb-4 text-blue-400">
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M4 17v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm8-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
            </span>
            <h3 className="text-xl font-bold mb-4 text-white">Habilidades técnicas</h3>
            {/* Carrusel tipo culebra dinámico */}
            <div className="w-full overflow-hidden relative" style={{height: '70px'}}>
              <SnakeCarousel />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Agregar animaciones personalizadas a Tailwind en globals.css o tailwind.config.js:
.animate-float { animation: float 3s ease-in-out infinite; }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
.animate-gradient { animation: gradientMove 4s ease-in-out infinite; }
@keyframes gradientMove { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
*/
