import { Baby } from "@/components/sections/baby";
import { Cats } from "@/components/sections/cats";
import { Communication } from "@/components/sections/communication";
import { Dreamer } from "@/components/sections/dreamer";
import { EngineeringMind } from "@/components/sections/engineering-mind";
import { Hero } from "@/components/sections/hero";
import { Introduction } from "@/components/sections/introduction";
import { Personality } from "@/components/sections/personality";
import { Responsibility } from "@/components/sections/responsability";
import { Values } from "@/components/sections/values";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen selection:bg-[#CDAA7D] selection:text-[#0A0A0A]">
      <Hero />
      <Introduction />
      <Responsibility />
      <EngineeringMind />
      <Personality />
      <Communication />
      <Dreamer />
      <Cats />
      <Values />
      <Baby />
    </main>
  );
}
