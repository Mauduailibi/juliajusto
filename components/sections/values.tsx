"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Values() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacityIntro = useTransform(
    scrollYProgress,
    [0.0, 0.1, 0.2, 0.25],
    [0, 1, 1, 0],
  );
  const yIntro = useTransform(scrollYProgress, [0.0, 0.25], [30, -30]);

  const opacityMain = useTransform(
    scrollYProgress,
    [0.25, 0.35, 0.65, 0.75],
    [0, 1, 1, 0],
  );

  const yCard1 = useTransform(scrollYProgress, [0.25, 0.35], [100, 0]);
  const yCard2 = useTransform(scrollYProgress, [0.3, 0.4], [100, 0]);
  const yCard3 = useTransform(scrollYProgress, [0.35, 0.45], [100, 0]);

  const scaleMain = useTransform(
    scrollYProgress,
    [0.25, 0.65, 0.75],
    [0.95, 1, 0.95],
  );

  const opacityOutro = useTransform(
    scrollYProgress,
    [0.75, 0.85, 0.95, 1],
    [0, 1, 1, 0],
  );
  const yOutro = useTransform(scrollYProgress, [0.75, 1], [30, -30]);

  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[350vh] w-full bg-[#0A0A0A]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ y: gridY }}
          className="absolute inset-0 pointer-events-none opacity-20"
        >
          <div
            className="w-full h-[200%] absolute top-[-50%]"
            style={{
              backgroundImage: `linear-gradient(to right, #1F3A5F 1px, transparent 1px), linear-gradient(to bottom, #1F3A5F 1px, transparent 1px)`,
              backgroundSize: "4vw 4vw",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
            }}
          />
        </motion.div>

        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-[10%] left-[5%] font-mono text-[#2F6FFF] text-[10px] tracking-[0.2em] opacity-60">
            <div>SYS.CORE_VALUES</div>
            <div>
              STATUS: <span className="text-[#CDAA7D]">ALIGNED</span>
            </div>
          </div>
          <div className="absolute bottom-[10%] right-[5%] font-mono text-[#2F6FFF] text-[10px] tracking-[0.2em] opacity-60 text-right">
            <div>INTEGRITY_CHECK</div>
            <div>PASS</div>
          </div>
        </div>

        <div className="relative z-20 w-full max-w-6xl px-6 text-center">
          <motion.div
            style={{
              opacity: opacityMain,
              scale: scaleMain,
              pointerEvents: opacityMain.get() > 0 ? "auto" : "none",
            }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <h3 className="font-playfair text-3xl md:text-5xl text-[#F5F5F5] leading-tight mb-16 drop-shadow-2xl">
              Os valores que me definem
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-5xl">
              <motion.div
                style={{ y: yCard1 }}
                className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#1F3A5F] rounded-xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2F6FFF]" />
                <div className="absolute top-4 right-4 font-mono text-[#2F6FFF] text-[10px] opacity-50">
                  V_01
                </div>
                <div className="flex flex-col items-start text-left mt-8">
                  <h4 className="font-playfair text-3xl md:text-4xl text-[#F5F5F5]">
                    Honestidade
                  </h4>
                </div>
              </motion.div>

              <motion.div
                style={{ y: yCard2 }}
                className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#CDAA7D]/50 rounded-xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(205,170,125,0.1)]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#CDAA7D]/10 to-transparent opacity-50" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#CDAA7D]" />
                <div className="absolute top-4 right-4 font-mono text-[#CDAA7D] text-[10px] opacity-80">
                  V_02
                </div>
                <div className="flex flex-col items-start text-left mt-8 relative z-10">
                  <h4 className="font-playfair text-4xl md:text-5xl text-[#FFD89B]">
                    Lealdade
                  </h4>
                </div>
              </motion.div>

              <motion.div
                style={{ y: yCard3 }}
                className="bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#1F3A5F] rounded-xl p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2F6FFF]" />
                <div className="absolute top-4 right-4 font-mono text-[#2F6FFF] text-[10px] opacity-50">
                  V_03
                </div>
                <div className="flex flex-col items-start text-left mt-8">
                  <h4 className="font-playfair text-3xl md:text-4xl text-[#F5F5F5]">
                    Esperança
                  </h4>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            style={{
              opacity: opacityOutro,
              y: yOutro,
              pointerEvents: opacityOutro.get() > 0 ? "auto" : "none",
            }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="max-w-3xl text-center">
              <h3 className="font-playfair text-3xl md:text-5xl text-[#F5F5F5] leading-tight mb-6">
                Sempre acredito que
              </h3>
              <p className="font-inter text-[#C8C8C8] text-xl md:text-2xl">
                as coisas podem melhorar.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
