"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Communication() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacityText = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.4],
    [0, 1, 0],
  );
  const yText = useTransform(scrollYProgress, [0.05, 0.4], [30, -30]);

  const opacityTextAll = useTransform(scrollYProgress, [0.35, 0.45], [1, 0]);
  const vignetteOpacity = useTransform(scrollYProgress, [0.35, 0.5], [1, 0]);

  const imgOpacity = useTransform(scrollYProgress, [0.35, 1], [0.5, 1]);
  const imgSaturation = useTransform(scrollYProgress, [0.35, 1], [0, 1]);
  const imgBlur = useTransform(scrollYProgress, [0.35, 1], [1, 0]);

  const imgFilter = useTransform(
    [imgSaturation, imgBlur],
    (values: number[]) => `grayscale(${1 - values[0]}) blur(${values[1]}px)`,
  );

  const yImg1 = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    ["20%", "-10%", "-140%"],
  );
  const yImg2 = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    ["40%", "-10%", "0%"],
  );
  const yImg3 = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    ["10%", "-20%", "0%"],
  );
  const yImg4 = useTransform(
    scrollYProgress,
    [0, 0.35, 1],
    ["50%", "10%", "60%"],
  );

  const xImg1 = useTransform(scrollYProgress, [0.35, 1], ["0%", "150%"]);
  const xImg2 = useTransform(scrollYProgress, [0.35, 1], ["0%", "-110%"]);
  const xImg3 = useTransform(scrollYProgress, [0.35, 1], ["0%", "-50%"]);
  const xImg4 = useTransform(scrollYProgress, [0.35, 1], ["0%", "10%"]);

  const scaleImg = useTransform(scrollYProgress, [0.35, 1], [1, 1.35]);

  return (
    <section
      ref={containerRef}
      className="relative h-[260vh] w-full bg-[#0A0A0A] py-12"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            style={{
              y: yImg4,
              x: xImg4,
              scale: scaleImg,
              opacity: imgOpacity,
              filter: imgFilter,
            }}
            className="absolute top-[10%] left-[5%] md:left-[10%] w-[180px] md:w-[280px] aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/amigos_1_bel_e_clara.jpeg"
              alt="Amigos"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            style={{
              y: yImg2,
              x: xImg2,
              scale: scaleImg,
              opacity: imgOpacity,
              filter: imgFilter,
            }}
            className="absolute bottom-[5%] right-[5%] md:right-[15%] w-[200px] md:w-[300px] aspect-square rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/amigos_2_pablo.jpeg"
              alt="Amigos"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            style={{
              y: yImg3,
              x: xImg3,
              scale: scaleImg,
              opacity: imgOpacity,
              filter: imgFilter,
            }}
            className="absolute top-[40%] right-[10%] md:right-[5%] w-[150px] md:w-[200px] aspect-[3/4] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/amigos_3_raissy.jpeg"
              alt="Amigos"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            style={{
              y: yImg1,
              x: xImg1,
              scale: scaleImg,
              opacity: imgOpacity,
              filter: imgFilter,
            }}
            className="absolute bottom-[20%] left-[10%] md:left-[5%] w-[160px] md:w-[360px] aspect-[16/9] rounded-2xl overflow-hidden hidden md:block"
          >
            <Image
              src="/images/amigos_4.jpeg"
              alt="Amigos"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: vignetteOpacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0A0A0A_75%)] z-10 pointer-events-none"
        />

        <motion.div
          style={{ opacity: opacityTextAll }}
          className="relative z-20 w-full max-w-4xl px-6 text-center"
        >
          <motion.div
            style={{
              opacity: opacityText,
              y: yText,
            }}
            className="flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-3xl -z-10" />

            <h3 className="font-playfair text-4xl md:text-6xl text-[#F5F5F5] leading-tight mb-6 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]">
              Gosto de entender o ponto de vista das pessoas. Uma das coisas que
              mais me incomoda é a falta de comunicação.
            </h3>

            <p className="font-mono text-[#CDAA7D] text-sm tracking-widest uppercase">
              Escutar
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
