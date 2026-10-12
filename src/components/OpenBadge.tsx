"use client";

import { useEffect, useState } from "react";
import { getOpenStatus } from "@/lib/hours";

export function OpenBadge({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(
    null,
  );

  useEffect(() => {
    const update = () => setStatus(getOpenStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2A2A2A] bg-[#1C1C1C] px-3 py-1 text-xs font-semibold text-[#A1A1AA]">
        <span className="h-2 w-2 rounded-full bg-[#A1A1AA]" aria-hidden />
        Horario Iquique
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
        status.open
          ? "border-[#B6FF1A] bg-[#B6FF1A] text-black"
          : "border-[#2A2A2A] bg-[#1C1C1C] text-[#D4D4D8]"
      }`}
      role="status"
      aria-live="polite"
    >
      <span
        className={`h-2 w-2 rounded-full ${status.open ? "bg-black" : "bg-[#A1A1AA]"}`}
        aria-hidden
      />
      <span className={compact ? "hidden sm:inline" : undefined}>
        {status.label}
      </span>
      {compact ? (
        <span className="sm:hidden">{status.open ? "Abierto" : "Cerrado"}</span>
      ) : null}
    </span>
  );
}
