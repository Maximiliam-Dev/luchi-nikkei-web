"use client";

import { useEffect, useId, useRef } from "react";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { useCart } from "@/context/CartContext";
import { formatCLP } from "@/lib/format";
import { orderWhatsAppLink } from "@/lib/whatsapp";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    total,
    setQuantity,
    removeItem,
    customerName,
    address,
    setCustomerName,
    setAddress,
  } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCart();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [closeCart, isOpen]);

  if (!isOpen) return null;

  const orderUrl = orderWhatsAppLink(items, {
    name: customerName,
    address,
  });

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        aria-label="Cerrar carrito"
        onClick={closeCart}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute inset-x-0 bottom-0 flex max-h-[88vh] flex-col rounded-t-[32px] border border-[#2A2A2A] bg-[#141414] text-white md:inset-y-0 md:left-auto md:right-0 md:h-full md:max-h-none md:w-[420px] md:rounded-none md:rounded-l-[32px]"
      >
        <div className="flex items-center justify-between border-b border-[#2A2A2A] px-5 py-4">
          <h2 id={titleId} className="font-display text-2xl font-extrabold italic uppercase tracking-tight">
            Tu pedido
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={closeCart}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2A2A2A] bg-[#1C1C1C] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1FA8]"
            aria-label="Cerrar carrito"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="py-10 text-center text-[#A1A1AA]">
              El carrito está vacío. Suma un roll, una burger o un churrasco.
            </p>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start justify-between gap-3 rounded-2xl border border-[#2A2A2A] bg-[#1C1C1C] p-3"
                >
                  <div>
                    <p className="font-semibold leading-tight">{item.nombre}</p>
                    <p className="mt-1 text-sm font-bold text-[#B6FF1A]">
                      {formatCLP(item.precio * item.quantity)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2A2A2A] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1FA8] active:scale-95"
                      onClick={() => setQuantity(item.id, item.quantity - 1)}
                      aria-label={`Quitar una unidad de ${item.nombre}`}
                    >
                      <Minus className="h-3.5 w-3.5" aria-hidden />
                    </button>
                    <span className="min-w-6 text-center text-sm font-bold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2A2A2A] bg-[#B6FF1A] text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1FA8] active:scale-95"
                      onClick={() => setQuantity(item.id, item.quantity + 1)}
                      aria-label={`Agregar una unidad de ${item.nombre}`}
                    >
                      <Plus className="h-3.5 w-3.5" aria-hidden />
                    </button>
                    <button
                      type="button"
                      className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2A2A2A] text-[#FF1FA8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1FA8] active:scale-95"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Eliminar ${item.nombre} del carrito`}
                    >
                      <Trash2 className="h-3.5 w-3.5" aria-hidden />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 space-y-3">
            <label className="block text-sm font-semibold">
              Nombre
              <input
                type="text"
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                placeholder="Opcional"
                className="mt-1 w-full rounded-2xl border border-[#2A2A2A] bg-[#0A0A0A] px-3 py-2 font-normal text-white outline-none placeholder:text-[#A1A1AA] focus-visible:ring-2 focus-visible:ring-[#FF1FA8]"
              />
            </label>
            <label className="block text-sm font-semibold">
              Dirección de despacho
              <input
                type="text"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Opcional"
                className="mt-1 w-full rounded-2xl border border-[#2A2A2A] bg-[#0A0A0A] px-3 py-2 font-normal text-white outline-none placeholder:text-[#A1A1AA] focus-visible:ring-2 focus-visible:ring-[#FF1FA8]"
              />
            </label>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] px-5 py-4">
          <div className="mb-3 flex items-center justify-between font-display text-lg font-semibold">
            <span>Total</span>
            <span>{formatCLP(total)}</span>
          </div>
          <a
            href={items.length ? orderUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={items.length === 0}
            className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#B6FF1A] px-5 py-3 text-center font-bold text-black transition duration-200 hover:shadow-[0_0_20px_rgba(182,255,26,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1FA8] active:scale-95 ${items.length === 0 ? "pointer-events-none opacity-50" : ""}`}
            onClick={(event) => {
              if (items.length === 0) event.preventDefault();
            }}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Enviar pedido por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
