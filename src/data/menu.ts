import { FILTROS_MENU, type Categoria, type FiltroMenu, type MenuItem } from "@/types/menu";

export const CATEGORIAS: { id: FiltroMenu; label: FiltroMenu }[] = FILTROS_MENU.map(
  (filtro) => ({ id: filtro, label: filtro }),
);

export const MENU: MenuItem[] = [
  {
    id: "salsa-acevichado",
    nombre: "Salsa Acevichado",
    descripcion: "Aderezo cremoso y ácido de la cocina nikkei",
    precio: 1000,
    categoria: "Entradas",
    imagen: "/images/salsa-acevichado.jpg",
  },
  {
    id: "camarones-passion-fruit",
    nombre: "Camarones Passion Fruit",
    descripcion: "Camarones crocantes en salsa de maracuyá ligeramente picante",
    precio: 6000,
    categoria: "Entradas",
    destacado: true,
    imagen: "/images/camarones-passion-fruit.jpg",
  },
  {
    id: "ebi-furai",
    nombre: "Ebi Furai",
    descripcion: "6 unidades: camarón empanizado al panko con salsa maracuyá",
    precio: 5000,
    categoria: "Entradas",
    imagen: "/images/ebi-furai.jpg",
  },
  {
    id: "gyosas-de-cerdo",
    nombre: "Gyosas de Cerdo",
    descripcion: "6 unidades: gyosas cocidas al vapor luego selladas en mantequilla",
    precio: 4500,
    categoria: "Entradas",
    imagen: "/images/gyosas-de-cerdo.jpg",
  },
  {
    id: "korokke",
    nombre: "Korokke",
    descripcion: "Croquetas de arroz de sushi rellenas de pollo y queso crema",
    precio: 4500,
    categoria: "Entradas",
    imagen: "/images/korokke.jpg",
  },
  {
    id: "hanroll-de-pollo",
    nombre: "Hanroll de Pollo",
    descripcion: "Pollo, queso y cebollín",
    precio: 4000,
    categoria: "Entradas",
    destacado: true,
    imagen: "/images/hanroll-de-pollo.webp",
  },
  {
    id: "gohan-acevichado",
    nombre: "Gohan Acevichado",
    descripcion:
      "Salmón, palta, queso crema, canchita, hilos de camote crocante, nori, cebollín y base de arroz. Salsa acevichada",
    precio: 8500,
    categoria: "Gohan",
    destacado: true,
    badge: "Más pedido",
    imagen: "/images/gohan-acevichado.jpg",
  },
  {
    id: "gohan-ebi-furai",
    nombre: "Gohan Ebi Furai",
    descripcion:
      "Camarón furai, palta, queso crema, pepino, canchita, hilos de papa crocante, cebollín, nori y base de arroz",
    precio: 7500,
    categoria: "Gohan",
    imagen: "/images/gohan-ebi-furai.jpg",
  },
  {
    id: "gohan-tori-furai",
    nombre: "Gohan Tori Furai",
    descripcion:
      "Pollo furai, palta, queso crema, hilos de papa crocante, cebollín, zanahoria, nori y base de arroz. Salsa teriyaki",
    precio: 6500,
    categoria: "Gohan",
    imagen: "/images/gohan-tori-furai.jpg",
  },
  {
    id: "gohan-vegan",
    nombre: "Gohan Vegan",
    descripcion:
      "Champiñones furai, palta, pepino, cebollín, hilos de papa crocante, nori, zanahoria, canchita y semillas de sésamo",
    precio: 6500,
    categoria: "Gohan",
    imagen: "/images/gohan-vegan.jpg",
  },
  {
    id: "dayanix",
    nombre: "Dayanix",
    descripcion:
      "Relleno de salmón, camarón, pulpo y queso crema, envuelto en palta y crocante de camote",
    precio: 9500,
    categoria: "Sushi sin arroz",
    imagen: "/images/sushi-dayanix.jpg",
  },
  {
    id: "ebi",
    nombre: "Ebi",
    descripcion: "Relleno de camarón furai, palta y queso, envuelto en queso y flameado",
    precio: 7000,
    categoria: "Sushi sin arroz",
    imagen: "/images/sushi-ebi.jpg",
  },
  {
    id: "sake",
    nombre: "Sake",
    descripcion:
      "Relleno de salmón, queso crema y palta, acevichada, toppings, sésamo y cebollín",
    precio: 8000,
    categoria: "Sushi sin arroz",
    imagen: "/images/sushi-sake.jpg",
  },
  {
    id: "tori",
    nombre: "Tori",
    descripcion: "Relleno de pollo furai, queso crema, palta y cebollín",
    precio: 6000,
    categoria: "Sushi sin arroz",
    imagen: "/images/sushi-tori.jpg",
  },
  {
    id: "abocado",
    nombre: "Abocado",
    descripcion:
      "Relleno de camarón furai, queso crema, palta, cubierto en láminas finas de palta flameado",
    precio: 7500,
    categoria: "Sushis Especiales",
    imagen: "/images/abocado.jpg",
  },
  {
    id: "acevichado",
    nombre: "Acevichado",
    descripcion:
      "Relleno de camarón furai, palta, cubierto en láminas de salmón, hilos de camote crocante y salsa acevichada",
    precio: 7500,
    categoria: "Sushis Especiales",
    destacado: true,
    imagen: "/images/acevichado.jpg",
  },
  {
    id: "california",
    nombre: "California",
    descripcion: "Relleno de salmón, queso crema, palta, envuelto en semillas de sésamo",
    precio: 8000,
    categoria: "Sushis Especiales",
    imagen: "/images/california.jpg",
  },
  {
    id: "furai",
    nombre: "Furai",
    descripcion: "Relleno de salmón, queso crema, palta, empanizado al panko",
    precio: 8000,
    categoria: "Sushis Especiales",
    imagen: "/images/furai.jpg",
  },
  {
    id: "huancaina",
    nombre: "Huancaina",
    descripcion:
      "Relleno de camarón furai, palta, envuelto en queso crema flameado, bañado en salsa huancaína",
    precio: 7500,
    categoria: "Sushis Especiales",
    imagen: "/images/huancaina.jpg",
  },
  {
    id: "kary",
    nombre: "Kary",
    descripcion:
      "Relleno de camarón empanizado al panko, palta, flameada con queso crema, parmesano, chimichurri y salsa anguila",
    precio: 7500,
    categoria: "Sushis Especiales",
    imagen: "/images/kary.jpg",
  },
  {
    id: "tabla-24",
    nombre: "Tabla 24 Piezas",
    descripcion: "12 Furai: pollo, queso crema y cebollín · 12 Abocado: palta y camarón",
    precio: 8000,
    categoria: "Tablas de Sushi",
    destacado: true,
    badge: "Más pedido",
    imagen: "/images/tabla-24.jpg",
  },
  {
    id: "tabla-36",
    nombre: "Tabla 36 Piezas",
    descripcion: "12 Furai: pollo, queso crema y cebollín. Mix de rolls para compartir",
    precio: 11000,
    categoria: "Tablas de Sushi",
    badge: "Más pedido",
    imagen: "/images/tabla-36.jpg",
  },
  {
    id: "tabla-48",
    nombre: "Tabla 48 Piezas",
    descripcion: "12 Furai: pollo, queso crema y cebollín. Tabla para compartir",
    precio: 14000,
    categoria: "Tablas de Sushi",
    badge: "Más pedido",
    imagen: "/images/tabla-48.jpg",
  },
  {
    id: "tabla-60",
    nombre: "Tabla 60 Piezas",
    descripcion: "24 Furai y mix de rolls. Tabla grande para compartir",
    precio: 18000,
    categoria: "Tablas de Sushi",
    badge: "Más pedido",
    imagen: "/images/tabla-60.jpg",
  },
  {
    id: "tabla-84",
    nombre: "Tabla 84 Piezas",
    descripcion: "24 Furai y mix de rolls. Tabla familiar",
    precio: 25000,
    categoria: "Tablas de Sushi",
    badge: "Más pedido",
    imagen: "/images/tabla-84.jpg",
  },
  {
    id: "tabla-108",
    nombre: "Tabla 108 Piezas",
    descripcion: "24 Furai y mix de rolls. Tabla extra grande",
    precio: 29000,
    categoria: "Tablas de Sushi",
    badge: "Más pedido",
    imagen: "/images/tabla-108.jpg",
  },
];

export function getMenuByCategory(categoria: FiltroMenu | Categoria): MenuItem[] {
  if ((categoria as string) === "Recomendados") {
    return MENU;
  }
  return MENU.filter((item) => item.categoria === categoria);
}
