export type Review = {
  id: string;
  author: string;
  time?: string;
  text: string;
  meta?: string;
  image?: string;
  imageAlt?: string;
};

export const REVIEWS: Review[] = [
  {
    id: "gabriel-alzamora",
    author: "Gabriel Alzamora",
    time: "Hace 8 meses",
    meta: "Almuerzo · $5.000–$10.000",
    text: "De los sushis más ricos que he probado. Buenísima calidad.",
  },
  {
    id: "vicente-erik",
    author: "Vicente Erik",
    time: "Hace un año",
    meta: "Consumo en el lugar · $5.000–$10.000",
    text: "Prueben la pichanga 10/10 ✅",
    image: "/images/resena-pichanga.jpg",
    imageAlt: "Pichanga de Luchi Nikkei con huevo frito",
  },
  {
    id: "rodolfo-lee",
    author: "Rodolfo Lee",
    time: "Hace un año",
    text: "Recomendado al 100%. La foto de la pichanga no la alcance ni a mandar jajajja",
    image: "/images/resena-hamburguesa.jpg",
    imageAlt: "Hamburguesa con papas fritas de Luchi Nikkei",
  },
];
