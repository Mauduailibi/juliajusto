"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yGrid = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Parallax específico para as fotos flutuantes (Workbench)
  const yPhoto1 = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const yPhoto2 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yPhoto3 = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

  const scaleText = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* 1. CAMADA DE FUNDO LUZ E PROFUNDIDADE */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-[#2F6FFF] to-[#CDAA7D] opacity-[0.15] blur-[120px] rounded-full" />
      </motion.div>

      {/* 2. CAMADA DA GRADE DE ENGENHARIA (BLUEPRINT / WORKBENCH) */}
      <motion.div
        style={{ y: yGrid, opacity: opacityFade }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1F3A5F 1px, transparent 1px),
              linear-gradient(to bottom, #1F3A5F 1px, transparent 1px)
            `,
            backgroundSize: "4vw 4vw",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* 3. CAMADA DE FOTOS ESPALHADAS (O TOQUE HUMANO NA MESA DE PROJETOS) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Foto 1: Topo Esquerda (Rotacionada para a esquerda) */}
        <motion.div
          style={{ y: yPhoto1, opacity: opacityFade }}
          className="absolute top-[30%] left-[5%] md:left-[5%] w-[180px] md:w-[240px] aspect-[4/5] -rotate-6 pointer-events-auto group"
        >
          <div className="w-full h-full p-2 bg-[#F5F5F5] shadow-2xl rounded-sm transition-transform duration-500 hover:scale-105 hover:z-50 hover:rotate-0">
            <div className="relative w-full h-full overflow-hidden opacity-100 transition-all duration-500 border border-gray-200">
              <Image
                src="/images/julia_1.jpeg"
                alt="Julia Engineering"
                fill
                className="object-cover"
              />
            </div>
            {/* Fita adesiva / detalhe técnico */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/20 backdrop-blur-md border border-white/30 rotate-2" />
          </div>
        </motion.div>

        {/* Foto 2: Fundo Direita (Rotacionada para a direita) */}
        <motion.div
          style={{ y: yPhoto2, opacity: opacityFade }}
          className="absolute bottom-[10%] right-[5%] md:right-[5%] w-[200px] md:w-[280px] aspect-square rotate-12 pointer-events-auto group"
        >
          <div className="w-full h-full p-2 bg-[#F5F5F5] shadow-2xl rounded-sm transition-transform duration-500 hover:scale-105 hover:z-50 hover:rotate-0">
            <div className="relative w-full h-full overflow-hidden opacity-100 transition-all duration-500 border border-gray-200">
              <Image
                src="/images/familia_1.jpeg"
                alt="Família"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-white/20 backdrop-blur-md border border-white/30 -rotate-3" />
          </div>
        </motion.div>

        {/* Foto 3: Topo Direita (Pequena, inclinada) */}
        <motion.div
          style={{ y: yPhoto3, opacity: opacityFade }}
          className="absolute top-[10%] right-[10%] md:right-[10%] w-[140px] md:w-[180px] aspect-[3/4] -rotate-12 pointer-events-auto group hidden md:block"
        >
          <div className="w-full h-full p-2 bg-[#F5F5F5] shadow-2xl rounded-sm transition-transform duration-500 hover:scale-105 hover:z-50 hover:rotate-0">
            <div className="relative w-full h-full overflow-hidden opacity-100 transition-all duration-500 border border-gray-200">
              <Image
                src="/images/namorado_1.jpeg"
                alt="Irmãs"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 4. ELEMENTOS TÉCNICOS FLUTUANTES (HUD DE ENGENHARIA) */}
      <motion.div
        style={{ opacity: opacityFade }}
        className="absolute inset-0 pointer-events-none z-20"
      >
        <div className="absolute top-[15%] left-[5%] md:left-[10%] font-mono text-[#2F6FFF] text-xs opacity-70 flex flex-col gap-1 hidden md:flex">
          <span>LAT: 27° 0&apos; 0&quot; S</span>
          <span>LNG: 50° 0&apos; 0&quot; W</span>
          <span className="w-12 h-[1px] bg-[#2F6FFF] mt-2 block" />
        </div>

        <div className="absolute bottom-[15%] left-[5%] md:left-[10%] font-mono text-[#CDAA7D] text-xs opacity-70 flex flex-col gap-1">
          <span>SYS. STATUS: NOMINAL</span>
          <span>V 1.0.0</span>
          <span className="w-12 h-[1px] bg-[#CDAA7D] mt-2 block" />
        </div>
      </motion.div>

      {/* 5. CAMADA PRINCIPAL: TIPOGRAFIA (ALTO CONTRASTE) */}
      <motion.div
        style={{ y: yText, scale: scaleText, opacity: opacityFade }}
        className="relative z-30 text-center flex flex-col items-center px-4 pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden mb-6"
        >
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-[140px] leading-60 tracking-tighter text-[#F5F5F5] drop-shadow-2xl mix-blend-difference">
            Julia Justo<span className="text-[#2F6FFF]">.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 font-mono text-[#C8C8C8] uppercase tracking-[0.2em] text-xs md:text-sm bg-[#111111]/80 backdrop-blur-md border border-[#1F3A5F]/50 px-6 py-3 rounded-full pointer-events-auto shadow-2xl"
        >
          <span className="w-2 h-2 rounded-full bg-[#CDAA7D] animate-pulse" />
          Engineering who I am
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        style={{ opacity: opacityFade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none"
      >
        <span className="font-mono text-[10px] text-[#C8C8C8] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C8C8C8] to-transparent" />
      </motion.div>
    </section>
  );
}
