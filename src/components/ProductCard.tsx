"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatCLP } from "@/lib/format";
import { productWhatsAppLink } from "@/lib/whatsapp";
import type { MenuItem } from "@/types/menu";

// TODO: reemplazar placeholders por fotos reales del cliente
const PLACEHOLDERS = {
  sushi: [
    "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=70",
    "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=400&q=70",
  ],
  burger: [
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=70",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=70",
  ],
  fries: [
    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=70",
    "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=400&q=70",
  ],
} as const;

const KIND_EMOJI = {
  sushi: "🍣",
  burger: "🍔",
  fries: "🍟",
} as const;

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1FA8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]";

type ImageKind = keyof typeof PLACEHOLDERS;

function normalizeCategory(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function imageKind(categoria?: string): ImageKind {
  const name = normalizeCategory(categoria ?? "");
  if (name.includes("burger") || name.includes("hamburg") || name.includes("churrasco")) {
    return "burger";
  }
  if (
    name.includes("papa") ||
    name.includes("pichanga") ||
    name.includes("french") ||
    name.includes("salchi") ||
    name.includes("alita") ||
    name.includes("aros")
  ) {
    return "fries";
  }
  return "sushi";
}

function placeholderFor(kind: ImageKind, id: string): string {
  const photos = PLACEHOLDERS[kind];
  let total = 0;
  for (let index = 0; index < id.length; index += 1) {
    total += id.charCodeAt(index);
  }
  return photos[total % photos.length];
}

export function ProductCard({ product }: { product: MenuItem }) {
  const { addItem } = useCart();
  const [level, setLevel] = useState(0);
  const kind = imageKind(product.categoria);
  const placeholder = placeholderFor(kind, product.id);
  const showEmoji = level >= 2 || (level >= 1 && !product.imagen);
  const src = product.imagen && level === 0 ? product.imagen : placeholder;

  return (
    <article className="flex h-full gap-3 rounded-2xl border border-[#2A2A2A] bg-[#141414] p-3 transition duration-200 hover:border-[#FF1FA8]/70">
      <div className="flex min-w-0 flex-1 flex-col">
        {product.es_mas_pedido || product.badge ? (
          <span className="mb-2 inline-flex w-fit rounded-full bg-[#FF1FA8] px-2.5 py-1 text-xs font-bold text-black">
            {product.badge ?? "Más pedido"}
          </span>
        ) : null}
        <h3 className="font-display text-lg font-bold leading-tight text-white">
          {product.nombre}
        </h3>
        {product.descripcion ? (
          <p className="mt-1 text-sm leading-relaxed text-[#A1A1AA]">
            {product.descripcion}
          </p>
        ) : null}
        <p className="mt-3 inline-flex w-fit rounded-full bg-[#B6FF1A] px-3 py-1 text-sm font-extrabold text-black">
          {formatCLP(product.precio)}
        </p>
        <a
          href={productWhatsAppLink(product.nombre)}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto pt-3 text-xs font-semibold text-[#D4D4D8] underline-offset-2 transition duration-200 hover:text-[#B6FF1A] hover:underline ${focusRing}`}
        >
          Pedir solo este por WhatsApp
        </a>
      </div>

      <div className="relative h-24 w-24 shrink-0">
        {showEmoji ? (
          <div
            role="img"
            aria-label={product.nombre}
            className="flex h-full w-full items-center justify-center rounded-xl bg-[linear-gradient(135deg,#FF1FA8,#FF8A3D,#FFE61F,#B6FF1A)]"
          >
            <span aria-hidden className="text-4xl">
              {KIND_EMOJI[kind]}
            </span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={product.nombre}
            width={96}
            height={96}
            loading="lazy"
            decoding="async"
            className="h-24 w-24 rounded-xl object-cover"
            onError={() => setLevel((current) => current + 1)}
          />
        )}
        <button
          type="button"
          onClick={() => addItem(product)}
          className={`absolute bottom-1 right-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-[#B6FF1A] text-black shadow-[0_0_16px_rgba(182,255,26,0.35)] transition duration-200 hover:bg-[#FFE61F] active:scale-95 ${focusRing}`}
          aria-label={`Agregar ${product.nombre} al carrito`}
        >
          <Plus className="h-5 w-5" aria-hidden />
        </button>
      </div>
    </article>
  );
}
