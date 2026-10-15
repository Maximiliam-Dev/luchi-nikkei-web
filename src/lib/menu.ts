import { cache } from "react";
import { getSupabaseClient } from "@/lib/supabase";
import type { MenuItem } from "@/types/menu";

type MenuRow = {
  id: string | number;
  created_at: string;
  nombre: string | null;
  descripcion: string | null;
  precio: number | string | null;
  imagen: string | null;
  categoria: string | null;
  es_mas_pedido: boolean | null;
};

export const getMenu = cache(async (): Promise<MenuItem[]> => {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("menu")
    .select(
      "id, created_at, nombre, descripcion, precio, imagen, categoria, es_mas_pedido",
    )
    .order("orden", { ascending: true, nullsFirst: false })
    .order("id", { ascending: true });

  if (error) {
    console.error("No se pudo leer el menú:", error.message);
    return [];
  }

  return ((data ?? []) as MenuRow[])
    .filter((row) => row.nombre)
    .map((row) => {
      const esMasPedido = Boolean(row.es_mas_pedido);
      return {
        id: String(row.id),
        nombre: row.nombre ?? "",
        descripcion: row.descripcion ?? "",
        precio: Number(row.precio) || 0,
        imagen: row.imagen ?? undefined,
        categoria: row.categoria ?? undefined,
        es_mas_pedido: esMasPedido,
        badge: esMasPedido ? "Más pedido" : undefined,
      };
    });
});
