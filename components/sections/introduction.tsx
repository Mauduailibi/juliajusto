"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Introduction() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const text = "Eu sou a irmã mais velha de três filhas.";
  const words = text.split(" ");

  const yPhotoBaby = useTransform(scrollYProgress, [0.1, 0.8], ["20%", "-15%"]);
  const opacityPhotoBaby = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.8, 1],
    [0, 1, 1, 0],
  );
  const scalePhotoBaby = useTransform(scrollYProgress, [0.1, 0.8], [0.9, 1.05]);

  const yPhotoSisters = useTransform(
    scrollYProgress,
    [0.25, 0.9],
    ["30%", "-20%"],
  );
  const opacityPhotoSisters = useTransform(
    scrollYProgress,
    [0.25, 0.55, 0.9, 1],
    [0, 1, 1, 0],
  );
  const scalePhotoSisters = useTransform(
    scrollYProgress,
    [0.25, 0.9],
    [0.95, 1.1],
  );

  const opacityTextContainer = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] w-full bg-[#0A0A0A]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            style={{ opacity: opacityPhotoSisters }}
            className="w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-[#CDAA7D] opacity-[0.08] blur-[150px] rounded-full transition-opacity duration-700"
          />
        </div>

        <motion.div
          style={{
            y: yPhotoBaby,
            opacity: opacityPhotoBaby,
            scale: scalePhotoBaby,
          }}
          className="absolute left-[5%] md:left-[10%] top-[15%] md:top-[20%] w-[160px] md:w-[280px] aspect-[3/4] z-10"
        >
          <div className="w-full h-full relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(205,170,125,0.1)]">
            <Image
              src="/images/pais_2_bebezinha.jpeg"
              alt="Julia na infância"
              fill
              className="object-cover sepia-[0.3] hover:sepia-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            {/* <p className="absolute bottom-4 left-4 font-playfair text-[#F5F5F5] text-sm md:text-lg italic opacity-80">
              Bebezinha
            </p> */}
          </div>
        </motion.div>

        <motion.div
          style={{
            y: yPhotoSisters,
            opacity: opacityPhotoSisters,
            scale: scalePhotoSisters,
          }}
          className="absolute right-[5%] md:right-[10%] bottom-[15%] md:bottom-[10%] w-[200px] md:w-[380px] aspect-[4/5] z-30"
        >
          <div className="w-full h-full relative rounded-2xl overflow-hidden border border-[#CDAA7D]/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            <Image
              src="/images/irmas_1.jpeg"
              alt="Julia e suas irmãs"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              {/* <p className="font-mono text-[#CDAA7D] text-[10px] uppercase tracking-widest mb-1">
                O Elo
              </p>
              <p className="font-playfair text-[#F5F5F5] text-lg md:text-xl">
                Nossa fundação
              </p> */}
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: opacityTextContainer }}
          className="relative z-40 max-w-4xl mx-auto px-6 text-center mix-blend-difference"
        >
          <h2 className="font-playfair text-4xl md:text-6xl lg:text-8xl leading-[1.15] tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-2 md:gap-x-5 md:gap-y-4">
            {words.map((word, i) => {
              const start = (i / words.length) * 0.5;
              const end = start + 0.5 / words.length;

              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0.1, 1],
              );
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(scrollYProgress, [start, end], [30, 0]);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const filter = useTransform(
                scrollYProgress,
                [start, end],
                ["blur(12px)", "blur(0px)"],
              );

              return (
                <motion.span
                  key={i}
                  style={{ opacity, y, filter }}
                  className="text-[#F5F5F5]"
                >
                  {word}
                </motion.span>
              );
            })}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
