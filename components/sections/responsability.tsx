"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Responsibility() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacityImage = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 0],
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.05, 0.15, 0],
  );

  const opacityText1 = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const yText1 = useTransform(scrollYProgress, [0.15, 0.25], [30, 0]);

  const opacityText2 = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const yText2 = useTransform(scrollYProgress, [0.35, 0.45], [30, 0]);

  const opacityText3 = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const yText3 = useTransform(scrollYProgress, [0.55, 0.65], [30, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] w-full bg-[#0A0A0A]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden px-6 md:px-12">
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#CDAA7D] blur-[120px] rounded-full" />
        </motion.div>

        <div className="w-full md:w-1/2 h-[40vh] md:h-screen flex items-center justify-center relative z-10">
          <motion.div
            style={{ scale: scaleImage, opacity: opacityImage }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#CDAA7D]/30 shadow-[0_0_50px_rgba(205,170,125,0.05)]"
          >
            <Image
              src="/images/pais_1.jpeg"
              alt="Família e Apoio"
              fill
              className="object-cover sepia-[0.2] hover:sepia-0 transition-all duration-1000"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

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

        <div className="w-full md:w-1/2 h-[60vh] md:h-screen flex items-center justify-center relative z-20">
          <div className="flex flex-col gap-6 w-full max-w-lg">
            <motion.h2
              style={{ opacity: opacityText1, y: yText1 }}
              className="font-playfair text-4xl md:text-5xl text-gradient-gold leading-15"
            >
              Responsabilidade
            </motion.h2>

            <motion.h2
              style={{ opacity: opacityText2, y: yText2 }}
              className="font-playfair text-4xl md:text-5xl text-[#F5F5F5] leading-15"
            >
              Cuidado
            </motion.h2>

            <motion.h2
              style={{ opacity: opacityText3, y: yText3 }}
              className="font-playfair text-4xl md:text-5xl text-gradient-gold leading-15"
            >
              Organização
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}
