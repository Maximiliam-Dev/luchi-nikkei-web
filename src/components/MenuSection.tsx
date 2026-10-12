"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { FILTROS_MENU, filterMenu } from "@/types/menu";
import type { FiltroMenu, MenuItem } from "@/types/menu";

const PRESENTACION_MENU = [
  { match: "promos de sushi", label: "Promos de Sushi", emoji: "🍣" },
  { match: "burgers y churrascos", label: "Burgers y Churrascos", emoji: "🍔" },
  { match: "para compartir", label: "Para Compartir", emoji: "🍟" },
  { match: "premium rolls", label: "Premium Rolls", emoji: "⭐" },
  { match: "gohan y piqueos", label: "Gohan y Piqueos", emoji: "🍱" },
  { match: "hand rolls y extras", label: "Hand Rolls y Extras", emoji: "🥢" }
] as const;

const brandText =
  "bg-[linear-gradient(90deg,#FF1FA8,#FF8A3D,#FFE61F,#B6FF1A)] bg-clip-text text-transparent";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1FA8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]";

type MenuGroup = {
  id: string;
  label: string;
  emoji: string;
  match: string;
  products: MenuItem[];
};

function normalizeCategory(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function buildGroups(products: MenuItem[]): MenuGroup[] {
  const buckets = new Map<string, MenuItem[]>();
  const order: string[] = [];

  for (const product of products) {
    const raw = product.categoria?.trim() || "Otros";
    const key = normalizeCategory(raw);
    const bucket = buckets.get(key);
    if (bucket) {
      bucket.push(product);
    } else {
      buckets.set(key, [product]);
      order.push(key);
    }
  }

  const used = new Set<string>();
  const groups: MenuGroup[] = [];

  for (const entry of PRESENTACION_MENU) {
    const items = buckets.get(entry.match);
    if (!items || items.length === 0) continue;
    used.add(entry.match);
    groups.push({
      id: entry.match,
      label: entry.label,
      emoji: entry.emoji,
      match: entry.match,
      products: items,
    });
  }

  for (const key of order) {
    if (used.has(key)) continue;
    const items = buckets.get(key);
    if (!items || items.length === 0) continue;
    groups.push({
      id: key,
      label: items[0]?.categoria?.trim() || "Otros",
      emoji: "🍽️",
      match: key,
      products: items,
    });
  }

  return groups;
}

function NotaPromos() {
  return (
    <p className="rounded-3xl bg-[#FFE61F] px-4 py-3 text-center text-sm font-semibold leading-relaxed text-black">
      Cualquier cambio o agregado por roll, proteína y envoltura $2.000 · vegetales $1.000
    </p>
  );
}

export function MenuSection({ items }: { items: MenuItem[] }) {
  const [tab, setTab] = useState<FiltroMenu>("Menú Completo");
  const visible = useMemo(() => filterMenu(items, tab), [items, tab]);
  const groups = buildGroups(visible);
  const hasPromos = groups.some((group) => group.match === "promos de sushi");

  return (
    <section id="menu" className="scroll-mt-24 bg-[#0A0A0A] px-4 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2
          className={`font-display text-4xl font-extrabold italic uppercase tracking-tight sm:text-5xl ${brandText}`}
        >
          Nuestra Carta
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#D4D4D8] sm:text-lg">
          Sushi nikkei, burgers, churrascos y picoteos. Elige, arma tu pedido y agrégalo al carrito.
        </p>
        {!hasPromos && tab === "Menú Completo" ? (
          <div className="mt-5">
            <NotaPromos />
          </div>
        ) : null}

        {items.length === 0 ? (
          <p className="mt-10 text-center text-[#A1A1AA]">
            El menú se está actualizando. Vuelve en un momento.
          </p>
        ) : (
          <>
            <div
              className="sticky top-[5.25rem] z-30 -mx-4 mt-8 bg-[#0A0A0A]/95 px-4 py-3 backdrop-blur"
              role="tablist"
              aria-label="Categorías del menú"
            >
              <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {FILTROS_MENU.map((filtro) => {
                  const selected = tab === filtro;
                  return (
                    <button
                      key={filtro}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setTab(filtro)}
                      className={`min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 active:scale-95 ${focusRing} ${
                        selected
                          ? "border-[#FF1FA8] bg-[#FF1FA8] text-black shadow-[0_0_20px_rgba(255,31,168,0.35)]"
                          : "border-[#2A2A2A] bg-[#1C1C1C] text-[#D4D4D8] hover:border-[#FF1FA8] hover:text-white"
                      }`}
                    >
                      {filtro}
                    </button>
                  );
                })}
              </div>
            </div>

            <div role="tabpanel" className="mt-8 flex flex-col gap-12">
              {visible.length === 0 ? (
                <p className="text-center text-[#A1A1AA]">
                  No hay productos en esta categoría.
                </p>
              ) : (
                groups.map((group) => (
                  <section
                    key={group.id}
                    id={`categoria-${group.id.replace(/[^a-z0-9]+/g, "-")}`}
                    className="scroll-mt-36"
                    aria-labelledby={`titulo-${group.id.replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    <div className="flex items-end justify-between gap-4">
                      <h3
                        id={`titulo-${group.id.replace(/[^a-z0-9]+/g, "-")}`}
                        className="font-display text-2xl font-extrabold italic uppercase tracking-tight text-white sm:text-3xl"
                      >
                        <span aria-hidden className="mr-2">
                          {group.emoji}
                        </span>
                        {group.label}
                      </h3>
                    </div>
                    <div
                      aria-hidden
                      className="mt-3 h-0.5 rounded-full bg-[linear-gradient(90deg,#FF1FA8,#FF8A3D,#FFE61F,#B6FF1A)]"
                    />
                    {group.match === "promos de sushi" ? (
                      <div className="mt-4">
                        <NotaPromos />
                      </div>
                    ) : null}
                    <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-2">
                      {group.products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </section>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
