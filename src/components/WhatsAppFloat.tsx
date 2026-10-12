"use client";

import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_HREF =
  "https://wa.me/56954248389?text=Hola%20Luchi%20Nikkei%2C%20quiero%20hacer%20un%20pedido";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#B6FF1A] text-black shadow-[0_0_20px_rgba(182,255,26,0.45)] transition duration-200 hover:bg-[#FFE61F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1FA8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] active:scale-95 md:hidden"
      aria-label="Escribir por WhatsApp al +56 9 5424 8389"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
