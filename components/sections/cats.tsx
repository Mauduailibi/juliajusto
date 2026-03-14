"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Cats() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacityText = useTransform(
    scrollYProgress,
    [0.05, 0.1, 0.85, 0.95],
    [0, 1, 1, 0],
  );

  const yText = useTransform(scrollYProgress, [0.05, 0.95], [30, -30]);

  const yImg1 = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);
  const yImg2 = useTransform(scrollYProgress, [0, 1], ["50%", "-20%"]);
  const yImg3 = useTransform(scrollYProgress, [0, 1], ["30%", "-50%"]);

  const img1Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.9, 1],
    [0, 1, 1, 0],
  );
  const img2Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.9, 1],
    [0, 1, 1, 0],
  );
  const img3Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.9, 1],
    [0, 1, 1, 0],
  );

  const paw1Opacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 0.15]);
  const paw2Opacity = useTransform(scrollYProgress, [0.4, 0.45], [0, 0.15]);
  const paw3Opacity = useTransform(scrollYProgress, [0.7, 0.75], [0, 0.15]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] w-full bg-[#0A0A0A]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-[#E6D2B5] opacity-[0.04] blur-[120px] rounded-full" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <motion.svg
            style={{ opacity: paw1Opacity }}
            className="absolute top-[20%] left-[20%] w-12 h-12 text-[#CDAA7D] -rotate-12"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 8.5c-1.38 0-2.5-1.34-2.5-3S10.62 2.5 12 2.5 14.5 3.84 14.5 5.5 13.38 8.5 12 8.5zm-5.5 1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-5.5 12c-3.5 0-6.5-2.24-6.5-5 0-1.74 1.35-3.5 3.5-4.5 1.13-.53 2.53-.78 3-.78.47 0 1.87.25 3 .78 2.15 1 3.5 2.76 3.5 4.5 0 2.76-3 5-6.5 5z" />
          </motion.svg>

          <motion.svg
            style={{ opacity: paw2Opacity }}
            className="absolute top-[40%] right-[25%] w-10 h-10 text-[#CDAA7D] rotate-12"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 8.5c-1.38 0-2.5-1.34-2.5-3S10.62 2.5 12 2.5 14.5 3.84 14.5 5.5 13.38 8.5 12 8.5zm-5.5 1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-5.5 12c-3.5 0-6.5-2.24-6.5-5 0-1.74 1.35-3.5 3.5-4.5 1.13-.53 2.53-.78 3-.78.47 0 1.87.25 3 .78 2.15 1 3.5 2.76 3.5 4.5 0 2.76-3 5-6.5 5z" />
          </motion.svg>

          <motion.svg
            style={{ opacity: paw3Opacity }}
            className="absolute bottom-[20%] left-[30%] w-14 h-14 text-[#CDAA7D] -rotate-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 8.5c-1.38 0-2.5-1.34-2.5-3S10.62 2.5 12 2.5 14.5 3.84 14.5 5.5 13.38 8.5 12 8.5zm-5.5 1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-5.5 12c-3.5 0-6.5-2.24-6.5-5 0-1.74 1.35-3.5 3.5-4.5 1.13-.53 2.53-.78 3-.78.47 0 1.87.25 3 .78 2.15 1 3.5 2.76 3.5 4.5 0 2.76-3 5-6.5 5z" />
          </motion.svg>
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            style={{ opacity: img1Opacity, y: yImg1 }}
            className="absolute top-[15%] left-[5%] md:left-[10%] w-[150px] md:w-[220px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#CDAA7D]/20 -rotate-3"
          >
            <Image
              src="/images/gatinhos_1_peleguinho.jpeg"
              alt="Peleguinho"
              fill
              className="object-cover sepia-[0.2]"
            />
          </motion.div>

          <motion.div
            style={{ opacity: img2Opacity, y: yImg2 }}
            className="absolute bottom-[15%] right-[5%] md:right-[15%] w-[180px] md:w-[260px] aspect-square rounded-3xl overflow-hidden shadow-2xl border border-[#CDAA7D]/20 rotate-6"
          >
            <Image
              src="/images/gatinhos_2_manteguinha.jpeg"
              alt="Manteguinha"
              fill
              className="object-cover sepia-[0.2]"
            />
          </motion.div>

          <motion.div
            style={{ opacity: img3Opacity, y: yImg3 }}
            className="absolute top-[25%] right-[10%] md:right-[5%] w-[130px] md:w-[190px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-[#CDAA7D]/20 rotate-12 hidden md:block"
          >
            <Image
              src="/images/gatinhos_3_phoebe.jpeg"
              alt="Phoebe"
              fill
              className="object-cover sepia-[0.2]"
            />
          </motion.div>
        </div>

        <div className="relative z-20 w-full max-w-4xl px-6 text-center">
          <motion.div
            style={{ opacity: opacityText, y: yText }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <h2 className="font-playfair text-4xl md:text-4xl text-[#F5F5F5] drop-shadow-2xl mb-6">
              Meus gatos:
            </h2>

            <div className="font-playfair text-3xl md:text-5xl text-[#CDAA7D] flex flex-col gap-2">
              <span>Phoebe</span>
              <span>Peleguinho</span>
              <span>Manteguinha</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
