"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Baby() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacityPhoto = useTransform(
    scrollYProgress,
    [0.0, 0.2, 0.5, 0.8],
    [0, 1, 1, 0],
  );
  const scalePhoto = useTransform(
    scrollYProgress,
    [0.0, 0.2, 0.5, 0.8],
    [0.9, 1, 1, 0.85],
  );
  const rotatePhoto = useTransform(scrollYProgress, [0.0, 0.2], [-5, 0]);
  const yPhoto = useTransform(scrollYProgress, [0.5, 0.8], ["0%", "-40%"]);

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0.15, 0.15],
  );

  const obrigadaOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
  const obrigadaY = useTransform(scrollYProgress, [0.6, 0.9], [100, 0]);
  const obrigadaScale = useTransform(scrollYProgress, [0.6, 0.9], [0.9, 1]);

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] w-full bg-[#0A0A0A]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ y: gridY }}
          className="absolute inset-0 pointer-events-none opacity-15"
        >
          <div
            className="w-full h-[200%] absolute top-[-50%]"
            style={{
              backgroundImage: `linear-gradient(to right, #1F3A5F 1px, transparent 1px), linear-gradient(to bottom, #1F3A5F 1px, transparent 1px)`,
              backgroundSize: "3vw 3vw",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 50% 50%, black 10%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 80% at 50% 50%, black 10%, transparent 100%)",
            }}
          />
        </motion.div>

        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-[#2F6FFF] to-[#CDAA7D] blur-[150px] rounded-full mix-blend-screen" />
        </motion.div>

        <motion.div
          style={{
            opacity: opacityPhoto,
            scale: scalePhoto,
            rotate: rotatePhoto,
            y: yPhoto,
          }}
          className="absolute z-20 w-full max-w-[360px] md:max-w-[760px] aspect-[16/9] p-3 md:p-4 bg-[#F5F5F5] rounded-sm shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
        >
          <div className="relative w-full h-full overflow-hidden border border-gray-300">
            <Image
              src="/images/julia_4_bebezinha.jpeg"
              alt="Julia Criança"
              fill
              className="object-cover sepia-[0.1]"
            />
          </div>
        </motion.div>

        <motion.div
          style={{
            opacity: obrigadaOpacity,
            y: obrigadaY,
            scale: obrigadaScale,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30"
        >
          <div className="flex flex-col items-center gap-4 md:gap-8">
            <div className="w-1 h-12 md:h-16 bg-gradient-to-t from-[#CDAA7D] to-transparent" />
            <h1 className="font-playfair text-gradient-gold text-6xl md:text-8xl lg:text-9xl leading-60 tracking-tighter drop-shadow-2xl">
              Obrigada.
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
