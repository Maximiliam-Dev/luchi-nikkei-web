import { Clock, MapPin, Star } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const LOCAL = {
  nombre: "Luchi Nikkei",
  bajadaIzquierda: "Burger",
  bajadaDerecha: "Sushi",
  frase: "Sushi nikkei, burgers y churrascos en Iquique. Pide por WhatsApp.",
  direccion: "Juan Martínez 1946, 1101893 Iquique, Tarapacá",
  horarioResumen:
    "Lunes a sábado 17:00 – 00:00. Domingo 00:00 – 12:00 y 17:00 – 00:00.",
  horarioNota: "Los horarios pueden variar",
  telefonoDisplay: "+56 9 5424 8389",
  telefonoTel: "tel:+56954248389",
  whatsapp:
    "https://wa.me/56954248389?text=Hola%20Luchi%20Nikkei%2C%20quiero%20hacer%20un%20pedido",
  maps: "https://www.google.com/maps/search/?api=1&query=Juan+Mart%C3%ADnez+1946+Iquique",
  facebook: "https://www.facebook.com/LuchiIquique/",
  google:
    "https://www.google.com/maps/search/?api=1&query=Luchi+Nikkei+Iquique",
  googlePuntaje: "4,5 ★",
  googleOpiniones: "14 opiniones",
  facebookPuntaje: "5/5",
  facebookVotos: "1 voto",
  horarios: [
    { dia: "Lunes", horas: "17:00–00:00" },
    { dia: "Martes", horas: "17:00–00:00" },
    { dia: "Miércoles", horas: "17:00–00:00" },
    { dia: "Jueves", horas: "17:00–00:00" },
    { dia: "Viernes", horas: "17:00–00:00" },
    { dia: "Sábado", horas: "17:00–00:00" },
    { dia: "Domingo", horas: "00:00–12:00 y 17:00–00:00" },
  ],
} as const;

const brandText =
  "bg-[linear-gradient(90deg,#FF1FA8,#FF8A3D,#FFE61F,#B6FF1A)] bg-clip-text text-transparent";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1FA8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]";

const cardClass =
  "rounded-2xl border border-[#2A2A2A] bg-[#141414] p-4 text-sm leading-relaxed text-[#D4D4D8]";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#0A0A0A] px-4 py-14 text-white sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[repeating-conic-gradient(from_0deg_at_72%_18%,#14300c_0deg_9deg,#0A0A0A_9deg_20deg)] opacity-90"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,transparent_0%,#0A0A0A_62%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#FF1FA8]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#B6FF1A]/15 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-6 hidden select-none text-6xl drop-shadow-[0_0_18px_rgba(255,230,31,0.45)] sm:block sm:right-10 sm:text-7xl"
      >
        ⭐
      </span>

      <div className="relative mx-auto max-w-6xl">
        <h1
          className={`max-w-4xl font-display text-5xl font-extrabold italic uppercase leading-[0.92] tracking-tight sm:text-7xl ${brandText}`}
        >
          {LOCAL.nombre}
        </h1>
        <p className="mt-4 text-2xl font-extrabold italic tracking-tight sm:text-3xl">
          <span className="text-[#FFE61F]">{LOCAL.bajadaIzquierda}</span>
          <span className="text-[#FF1FA8]"> · </span>
          <span className="text-[#B6FF1A]">{LOCAL.bajadaDerecha}</span>
          <span aria-hidden className="ml-2 sm:hidden">
            ⭐
          </span>
        </p>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#D4D4D8] sm:text-xl">
          {LOCAL.frase}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <article className={cardClass}>
            <p className="flex items-center gap-2 font-bold text-white">
              <MapPin className="h-4 w-4 shrink-0 text-[#FF1FA8]" aria-hidden />
              Dirección
            </p>
            <a
              href={LOCAL.maps}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-2 inline-block underline-offset-2 transition duration-200 hover:text-white hover:underline ${focusRing}`}
            >
              📍 {LOCAL.direccion}
            </a>
          </article>
          <article className={cardClass}>
            <p className="flex items-center gap-2 font-bold text-white">
              <Clock className="h-4 w-4 shrink-0 text-[#FFE61F]" aria-hidden />
              Horario
            </p>
            <p className="mt-2">🕔 {LOCAL.horarioResumen}</p>
            <p className="mt-2 text-xs text-[#A1A1AA]">{LOCAL.horarioNota}</p>
          </article>
          <article className={cardClass}>
            <p className="flex items-center gap-2 font-bold text-white">
              <Star className="h-4 w-4 shrink-0 text-[#FFE61F]" aria-hidden />
              Reseñas
            </p>
            <p className="mt-2">
              <a
                href={LOCAL.google}
                target="_blank"
                rel="noopener noreferrer"
                className={`underline-offset-2 transition duration-200 hover:text-white hover:underline ${focusRing}`}
              >
                Google {LOCAL.googlePuntaje} ({LOCAL.googleOpiniones})
              </a>
            </p>
            <p className="mt-1">
              <a
                href={LOCAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`underline-offset-2 transition duration-200 hover:text-white hover:underline ${focusRing}`}
              >
                Facebook {LOCAL.facebookPuntaje} ({LOCAL.facebookVotos})
              </a>
            </p>
          </article>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#menu"
            className={`inline-flex min-h-11 items-center justify-center rounded-full bg-[#FF1FA8] px-6 py-3 text-center font-bold text-black transition duration-200 hover:shadow-[0_0_20px_rgba(255,31,168,0.35)] active:scale-95 ${focusRing}`}
          >
            Ver la carta
          </a>
          <a
            href={LOCAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#B6FF1A] px-6 py-3 text-center font-bold text-black transition duration-200 hover:shadow-[0_0_20px_rgba(182,255,26,0.35)] active:scale-95 ${focusRing}`}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
