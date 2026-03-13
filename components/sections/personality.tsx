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

  const opacityText1 = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3],
    [0, 1, 0],
  );
  const yText1 = useTransform(scrollYProgress, [0.1, 0.3], [30, -30]);

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
          <div className="relative w-full max-w-lg">
            <motion.div
              style={{
                opacity: opacityText1,
                y: yText1,
                pointerEvents: opacityText1.get() > 0 ? "auto" : "none",
              }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <p className="font-mono text-[#2F6FFF] text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-[#2F6FFF]" /> Avaliação
              </p>
              <h3 className="font-playfair text-4xl md:text-5xl text-white leading-tight">
                &quot;Quando fizemos o teste de perfil, o meu resultado foi{" "}
                <span className="text-[#2F6FFF]">Lobo</span>...&quot;
              </h3>
              <p className="font-inter text-gray-300 text-lg mt-6 opacity-80">
                &quot;...e quando eu li a descrição, fez muito sentido para
                mim.&quot;
              </p>
            </motion.div>

            <motion.div
              style={{
                opacity: opacityText2,
                y: yText2,
                pointerEvents: opacityText2.get() > 0 ? "auto" : "none",
              }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <h3 className="font-playfair text-3xl md:text-4xl text-white leading-tight mb-6">
                &quot;Eu gosto de método, de regras claras e de entender o
                porquê das coisas.&quot;
              </h3>
              <p className="font-inter text-gray-300 text-lg leading-relaxed">
                Sou aquela pessoa que revisa o trabalho várias vezes antes de
                entregar e que tenta olhar o processo inteiro para garantir que
                tudo está funcionando.
              </p>
            </motion.div>

            <motion.div
              style={{
                opacity: opacityText3,
                y: yText3,
                pointerEvents: opacityText3.get() > 0 ? "auto" : "none",
              }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <p className="font-mono text-[#CDAA7D] text-xs tracking-widest uppercase mb-4">
                {"//"} O Desafio
              </p>
              <h3 className="font-playfair text-3xl md:text-4xl text-white leading-tight mb-6">
                &quot;Eu tenho uma certa resistência interna a mudanças muito
                bruscas.&quot;
              </h3>
              <p className="font-inter text-gray-300 text-lg leading-relaxed">
                Eu me adapto quando é necessário, porque a vida exige, mas eu
                funciono melhor quando existe{" "}
                <span className="font-semibold text-white">
                  planejamento, estrutura e direção
                </span>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
