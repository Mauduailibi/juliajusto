/* eslint-disable react-hooks/purity */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Dreamer() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.0, 0.1, 0.2, 0.25],
    [0, 1, 1, 0],
  );
  const yText1 = useTransform(scrollYProgress, [0.0, 0.25], [30, -30]);

  const opacityText2 = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5, 0.55],
    [0, 1, 1, 0],
  );
  const scaleText2 = useTransform(scrollYProgress, [0.3, 0.55], [0.9, 1.1]);
  const yText2 = useTransform(scrollYProgress, [0.3, 0.55], [30, -30]);

  const opacityText3 = useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]);
  const yText3 = useTransform(scrollYProgress, [0.6, 0.9], [30, 0]);

  const img1Opacity = useTransform(
    scrollYProgress,
    [0.55, 0.65, 1],
    [0, 0.6, 0.6],
  );
  const img1Y = useTransform(scrollYProgress, [0.55, 1], ["20%", "-20%"]);

  const img2Opacity = useTransform(
    scrollYProgress,
    [0.6, 0.7, 1],
    [0, 0.4, 0.4],
  );
  const img2Y = useTransform(scrollYProgress, [0.6, 1], ["30%", "-30%"]);

  const img3Opacity = useTransform(
    scrollYProgress,
    [0.65, 0.75, 1],
    [0, 0.5, 0.5],
  );
  const img3Y = useTransform(scrollYProgress, [0.65, 1], ["40%", "-10%"]);

  const particlesOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 1, 1],
  );
  const yParticles = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.6, 1],
    [0, 0.15, 0.15],
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] w-full bg-[#000000]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-[20vh] bg-gradient-to-b from-[#0A0A0A] to-transparent z-10" />

        <motion.div
          style={{ opacity: particlesOpacity, y: yParticles }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(40)].map((_, i) => {
            const size = Math.random() * 3 + 1;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const duration = Math.random() * 3 + 2;
            const delay = Math.random() * 2;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0.1 }}
                animate={{ opacity: [0.1, 0.8, 0.1] }}
                transition={{
                  duration,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute rounded-full bg-[#CDAA7D]"
                style={{
                  width: size,
                  height: size,
                  left: `${left}%`,
                  top: `${top}%`,
                  boxShadow: `0 0 ${size * 2}px #CDAA7D`,
                }}
              />
            );
          })}
        </motion.div>

        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#CDAA7D] blur-[150px] rounded-full mix-blend-screen" />
        </motion.div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            style={{ opacity: img1Opacity, y: img1Y }}
            className="absolute top-[15%] left-[5%] md:left-[15%] w-[160px] md:w-[240px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl rotate-[-6deg]"
          >
            <Image
              src="/images/julia_3.jpeg"
              alt="Livros"
              fill
              className="object-cover sepia-[0.3]"
            />
          </motion.div>

          <motion.div
            style={{ opacity: img2Opacity, y: img2Y }}
            className="absolute bottom-[0%] right-[10%] md:right-[40%] w-[180px] md:w-[280px] aspect-square rounded-xl overflow-hidden shadow-2xl rotate-[4deg]"
          >
            <Image
              src="/images/familia_2.jpeg"
              alt="Fotos Antigas"
              fill
              className="object-cover sepia-[0.5]"
            />
          </motion.div>

          <motion.div
            style={{ opacity: img3Opacity, y: img3Y }}
            className="absolute top-[10%] right-[5%] md:right-[10%] w-[140px] md:w-[300px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl rotate-[12deg] hidden md:block"
          >
            <Image
              src="/images/namorado_2.jpeg"
              alt="Pais"
              fill
              className="object-cover sepia-[0.4]"
            />
          </motion.div>
        </div>

        <div className="relative z-20 w-full max-w-5xl px-6 text-center">
          <motion.div
            style={{
              opacity: opacityText1,
              y: yText1,
              pointerEvents: opacityText1.get() > 0 ? "auto" : "none",
            }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <h3 className="font-inter text-2xl md:text-3xl text-[#C8C8C8] leading-relaxed max-w-3xl drop-shadow-lg mb-8">
              Autoestima sólida
            </h3>

            <h2 className="font-playfair text-3xl md:text-4xl lg:text-6xl text-[#F5F5F5] leading-tight text-gradient-gold drop-shadow-2xl">
              Desafios e críticas → aprendizado → seguir em frente
            </h2>
          </motion.div>

          <motion.div
            style={{
              opacity: opacityText2,
              scale: scaleText2,
              y: yText2,
              pointerEvents: opacityText2.get() > 0 ? "auto" : "none",
            }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <h3 className="font-inter text-2xl md:text-3xl text-[#C8C8C8] leading-relaxed max-w-3xl drop-shadow-lg mb-8">
              Meu outro lado
            </h3>

            <h2 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-[#F5F5F5] leading-tight text-gradient-gold drop-shadow-2xl">
              Eu também sou muito sonhadora.
            </h2>
          </motion.div>

          <motion.div
            style={{
              opacity: opacityText3,
              y: yText3,
              pointerEvents: opacityText3.get() > 0 ? "auto" : "none",
            }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
              <p className="font-playfair text-3xl md:text-4xl text-[#F5F5F5] ">
                Livros
              </p>

              <p className="font-playfair text-3xl md:text-4xl text-[#F5F5F5] ">
                Histórias com final feliz
              </p>

              <p className="font-playfair text-3xl md:text-4xl text-[#F5F5F5] ">
                Memórias em família
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
