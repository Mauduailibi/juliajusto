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

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.05, 0.15, 0.25],
    [0, 1, 0],
  );
  const yText1 = useTransform(scrollYProgress, [0.05, 0.25], [30, -30]);

  const opacityText2 = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55],
    [0, 1, 0],
  );
  const yText2 = useTransform(scrollYProgress, [0.35, 0.55], [30, -30]);

  const opacityText3 = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.9],
    [0, 1, 0],
  );
  const yText3 = useTransform(scrollYProgress, [0.65, 0.9], [30, -30]);

  const opacityTextAll = useTransform(scrollYProgress, [0.85, 0.92], [1, 0]);
  const vignetteOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);

  const imgOpacity = useTransform(scrollYProgress, [0.85, 1], [0.5, 1]);
  const imgSaturation = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const imgBlur = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  const imgFilter = useTransform(
    [imgSaturation, imgBlur],
    (values: number[]) => `grayscale(${1 - values[0]}) blur(${values[1]}px)`,
  );

  const yImg1 = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    ["20%", "-10%", "-120%"],
  );
  const yImg2 = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    ["40%", "-10%", "0%"],
  );
  const yImg3 = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    ["10%", "-20%", "-50%"],
  );
  const yImg4 = useTransform(
    scrollYProgress,
    [0, 0.85, 1],
    ["50%", "10%", "80%"],
  );

  const xImg1 = useTransform(scrollYProgress, [0.85, 1], ["0%", "120%"]);
  const xImg2 = useTransform(scrollYProgress, [0.85, 1], ["0%", "-90%"]);
  const xImg3 = useTransform(scrollYProgress, [0.85, 1], ["0%", "-30%"]);
  const xImg4 = useTransform(scrollYProgress, [0.85, 1], ["0%", "20%"]);

  const scaleImg = useTransform(scrollYProgress, [0.85, 1], [1, 1.35]);

  return (
    <section
      ref={containerRef}
      className="relative h-[380vh] w-full bg-[#0A0A0A] py-12"
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
            className="absolute bottom-[20%] left-[10%] md:left-[5%] w-[160px] md:w-[400px] aspect-[16/9] rounded-2xl overflow-hidden hidden md:block"
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
              opacity: opacityText1,
              y: yText1,
              pointerEvents: opacityText1.get() > 0 ? "auto" : "none",
            }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-3xl -z-10" />
            <h3 className="font-playfair text-4xl md:text-6xl text-[#F5F5F5] leading-tight mb-6 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]">
              &quot;Por outro lado, uma coisa que eu valorizo muito é
              escutar.&quot;
            </h3>
            <p className="font-mono text-[#CDAA7D] text-sm tracking-widest uppercase">
              A Arte da Comunicação
            </p>
          </motion.div>

          <motion.div
            style={{
              opacity: opacityText2,
              y: yText2,
              pointerEvents: opacityText2.get() > 0 ? "auto" : "none",
            }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-3xl -z-10" />
            <h3 className="font-playfair text-3xl md:text-5xl text-[#F5F5F5] leading-tight mb-8 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]">
              &quot;Eu realmente gosto de ouvir as pessoas e entender o ponto de
              vista delas.&quot;
            </h3>
            <p className="font-inter text-[#C8C8C8] text-lg md:text-xl leading-relaxed max-w-2xl">
              &quot;Talvez por isso uma das coisas que mais me incomoda seja a
              falta de comunicação ou quando alguém não tem clareza no que está
              fazendo. Eu acredito muito que bons resultados acontecem quando as
              pessoas conseguem se entender bem.&quot;
            </p>
          </motion.div>

          <motion.div
            style={{
              opacity: opacityText3,
              y: yText3,
              pointerEvents: opacityText3.get() > 0 ? "auto" : "none",
            }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-3xl -z-10" />
            <div className="w-16 h-[1px] bg-[#2F6FFF] mb-8" />
            <h3 className="font-playfair text-3xl md:text-5xl text-[#F5F5F5] leading-tight mb-8 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]">
              &quot;Outra característica importante minha é que eu tenho uma
              autoestima muito sólida. É difícil me abalar.&quot;
            </h3>
            <p className="font-inter text-[#C8C8C8] text-lg md:text-xl leading-relaxed max-w-2xl">
              &quot;Quando surgem desafios ou críticas, eu procuro usar isso
              como aprendizado e seguir em frente.&quot;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
