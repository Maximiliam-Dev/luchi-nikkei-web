"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { OpenBadge } from "@/components/OpenBadge";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { useCart } from "@/context/CartContext";
import { consultWhatsAppLink } from "@/lib/whatsapp";

const LINKS = [
  { href: "#menu", label: "Menú" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#contacto", label: "Contacto" },
];

const brandText =
  "bg-[linear-gradient(90deg,#FF1FA8,#FF8A3D,#FFE61F,#B6FF1A)] bg-clip-text text-transparent";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1FA8] focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const iconButton =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2A2A2A] bg-[#1C1C1C] text-white transition duration-200 hover:border-[#FF1FA8] hover:shadow-[0_0_20px_rgba(255,31,168,0.35)] active:scale-95";

export function Navbar() {
  const { count, openCart } = useCart();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-black/80 text-white backdrop-blur">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3"
        aria-label="Principal"
      >
        <a
          href="#inicio"
          className={`flex min-h-11 items-center gap-2 rounded-full ${focusRing}`}
        >
          <Image
            src="/logo.png"
            alt="Luchi Nikkei"
            width={511}
            height={511}
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            priority
          />
          <span className="font-display text-sm font-extrabold italic uppercase leading-tight tracking-tight sm:text-lg">
            <span className={`block ${brandText}`}>Luchi Nikkei</span>
            <span className="block font-sans text-[11px] font-semibold normal-case tracking-wide text-[#A1A1AA] sm:text-xs">
              Burger · Sushi
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold text-[#D4D4D8] transition duration-200 hover:text-[#FF1FA8] ${focusRing}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <OpenBadge compact />
          <button
            type="button"
            onClick={openCart}
            className={`relative ${iconButton} ${focusRing}`}
            aria-label={`Abrir carrito, ${count} productos`}
          >
            <ShoppingBag className="h-5 w-5" aria-hidden />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF1FA8] px-1 text-[11px] font-bold text-black">
                {count}
              </span>
            ) : null}
          </button>
          <a
            href={consultWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden min-h-11 items-center gap-2 rounded-full bg-[#B6FF1A] px-4 py-2 text-sm font-bold text-black transition duration-200 hover:shadow-[0_0_20px_rgba(182,255,26,0.35)] active:scale-95 md:inline-flex ${focusRing}`}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedir por WhatsApp
          </a>
          <button
            type="button"
            className={`${iconButton} lg:hidden ${focusRing}`}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="menu-movil"
          className="border-t border-[#2A2A2A] bg-[#0A0A0A] px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-2xl px-3 py-3 text-lg font-semibold text-white transition duration-200 hover:bg-[#1C1C1C] hover:text-[#FF1FA8] ${focusRing}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={consultWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#B6FF1A] px-5 py-3 font-bold text-black transition duration-200 hover:shadow-[0_0_20px_rgba(182,255,26,0.35)] active:scale-95 ${focusRing}`}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      ) : null}
      <div
        aria-hidden
        className="h-px bg-[linear-gradient(90deg,#FF1FA8,#FF8A3D,#FFE61F,#B6FF1A)]"
      />
    </header>
  );
}
