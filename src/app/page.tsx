"use client";
function getFrameworkIcon(framework: string) {
  switch (framework) {
    case "React.js":
      return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#61DAFB"/><g><ellipse rx="8" ry="16" cx="16" cy="16" fill="none" stroke="#fff" strokeWidth="2"/><ellipse rx="16" ry="8" cx="16" cy="16" fill="none" stroke="#fff" strokeWidth="2"/><ellipse rx="8" ry="16" cx="16" cy="16" fill="none" stroke="#fff" strokeWidth="2" transform="rotate(60 16 16)"/><ellipse rx="8" ry="16" cx="16" cy="16" fill="none" stroke="#fff" strokeWidth="2" transform="rotate(120 16 16)"/></g><circle cx="16" cy="16" r="3" fill="#fff"/></svg>
      );
    case "Django":
      return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#092E20"/><text x="7" y="23" fontSize="16" fontWeight="bold" fill="#fff">Dj</text></svg>
      );
    case "Next.js":
      return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#fff"/><text x="4" y="23" fontSize="16" fontWeight="bold" fill="#222">Next</text></svg>
      );
    case "Spring Boot":
      return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#6DB33F"/><text x="2" y="23" fontSize="16" fontWeight="bold" fill="#fff">Spring</text></svg>
      );
    case "Laravel":
      return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#FF2D20"/><text x="2" y="23" fontSize="16" fontWeight="bold" fill="#fff">Laravel</text></svg>
      );
    case "ASP.NET Core":
      return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#512BD4"/><text x="2" y="23" fontSize="13" fontWeight="bold" fill="#fff">.NET</text></svg>
      );
    case "Gin":
      return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#00ADD8"/><text x="7" y="23" fontSize="16" fontWeight="bold" fill="#fff">Gin</text></svg>
      );
    case "Ruby on Rails":
      return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#CC0000"/><text x="2" y="23" fontSize="13" fontWeight="bold" fill="#fff">Rails</text></svg>
      );
    case "Ktor":
      return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#0095D5"/><text x="4" y="23" fontSize="16" fontWeight="bold" fill="#fff">Ktor</text></svg>
      );
    case "Actix Web":
      return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#333"/><text x="2" y="23" fontSize="13" fontWeight="bold" fill="#fff">Actix</text></svg>
      );
    case "Flutter":
      return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#02569B"/><text x="2" y="23" fontSize="16" fontWeight="bold" fill="#fff">Flutter</text></svg>
      );
    case "SwiftUI":
      return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#FA7343"/><text x="2" y="23" fontSize="16" fontWeight="bold" fill="#fff">SwiftUI</text></svg>
      );
    case "Jetpack Compose":
      return (
        <svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="#4285F4"/><text x="2" y="23" fontSize="13" fontWeight="bold" fill="#fff">Compose</text></svg>
      );
    default:
      return null;
  }
}
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const skills = [
  "HTML & CSS",
  "JavaScript – React.js",
  "Python – Django",
  "TypeScript – Next.js",
  "Java – Spring Boot",
  "PHP – Laravel",
  "C# – ASP.NET Core",
  "Go – Gin",
  "Ruby – Ruby on Rails",
  "Kotlin – Ktor",
  "Rust – Actix Web",
  "Dart – Flutter",
  "Swift – SwiftUI",
  "Kotlin – Jetpack Compose",
];

function getLangIcon(lang: string) {
  switch (lang) {
    case "JavaScript":
      return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><text x="7" y="23" fontSize="16" fontWeight="bold" fill="#222">JS</text></svg>
      );
    case "Python":
      return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#3776AB"/><text x="5" y="23" fontSize="16" fontWeight="bold" fill="#fff">Py</text></svg>
      );
    case "TypeScript":
      return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#3178C6"/><text x="2" y="23" fontSize="16" fontWeight="bold" fill="#fff">TS</text></svg>
      );
    case "Java":
      return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#E76F00"/><text x="4" y="23" fontSize="16" fontWeight="bold" fill="#fff">Java</text></svg>
      );
    case "PHP":
      return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#777BB4"/><text x="5" y="23" fontSize="16" fontWeight="bold" fill="#fff">PHP</text></svg>
      );
    case "C#":
      return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#9B4F96"/><text x="6" y="23" fontSize="16" fontWeight="bold" fill="#fff">C#</text></svg>
      );
    case "Go":
      return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#00ADD8"/><text x="7" y="23" fontSize="16" fontWeight="bold" fill="#fff">Go</text></svg>
      );
    case "Ruby":
      return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#CC342D"/><text x="3" y="23" fontSize="16" fontWeight="bold" fill="#fff">Ruby</text></svg>
      );
    case "Kotlin":
      return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#7F52FF"/><text x="2" y="23" fontSize="16" fontWeight="bold" fill="#fff">Kt</text></svg>
      );
    case "Rust":
      return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#DEA584"/><text x="2" y="23" fontSize="16" fontWeight="bold" fill="#222">Rust</text></svg>
      );
    case "Dart":
      return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#0175C2"/><text x="2" y="23" fontSize="16" fontWeight="bold" fill="#fff">Dart</text></svg>
      );
    case "Swift":
      return (
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#FA7343"/><text x="2" y="23" fontSize="16" fontWeight="bold" fill="#fff">Swift</text></svg>
      );
    default:
      return null;
  }
}

function SnakeCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  // Duplicar el array para efecto infinito
  const items = [...skills, ...skills];
  // Ancho estimado de cada item (ajustar si cambias el diseño)
  const ITEM_WIDTH = 220; // px
  const VISIBLE_COUNT = 4;
  const TOTAL_WIDTH = ITEM_WIDTH * items.length;
  // Estado para la posición de scroll
  const [scrollX, setScrollX] = React.useState(0);

  useEffect(() => {
    let reqId: number;
    let lastTime = performance.now();
    function animate() {
      const now = performance.now();
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      // Velocidad en px/segundo (ajusta para más rápido/lento)
      const SPEED = 60;
      setScrollX((prev) => {
        let next = prev + SPEED * dt;
        if (next >= TOTAL_WIDTH / 2) {
          // Reinicia para bucle infinito
          return next - TOTAL_WIDTH / 2;
        }
        return next;
      });
      reqId = requestAnimationFrame(animate);
    }
    reqId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqId);
  }, [TOTAL_WIDTH]);

  return (
    <div
      className="relative flex items-center w-full justify-center overflow-hidden" ref={containerRef} style={{ height: '90px' }}>
      {/* Fondo degradado animado */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-40 blur-xl" />
      <div
        ref={scrollRef}
        className="flex gap-6 py-2 px-2"
        style={{
          transform: `translateX(-${scrollX}px)`,
          transition: 'none',
          width: TOTAL_WIDTH,
        }}
      >
        {items.map((skill, idx) => {
          const [lang, framework] = skill.split(" – ");
          return (
            <span
              key={lang + framework + idx}
              className="relative bg-white/20 backdrop-blur-md border border-blue-200/30 shadow-2xl rounded-2xl px-4 py-3 text-base font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-pink-400/40 hover:bg-white/30 min-w-fit max-w-fit"
              style={{ boxSizing: 'border-box', overflow: 'hidden' }}
            >
              {/* Glow animado en el icono, mejor posicionado */}
              <span className="relative flex items-center justify-center mr-2" style={{width: 32, height: 32}}>
                <span className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 blur-md opacity-30 animate-pulse" />
                <span className="relative z-10">{getLangIcon(lang)}</span>
              </span>
              <span className="text-blue-900 font-bold drop-shadow-lg flex items-center gap-1">
                {lang}
              </span>
              {framework && (
                <span className="text-blue-500 font-normal flex items-center gap-1">
                  – {framework} {getFrameworkIcon(framework)}
                </span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#18181B] flex flex-col font-sans overflow-hidden text-white relative">
      {/* Fondo animado con gradiente y partículas */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-tr from-blue-900 via-purple-900 to-blue-700 opacity-80">
        {/* Partículas decorativas */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-purple-400/30 rounded-full blur-2xl animate-float" />
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-300/20 rounded-full blur-2xl animate-float" />
      </div>
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
        <h2 className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text mb-12 text-center drop-shadow-2xl animate-gradient tracking-tight">
          <span className="inline-block animate-bounce">Sobre mí</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Biografía clara y profesional */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300 border border-gray-200">
            <span className="mb-4 text-blue-500">
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </span>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 tracking-tight">Biografía</h3>
            <p className="text-gray-700 mb-3 text-lg leading-relaxed">
              Soy <span className="font-semibold text-blue-500">Jhon Cerna Alvarado</span>, desarrollador web full stack enfocado en crear soluciones digitales modernas y funcionales. Me apasiona la innovación, el aprendizaje continuo y el diseño de experiencias que aporten valor real.
            </p>
            <p className="text-gray-500 text-base mb-2">
              Mi objetivo profesional es contribuir al éxito de los proyectos, combinando habilidades técnicas y blandas para lograr resultados sobresalientes.
            </p>
            <div className="w-16 h-1 bg-blue-100 rounded-full mt-4 mb-2 opacity-80" />
          </div>
          {/* Habilidades blandas */}
          <div className="bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-purple-800/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center hover:scale-[1.06] transition-transform duration-300 border-2 border-purple-400/30 backdrop-blur-xl relative animate-fadein">
            <span className="mb-4 text-purple-400 drop-shadow-xl animate-float">
              <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24"><defs><radialGradient id="softGrad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"><stop offset="0%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#60a5fa"/></radialGradient></defs><path fill="url(#softGrad)" d="M12 2C8.13 2 5 5.13 5 9c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.87-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm-1 2h2v6h-2z"/></svg>
            </span>
            <h3 className="text-2xl font-bold mb-3 text-white tracking-tight drop-shadow-lg animate-fadein">Habilidades blandas</h3>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              <span className="flex items-center gap-2 bg-purple-900/70 text-purple-100 rounded-full px-5 py-2 text-base font-semibold shadow-lg hover:scale-110 hover:shadow-purple-400/40 transition-all duration-300 border border-purple-400/30 backdrop-blur-sm">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5s-3 1.34-3 3 1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                Trabajo en equipo
              </span>
              <span className="flex items-center gap-2 bg-purple-900/70 text-purple-100 rounded-full px-5 py-2 text-base font-semibold shadow-lg hover:scale-110 hover:shadow-purple-400/40 transition-all duration-300 border border-purple-400/30 backdrop-blur-sm">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M21 6.5a2.5 2.5 0 0 0-5 0V8h-2V6.5a2.5 2.5 0 0 0-5 0V8H7V6.5a2.5 2.5 0 0 0-5 0V8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5z"/></svg>
                Comunicación
              </span>
              <span className="flex items-center gap-2 bg-purple-900/70 text-purple-100 rounded-full px-5 py-2 text-base font-semibold shadow-lg hover:scale-110 hover:shadow-purple-400/40 transition-all duration-300 border border-purple-400/30 backdrop-blur-sm">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-7.07 17.07c.39.39 1.02.39 1.41 0l1.41-1.41c.39-.39.39-1.02 0-1.41A7.978 7.978 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.21-.9 4.21-2.35 5.66-.39.39-.39 1.02 0 1.41l1.41 1.41c.39.39 1.02.39 1.41 0A10 10 0 0 0 12 2z"/></svg>
                Liderazgo
              </span>
              <span className="flex items-center gap-2 bg-purple-900/70 text-purple-100 rounded-full px-5 py-2 text-base font-semibold shadow-lg hover:scale-110 hover:shadow-purple-400/40 transition-all duration-300 border border-purple-400/30 backdrop-blur-sm">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4v4h8v-4c0-2.21-1.79-4-4-4zm0-6C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10z"/></svg>
                Resolución de problemas
              </span>
              <span className="flex items-center gap-2 bg-purple-900/70 text-purple-100 rounded-full px-5 py-2 text-base font-semibold shadow-lg hover:scale-110 hover:shadow-purple-400/40 transition-all duration-300 border border-purple-400/30 backdrop-blur-sm">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4a8 8 0 0 1 8 8c0 4.41-3.59 8-8 8s-8-3.59-8-8a8 8 0 0 1 8-8zm0 2C8.13 6 5 9.13 5 13c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.87-3.13-7-7-7z"/></svg>
                Adaptabilidad
              </span>
              <span className="flex items-center gap-2 bg-purple-900/70 text-purple-100 rounded-full px-5 py-2 text-base font-semibold shadow-lg hover:scale-110 hover:shadow-purple-400/40 transition-all duration-300 border border-purple-400/30 backdrop-blur-sm">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>
                Pensamiento crítico
              </span>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-full mt-4 mb-2 opacity-80 animate-gradient" />
          </div>
        </div>
        {/* Habilidades técnicas debajo */}
        <div className="mt-12">
          <div className="bg-blue-50 rounded-3xl shadow-2xl p-10 flex flex-col items-center hover:scale-[1.03] transition-transform duration-300 w-full max-w-4xl mx-auto border border-blue-100">
            <span className="mb-4 text-blue-500">
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M4 17v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm8-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
            </span>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">Habilidades técnicas</h3>
            <div className="w-full overflow-hidden relative" style={{height: '70px'}}>
              <SnakeCarousel />
            </div>
            <div className="w-16 h-1 bg-blue-100 rounded-full mt-6 mb-2 opacity-80" />
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
