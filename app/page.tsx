"use client";
import TextType from "@/components/react-bits/text-type";
import dynamic from "next/dynamic";

const FaultyTerminal = dynamic(
  () => import("@/components/react-bits/faulty-terminal"),
  { ssr: false }
);

const techStack = [
  "TypeScript",
  "Next.js",
  "React",
  "TailwindCSS",
  "Supabase",
  "Prisma",
  "Flutter",
  "Dart",
  "Sql"
];

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-row justify-between items-center md:py-12  sm:py-6 sm:px-18  p-3 gap-10 bg-[#b4b8a2] shadow-[inset_1px_1px_5px_rgba(0,0,0,0.7)]">
      <div className="h-full lg:block hidden w-48 bg-linear-to-bl from-[#979b88] to-[#b4b8a2] rounded-3xl shadow-[inset_1px_1px_6px_rgba(0,0,0,0.7)] p-8" />

      <div className="w-full h-full relative rounded-3xl shadow-[1px_1px_6px_rgba(0,0,0,0.7)] overflow-hidden">
        <FaultyTerminal
          scale={3}
          gridMul={[2, 1]}
          digitSize={1}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#A7EF9E"
          mouseReact
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={0.6}
        />

        <div className="absolute inset-0 flex justify-center items-center pointer-events-none px-4">
          <div className="pointer-events-auto w-full sm:max-w-5xl bg-black/70 backdrop-blur-md  text-xl rounded-2xl p-6 shadow-xl text-[#A7EF9E] font-mono border border-[#A7EF9E]/30 space-y-6">
            <h1 className="text-5xl tracking-wider underline">Rafał Małycha</h1>

            <div className="space-y-1">
              <p className="">
                <span className="opacity-60 ">birth date:</span> 03.08.2009
              </p>
              <p className="">
                <span className="opacity-60 ">phone:</span> +48 796 150 224
              </p>
              <p>
                <span className="opacity-60">email:</span>{" "}
                rafal.malycha101@gmail.com
              </p>
              <p>
                <span className="opacity-60">github:</span>{" "}
                <a
                  href="https://github.com/RafikoZZ55"
                  target="_blank"
                  className="hover:underline"
                >
                  RafikZZ555
                </a>
              </p>
            </div>

            <div>
              <p className="opacity-60 mb-2">tech stack</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {techStack.map(tech =>
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md border border-[#A7EF9E]/30 bg-black/40"
                  >
                    {tech}
                  </span>
                )}
              </div>
            </div>

            <div>
              <p className="opacity-60 mb-1 text-xl">README</p>
              <TextType
                text={[
                  "I develop modern web applications using the latest technologies. Currently, I am working with Flutter to build cross-platform apps. I have strong skills in object-oriented programming (OOP) and creating well-structured, maintainable code."
                ]}
                className="h-25"
                typingSpeed={50}
                pauseDuration={100000500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={0}
                cursorBlinkDuration={0.5}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-full lg:block hidden w-48 bg-linear-to-bl from-[#979b88] to-[#b4b8a2] rounded-3xl shadow-[inset_1px_1px_6px_rgba(0,0,0,0.7)] p-8" />
    </main>
  );
}
