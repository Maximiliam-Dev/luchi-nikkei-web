import { site } from "@/data/site";
import { formatCLP } from "@/lib/format";
import type { CartItem } from "@/types/menu";

export function waLink(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function consultWhatsAppLink(): string {
  return waLink("Hola! Tengo una consulta sobre el menú");
}

export function productWhatsAppLink(nombre: string): string {
  return waLink(`Quiero un ${nombre}`);
}

export function orderWhatsAppLink(
  items: CartItem[],
  extras?: { name?: string; address?: string },
): string {
  const lines = items.map(
    (item) =>
      `- ${item.quantity}x ${item.nombre} — ${formatCLP(item.precio * item.quantity)}`,
  );
  const total = items.reduce((sum, item) => sum + item.precio * item.quantity, 0);

  const message = [
    "Hola Luchi Nikkei! Quiero hacer un pedido:",
    "",
    ...lines,
    "",
    `Total: ${formatCLP(total)}`,
    "",
    `Nombre: ${extras?.name?.trim() ?? ""}`,
    `Dirección de despacho: ${extras?.address?.trim() ?? ""}`,
  ].join("\n");

  return waLink(message);
}
