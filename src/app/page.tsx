"use client";
function getFrameworkIcon(framework: string) {
  const frameworkMap: Record<string, { file: string; bg: string }> = {
    "React.js": { file: "r.png", bg: "#222" },
    "Flask": { file: "flask.svg", bg: "#000" },
    "Next.js": { file: "nextjs.svg", bg: "#fff" },
    "Spring Boot": { file: "sb.png", bg: "#6DB33F" },
    "Laravel": { file: "laravel.png", bg: "#FF2D20" },
    "ASP.NET Core": { file: "net.png", bg: "#512BD4" },
    "Flutter": { file: "flutter.png", bg: "#02569B" },
    "Jetpack Compose": { file: "jetpack.png", bg: "#4285F4" },
  };
  const info = frameworkMap[framework];
  if (!info) return null;
  return (
    <Image
      src={`/img/${info.file}`}
      alt={`${framework} Logo`}
      width={44}
      height={44}
      style={{ borderRadius: '50%', background: info.bg }}
      priority
    />
  );
}
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const skills = [
  "JavaScript – React.js",
  "Python – Flask",
  "TypeScript – Next.js",
  "Java – Spring Boot",
  "PHP – Laravel",
  "C# – ASP.NET Core",
  "Dart – Flutter",
  "Kotlin – Jetpack Compose",
];

function getLangIcon(lang: string) {

  const langMap: Record<string, { file: string; bg: string }> = {
    "JavaScript": { file: "js.webp", bg: "#F7DF1E" },
    "Python": { file: "python.png", bg: "#3776AB" },
    "TypeScript": { file: "ts.png", bg: "#3178C6" },
    "Java": { file: "javaaa.png", bg: "#007396" },
    "PHP": { file: "php.png", bg: "#777BB4" },
    "C#": { file: "c.jpg", bg: "#512BD4" },
    "Kotlin": { file: "kotlin.jpg", bg: "#7F52FF" },
    "Dart": { file: "dart.png", bg: "#0175C2" },
  };
  const info = langMap[lang];
  if (!info) return null;
  return (
    <Image
      src={`/img/${info.file}`}
      alt={`${lang} Logo`}
      width={44}
      height={44}
      style={{ borderRadius: '50%', background: info.bg }}
      priority
    />
  );
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
          // Mejor contraste: texto claro para fondos oscuros, texto oscuro para fondos claros
          function getLangColor(lang: string) {
            switch (lang) {
              case "JavaScript": return "text-yellow-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              case "Python": return "text-blue-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              case "TypeScript": return "text-blue-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              case "Java": return "text-orange-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              case "PHP": return "text-indigo-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              case "C#": return "text-purple-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              case "Kotlin": return "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              case "Dart": return "text-blue-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              default: return "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
            }
          }
          function getFrameworkColor(framework: string) {
            switch (framework) {
              case "React.js": return "text-cyan-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              case "Flask": return "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              case "Spring Boot": return "text-green-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              case "Laravel": return "text-red-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              case "Next.js": return "text-gray-900 drop-shadow-[0_1px_2px_rgba(255,255,255,0.7)]";
              case "ASP.NET Core": return "text-purple-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              case "Flutter": return "text-blue-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              case "Jetpack Compose": return "text-blue-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
              default: return "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]";
            }
          }
          return (
            <span
              key={lang + framework + idx}
              className="relative bg-white/20 backdrop-blur-md border border-blue-200/30 shadow-2xl rounded-2xl px-4 py-3 text-base font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-pink-400/40 hover:bg-white/30 min-w-fit max-w-fit"
              style={{ boxSizing: 'border-box', overflow: 'hidden' }}
            >
              {/* Glow animado en el icono, mejor posicionado */}
              <span className="relative flex items-center justify-center mr-2" style={{width: 44, height: 44}}>
                <span className="absolute left-0 top-0 w-11 h-11 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 blur-md opacity-30 animate-pulse" />
                <span className="relative z-10">{getLangIcon(lang)}</span>
              </span>
              <span className={`${getLangColor(lang)} font-bold drop-shadow-lg flex items-center gap-1`}>
                {lang}
              </span>
              {framework && (
                <span className={`${getFrameworkColor(framework)} font-normal flex items-center gap-1 drop-shadow-md`}>
                  – {framework}
                  <span className="ml-1 flex items-center" style={{width: 44, height: 44}}>
                    {getFrameworkIcon(framework)}
                  </span>
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
        {/* Sección especial para HTML y CSS */}
        <div className="mt-12">
          <div className="relative rounded-3xl p-10 flex flex-col items-center w-full max-w-4xl mx-auto border-2 border-cyan-400 bg-gradient-to-b from-cyan-900 via-gray-800 to-blue-900 shadow-[0_8px_32px_0_rgba(34,211,238,0.10)] hover:scale-[1.03] transition-transform duration-300 mb-10">
            <span className="mb-4 flex items-center justify-center">
              <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-cyan-300 shadow-lg animate-pulse">
                <span className="absolute w-16 h-16 rounded-full bg-cyan-400/40 blur-xl opacity-40 animate-pulse" />
                <svg width="38" height="38" fill="currentColor" viewBox="0 0 24 24" className="relative z-10 text-cyan-400"><path d="M4 17v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm8-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
              </span>
            </span>
            <h3 className="text-3xl font-extrabold mb-2 text-center text-cyan-300 tracking-tight drop-shadow-xl">Tecnologías base</h3>
            <div className="w-24 h-1 bg-cyan-300 rounded-full mt-2 mb-6 opacity-90 animate-gradient" />
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2 mb-2">
              {/* Card HTML */}
              <div className="group bg-white/10 border border-cyan-200/30 shadow-xl rounded-2xl px-6 py-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 hover:bg-white/20 min-h-[140px] relative overflow-hidden">
                <span className="relative flex items-center justify-center mb-3" style={{width: 48, height: 48}}>
                  <span className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-tr from-orange-400 via-cyan-400 to-yellow-400 blur-md opacity-30 animate-pulse" />
                  <span className="relative z-10">
                    <Image src="/img/html.jpg" alt="HTML Logo" width={44} height={44} style={{ borderRadius: '50%', background: '#E44D26' }} priority />
                  </span>
                </span>
                <span className="text-lg font-bold drop-shadow-lg flex items-center gap-1 mb-1 text-orange-400">
                  HTML
                </span>
              </div>
              {/* Card CSS */}
              <div className="group bg-white/10 border border-cyan-200/30 shadow-xl rounded-2xl px-6 py-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40 hover:bg-white/20 min-h-[140px] relative overflow-hidden">
                <span className="relative flex items-center justify-center mb-3" style={{width: 48, height: 48}}>
                  <span className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 via-cyan-400 to-cyan-200 blur-md opacity-30 animate-pulse" />
                  <span className="relative z-10">
                    <Image src="/img/css.png" alt="CSS Logo" width={44} height={44} style={{ borderRadius: '50%', background: '#1572B6' }} priority />
                  </span>
                </span>
                <span className="text-lg font-bold drop-shadow-lg flex items-center gap-1 mb-1 text-cyan-300">
                  CSS
                </span>
              </div>
            </div>
            <div className="w-16 h-1 bg-cyan-300 rounded-full mt-8 mb-2 opacity-80 animate-gradient" />
          </div>
          <div className="relative rounded-3xl p-10 flex flex-col items-center w-full max-w-4xl mx-auto border-2 border-blue-300 bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 shadow-[0_8px_32px_0_rgba(59,130,246,0.10)] hover:scale-[1.03] transition-transform duration-300">
            {/* Fondo gris oscuro con gradiente azul y sombra azul */}
            <span className="mb-4 flex items-center justify-center">
              <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-blue-300 shadow-lg animate-pulse">
                <span className="absolute w-16 h-16 rounded-full bg-blue-500/40 blur-xl opacity-40 animate-pulse" />
                <svg width="38" height="38" fill="currentColor" viewBox="0 0 24 24" className="relative z-10 text-blue-900"><path d="M4 17v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm8-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
              </span>
            </span>
            <h3 className="text-3xl font-extrabold mb-2 text-center text-white tracking-tight drop-shadow-xl">Lenguajes de programación</h3>
            <div className="w-24 h-1 bg-blue-300 rounded-full mt-2 mb-6 opacity-90 animate-gradient" />
            {/* Grid de lenguajes */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2 mb-10">
              {skills.map((skill, idx) => {
                const [lang, framework] = skill.split(" – ");
                if (!lang) return null;
                function getLangColor(lang: string) {
                  switch (lang) {
                    case "JavaScript": return "text-yellow-400";
                    case "Python": return "text-blue-700";
                    case "TypeScript": return "text-blue-500";
                    case "Java": return "text-orange-500";
                    case "PHP": return "text-indigo-400";
                    case "C#": return "text-purple-700";
                    case "Go": return "text-cyan-500";
                    case "Ruby": return "text-red-600";
                    case "Kotlin": return "text-purple-500";
                    case "Rust": return "text-amber-700";
                    case "Dart": return "text-blue-600";
                    case "Swift": return "text-orange-400";
                    default: return "text-cyan-200";
                  }
                }
                return (
                  <div
                    key={lang + idx}
                    className="group bg-white/10 border border-blue-200/30 shadow-xl rounded-2xl px-6 py-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-pink-400/40 hover:bg-white/20 min-h-[140px] relative overflow-hidden"
                  >
                    <span className="relative flex items-center justify-center mb-3" style={{width: 48, height: 48}}>
                      <span className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 blur-md opacity-30 animate-pulse" />
                      <span className="relative z-10">{getLangIcon(lang)}</span>
                    </span>
                    <span className={`text-lg font-bold drop-shadow-lg flex items-center gap-1 mb-1 ${getLangColor(lang)}`}>
                      {lang}
                    </span>
                  </div>
                );
              })}
            </div>
            <h3 className="text-3xl font-extrabold mb-2 text-center text-white tracking-tight drop-shadow-xl mt-8">Frameworks y librerías</h3>
            <div className="w-24 h-1 bg-blue-300 rounded-full mt-2 mb-6 opacity-90 animate-gradient" />
            {/* Grid de frameworks */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2">
              {skills.map((skill, idx) => {
                const [lang, framework] = skill.split(" – ");
                if (!framework) return null;
                function getFrameworkColor(framework: string) {
                  switch (framework) {
                    case "React.js": return "text-blue-400";
                    case "Flask": return "text-gray-200";
                    case "Spring Boot": return "text-green-500";
                    case "Laravel": return "text-red-500";
                    case "Ruby on Rails": return "text-red-600";
                    case "Next.js": return "text-gray-800";
                    case "Gin": return "text-cyan-500";
                    case "Flutter": return "text-blue-500";
                    case "Jetpack Compose": return "text-blue-400";
                    case "ASP.NET Core": return "text-purple-700";
                    case "Ktor": return "text-blue-400";
                    case "SwiftUI": return "text-orange-400";
                    case "Java": return "text-orange-500";
                    case "Actix Web": return "text-gray-600";
                    case "Rust": return "text-amber-700";
                    case "PHP": return "text-blue-400";
                    default: return "text-cyan-300";
                  }
                }
                return (
                  <div
                    key={framework + idx}
                    className="group bg-white/10 border border-blue-200/30 shadow-xl rounded-2xl px-6 py-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-pink-400/40 hover:bg-white/20 min-h-[140px] relative overflow-hidden"
                  >
                    <span className="relative flex items-center justify-center mb-3" style={{width: 44, height: 44}}>
                      <span className="absolute left-0 top-0 w-11 h-11 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 blur-md opacity-30 animate-pulse" />
                      <span className="relative z-10">{getFrameworkIcon(framework)}</span>
                    </span>
                    <span className={`text-lg font-bold drop-shadow-lg flex items-center gap-1 mb-1 ${getFrameworkColor(framework)}`}>
                      {framework}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="w-16 h-1 bg-blue-300 rounded-full mt-8 mb-2 opacity-80 animate-gradient" />
          </div>
        </div>
      </section>
    </div>
  );
}

