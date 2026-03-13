"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Responsibility() {
  const containerRef = useRef<HTMLElement>(null);

  // 300vh para permitir que você fale calmamente enquanto a tela rola
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- ANIMAÇÕES DA IMAGEM ---
  // A imagem ganha um zoom bem lento para trazer proximidade e emoção
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacityImage = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0],
  );

  // --- ANIMAÇÕES DOS TEXTOS (CROSSFADE EM 3 ATOS) ---

  // Ato 1: A Filha Mais Velha
  const opacityText1 = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.25],
    [0, 1, 0],
  );
  const yText1 = useTransform(scrollYProgress, [0.05, 0.25], [30, -30]);

  // Ato 2: O Apoio dos Pais
  const opacityText2 = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55],
    [0, 1, 0],
  );
  const yText2 = useTransform(scrollYProgress, [0.35, 0.55], [30, -30]);

  // Ato 3: Cuidar e Organizar
  const opacityText3 = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.9],
    [0, 1, 0],
  );
  const yText3 = useTransform(scrollYProgress, [0.65, 0.9], [30, -30]);

  // Brilho de fundo quente (Glow) que pulsa suavemente
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.05, 0.15, 0],
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] w-full bg-[#0A0A0A]"
    >
      {/* Container "Sticky" que trava na tela */}
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden px-6 md:px-12">
        {/* GLOW DE FUNDO (Acolhimento/Família) */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#CDAA7D] blur-[120px] rounded-full" />
        </motion.div>

        {/* LADO ESQUERDO: Imagem Ancorada (Família/Apoio) */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-screen flex items-center justify-center relative z-10">
          <motion.div
            style={{ scale: scaleImage, opacity: opacityImage }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#CDAA7D]/30 shadow-[0_0_50px_rgba(205,170,125,0.05)]"
          >
            {/* O ideal aqui é a foto de vocês em família, talvez a familia_principal.jpeg ou uma foto com seus pais */}
            <Image
              src="/images/pais_1.jpeg"
              alt="Família e Apoio"
              fill
              className="object-cover sepia-[0.2] hover:sepia-0 transition-all duration-1000"
            />
            {/* Gradiente escuro para mesclar a foto com o fundo do site */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

            {/* Elemento de design: "Caminhando juntos" */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CDAA7D] animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#CDAA7D]/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#CDAA7D]/30" />
              </div>
              <span className="font-mono text-[#E6D2B5] text-[10px] tracking-widest uppercase">
                Base Segura
              </span>
            </div>
          </motion.div>
        </div>

        {/* LADO DIREITO: O Roteiro Sincronizado */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-screen flex items-center justify-center relative z-20">
          <div className="relative w-full max-w-lg">
            {/* ATO 1: A Filha Mais Velha */}
            <motion.div
              style={{
                opacity: opacityText1,
                y: yText1,
                pointerEvents: opacityText1.get() > 0 ? "auto" : "none",
              }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <p className="font-mono text-[#CDAA7D] text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#CDAA7D]" /> A Origem
              </p>
              <h3 className="font-playfair text-4xl md:text-5xl text-[#F5F5F5] leading-tight">
                &quot;Crescer como a filha mais velha naturalmente me trouxe um
                senso grande de{" "}
                <span className="text-gradient-gold">responsabilidade</span>
                .&quot;
              </h3>
            </motion.div>

            {/* ATO 2: O Apoio dos Pais */}
            <motion.div
              style={{
                opacity: opacityText2,
                y: yText2,
                pointerEvents: opacityText2.get() > 0 ? "auto" : "none",
              }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <p className="font-mono text-[#CDAA7D] text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#CDAA7D]" /> O Suporte
              </p>
              <h3 className="font-playfair text-3xl md:text-4xl text-[#F5F5F5] leading-relaxed">
                &quot;Eu sempre tive muito apoio da minha família...&quot;
              </h3>
              <p className="font-inter text-[#C8C8C8] text-lg md:text-xl mt-4 italic opacity-90">
                &quot;...e meus pais sempre caminharam comigo nos meus
                sonhos.&quot;
              </p>
            </motion.div>

            {/* ATO 3: Cuidar e Organizar */}
            <motion.div
              style={{
                opacity: opacityText3,
                y: yText3,
                pointerEvents: opacityText3.get() > 0 ? "auto" : "none",
              }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <p className="font-mono text-[#CDAA7D] text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#CDAA7D]" /> O Papel
              </p>
              <h3 className="font-playfair text-3xl md:text-4xl text-[#F5F5F5] leading-tight mb-6">
                &quot;Fui desenvolvendo esse papel de cuidar e
                organizar...&quot;
              </h3>
              <p className="font-inter text-[#C8C8C8] text-lg md:text-xl leading-relaxed">
                &quot;...e tentar garantir que as coisas{" "}
                <span className="text-[#F5F5F5] font-semibold border-b border-[#CDAA7D]/50 pb-1">
                  funcionassem bem para todo mundo
                </span>
                .&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
