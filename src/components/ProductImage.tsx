"use client";

import Image from "next/image";
import { useState } from "react";

const FALLBACK_EMOJI: Record<string, string> = {
  Entradas: "🥟",
  Gohan: "🍚",
  "Sushi sin arroz": "🍣",
  "Sushis Especiales": "🍣",
  "Tablas de Sushi": "🍱",
};

type ProductImageProps = {
  src?: string;
  alt: string;
  categoria?: string;
  priority?: boolean;
  className?: string;
};

export function ProductImage({
  src,
  alt,
  categoria,
  priority = false,
  className = "",
}: ProductImageProps) {
  const [failed, setFailed] = useState(false);
  const showFallback = !src || failed;

  return (
    <div
      className={`relative overflow-hidden bg-coral ${className}`}
      aria-hidden={showFallback}
    >
      {showFallback ? (
        <div className="flex h-full w-full items-center justify-center">
          <span className="select-none text-6xl drop-shadow-sm">
            {FALLBACK_EMOJI[categoria ?? ""] ?? "🍣"}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
