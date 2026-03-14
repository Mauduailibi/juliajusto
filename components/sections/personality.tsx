"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Personality() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const wolfScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const wolfOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.9, 1],
    [0, 1, 1, 0],
  );

  const opacityText1 = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const yText1 = useTransform(scrollYProgress, [0.15, 0.25], [30, 0]);

  const opacityText2 = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const yText2 = useTransform(scrollYProgress, [0.3, 0.4], [30, 0]);

  const opacityText3 = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const yText3 = useTransform(scrollYProgress, [0.45, 0.55], [30, 0]);

  const opacityText4 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const yText4 = useTransform(scrollYProgress, [0.6, 0.7], [30, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] w-full bg-[#0A0A0A]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-center px-6 md:px-12">
        <div className="absolute inset-0 pointer-events-none opacity-5 md:opacity-10 mix-blend-multiply">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, #2F6FFF 1px, transparent 1px), linear-gradient(to bottom, #2F6FFF 1px, transparent 1px)`,
              backgroundSize: "4vw 4vw",
            }}
          />
        </div>

        <div className="w-full md:w-1/2 h-[40vh] md:h-screen flex items-center justify-center relative z-10">
          <motion.div
            style={{ scale: wolfScale, opacity: wolfOpacity }}
            className="relative w-full max-w-[400px] aspect-square"
          >
            <Image
              src="/images/lobo.png"
              alt="Perfil Lobo"
              fill
              className="object-contain"
            />

            <div className="absolute top-0 right-0 font-mono text-[#8FB3FF] text-[10px] tracking-widest uppercase opacity-40">
              Profile: WOLF
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-[#8FB3FF] opacity-40" />
            <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-[#8FB3FF] opacity-40" />
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 h-[60vh] md:h-screen flex items-center justify-center relative z-20">
          <div className="flex flex-col gap-6 w-full max-w-lg">
            <motion.h3
              style={{ opacity: opacityText1, y: yText1 }}
              className="font-playfair text-4xl md:text-5xl text-white"
            >
              Método
            </motion.h3>

            <motion.h3
              style={{ opacity: opacityText2, y: yText2 }}
              className="font-playfair text-4xl md:text-5xl text-white"
            >
              Regras claras
            </motion.h3>

            <motion.h3
              style={{ opacity: opacityText3, y: yText3 }}
              className="font-playfair text-4xl md:text-5xl text-white"
            >
              Entender o porquê das coisas
            </motion.h3>

            <motion.h3
              style={{ opacity: opacityText4, y: yText4 }}
              className="font-playfair text-4xl md:text-5xl text-white"
            >
              Revisar antes de entregar
            </motion.h3>
          </div>
        </div>
      </div>
    </section>
  );
}
