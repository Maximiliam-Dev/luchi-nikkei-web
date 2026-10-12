"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { formatNumberCL } from "@/lib/format";

const STATS = [
  { value: 14, suffix: "", label: "opiniones" },
  { value: 5, suffix: "/5", label: "Facebook" },
  { value: 4, suffix: ",5", label: "Google" },
] as const;

const brandText =
  "bg-[linear-gradient(90deg,#FF1FA8,#FF8A3D,#FFE61F,#B6FF1A)] bg-clip-text text-transparent";

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (reduceMotion) {
          setShown(value);
          return;
        }
        const start = performance.now();
        const duration = 900;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          setShown(Math.round(value * progress));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-[#2A2A2A] bg-[#1C1C1C] px-3 py-6 text-center"
    >
      <p className="font-display text-4xl font-extrabold italic text-[#FF1FA8]">
        {formatNumberCL(shown)}
        {suffix}
      </p>
      <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#A1A1AA]">
        {label}
      </p>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="nosotros" className="scroll-mt-24 bg-[#0A0A0A] px-4 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-[#2A2A2A]">
          <Image
            src="/images/gohan-acevichado.jpg"
            alt="Gohan de Luchi Nikkei"
            width={900}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#FF1FA8]">
            Nosotros
          </p>
          <h2
            className={`mt-2 font-display text-4xl font-extrabold italic uppercase tracking-tight sm:text-5xl ${brandText}`}
          >
            Luchi Nikkei
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#D4D4D8] sm:text-lg">
            En Luchi Nikkei juntamos sushi nikkei, burgers y churrascos. Cada
            pedido se prepara en Juan Martínez 1946, Iquique, para retirar en el
            local o pedir por WhatsApp.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
            Abrimos de lunes a sábado de 17:00 a 00:00. El domingo atendemos de
            00:00 a 12:00 y de 17:00 a 00:00.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
