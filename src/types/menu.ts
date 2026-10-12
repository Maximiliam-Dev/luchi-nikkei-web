export const FILTROS_MENU = [
  "Menú Completo",
  "Promos de Sushi",
  "Burgers y Churrascos",
  "Para Compartir",
  "Premium Rolls",
  "Gohan y Piqueos",
  "Hand Rolls y Extras"
] as const;
export type FiltroMenu = (typeof FILTROS_MENU)[number];
export type Categoria = Exclude<FiltroMenu, "Menú Completo">;

export type MenuItem = {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria?: Categoria | string;
  destacado?: boolean;
  es_mas_pedido?: boolean;
  badge?: string;
  imagen?: string;
};

export type CartItem = {
  id: string;
  nombre: string;
  precio: number;
  quantity: number;
};

export function filterMenu(items: MenuItem[], filtro: FiltroMenu): MenuItem[] {
  if (filtro === "Menú Completo") return items;
  return items.filter((item) => item.categoria === filtro);
}
