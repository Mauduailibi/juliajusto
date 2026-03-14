"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function EngineeringMind() {
  const containerRef = useRef<HTMLElement>(null);

  // Monitora o scroll da seção inteira para os efeitos de Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // --- VELOCIDADES DO PARALLAX (O segredo da profundidade) ---
  const yGrid = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);
  const yTextCard = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.05]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[150vh] w-full bg-[#0A0A0A] overflow-hidden flex items-center justify-center py-20"
    >
      {/* 1. TRANSIÇÃO DE CORES (Do Dourado da seção anterior para o Azul da Engenharia) */}
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-[#0A0A0A] via-transparent to-transparent z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-[#2F6FFF] opacity-[0.05] blur-[120px] pointer-events-none" />

      {/* 2. GRADE DE ENGENHARIA (WORKBENCH PARALLAX) */}
      <motion.div
        style={{ y: yGrid }}
        className="absolute inset-0 pointer-events-none opacity-20"
      >
        <div
          className="w-full h-[200%] absolute top-[-50%]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1F3A5F 1px, transparent 1px),
              linear-gradient(to bottom, #1F3A5F 1px, transparent 1px)
            `,
            backgroundSize: "4vw 4vw",
            maskImage:
              "radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* 3. ELEMENTOS TÉCNICOS FLUTUANTES DA WORKBENCH */}
      <motion.div
        style={{ y: yGrid }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <div className="absolute top-[20%] right-[10%] w-32 h-32 border border-[#2F6FFF]/30 rounded-full flex items-center justify-center opacity-50">
          <div className="w-full h-[1px] bg-[#2F6FFF]/30 absolute" />
          <div className="h-full w-[1px] bg-[#2F6FFF]/30 absolute" />
        </div>
        <div className="absolute bottom-[20%] left-[5%] font-mono text-[#2F6FFF] text-[10px] tracking-[0.2em] opacity-60">
          <div>
            SYS. OPTIMIZATION: <span className="text-[#F5F5F5]">TRUE</span>
          </div>
          <div>
            FORECAST_MODEL: <span className="text-[#F5F5F5]">ACTIVE</span>
          </div>
        </div>
      </motion.div>

      {/* 4. CONTEÚDO PRINCIPAL (Imagem e Texto sobrepostos) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 mt-20">
        {/* FOTO: JULIA NO PUMPJACK (Fundo, Esquerda) */}
        <motion.div
          style={{ y: yImage, scale: scaleImage }}
          className="w-full md:w-7/12 aspect-[4/3] md:aspect-[1/1] relative rounded-lg overflow-hidden border border-[#1F3A5F]/50 shadow-[0_0_80px_rgba(47,111,255,0.08)] group"
        >
          <Image
            src="/images/julia_2.jpeg"
            alt="Julia Engenheira no Pumpjack"
            fill
            className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
          />
          {/* Overlay técnico para integrar a foto ao design */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1F33]/60 via-transparent to-transparent mix-blend-multiply" />

          {/* Retículas de Foco na Imagem */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#F5F5F5]/70" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#F5F5F5]/70" />

          {/* Etiqueta na foto */}
          <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-md px-3 py-1 rounded border border-[#1F3A5F] font-mono text-[10px] text-[#2F6FFF] tracking-widest uppercase">
            College Station, TX
          </div>
        </motion.div>

        {/* CARTÃO DE TEXTO: O ROTEIRO (Frente, Direita) */}
        <motion.div
          style={{ y: yTextCard }}
          className="w-full md:w-5/12 md:-ml-20 relative z-30"
        >
          {/* Glassmorphism forte para o texto saltar na frente da foto/grade */}
          <div className="bg-[#111111]/80 backdrop-blur-xl border border-[#1F3A5F] p-8 md:p-12 rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-3 mb-8">
              {/* <span className="w-2 h-2 rounded-full bg-[#2F6FFF] animate-pulse" /> */}
              <p className="font-mono text-[#2F6FFF] text-xs tracking-widest uppercase">
                A Mente de Engenharia
              </p>
            </div>

            {/* <h3 className="font-playfair text-3xl md:text-4xl text-[#F5F5F5] leading-tight mb-8">
              &quot;Eu sou uma pessoa que gosta de planejar,{" "}
              <span className="text-[#2F6FFF] italic">organizar</span> e
              antecipar problemas.&quot;
            </h3> */}

            <div className="flex items-center mb-4">
              <span className="w-2 h-2 rounded-full bg-[#2F6FFF] animate-pulse mr-4" />
              <h3 className="font-playfair text-3xl md:text-4xl text-[#F5F5F5] leading-tight">
                Planejar
              </h3>
            </div>

            <div className="flex items-center mb-4">
              <span className="w-2 h-2 rounded-full bg-[#2F6FFF] animate-pulse mr-4" />
              <h3 className="font-playfair text-3xl md:text-4xl text-[#F5F5F5] leading-tight">
                Organizar
              </h3>
            </div>

            <div className="flex items-center mb-8">
              <span className="w-2 h-2 rounded-full bg-[#2F6FFF] animate-pulse mr-4" />
              <h3 className="font-playfair text-3xl md:text-4xl text-[#F5F5F5] leading-tight">
                Antecipar problemas
              </h3>
            </div>

            {/* Linha de processo (simulando "processo claro") */}
            <div className="w-full h-[1px] bg-[#1F3A5F] relative mb-8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full bg-[#2F6FFF] shadow-[0_0_10px_#2F6FFF]"
              />
              {/* Nós de processo na linha */}
              <div className="absolute -top-[3px] left-[0%] w-2 h-2 rounded-full bg-[#F5F5F5]" />
              <div className="absolute -top-[3px] left-[50%] w-2 h-2 rounded-full bg-[#F5F5F5]" />
              <div className="absolute -top-[3px] left-[100%] w-2 h-2 rounded-full bg-[#F5F5F5]" />
            </div>

            <p className="font-inter text-[#C8C8C8] text-lg leading-relaxed">
              Só um processo claro e funcionando bem me deixa tranquila.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
