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
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1FA8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]";

const textLink = `text-[#D4D4D8] underline-offset-2 transition duration-200 hover:text-white hover:underline ${focusRing}`;

export function Footer() {
  return (
    <footer className="bg-[#050505] pb-24 text-white md:pb-10">
      <div
        aria-hidden
        className="h-px bg-[linear-gradient(90deg,#FF1FA8,#FF8A3D,#FFE61F,#B6FF1A)]"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-3">
        <div>
          <p
            className={`font-display text-3xl font-extrabold italic uppercase tracking-tight ${brandText}`}
          >
            {LOCAL.nombre}
          </p>
          <p className="mt-2 text-lg font-extrabold italic">
            <span className="text-[#FFE61F]">{LOCAL.bajadaIzquierda}</span>
            <span className="text-[#FF1FA8]"> · </span>
            <span className="text-[#B6FF1A]">{LOCAL.bajadaDerecha}</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#D4D4D8]">{LOCAL.frase}</p>
        </div>

        <div className="text-sm">
          <h2 className="font-display text-lg font-extrabold italic uppercase tracking-tight text-white">
            Contacto y ubicación
          </h2>
          <a
            href={LOCAL.maps}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-3 inline-block ${textLink}`}
          >
            {LOCAL.direccion}
          </a>
          <a href={LOCAL.telefonoTel} className={`mt-2 block ${textLink}`}>
            {LOCAL.telefonoDisplay}
          </a>
          <a
            href={LOCAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#B6FF1A] px-4 py-2 font-bold text-black transition duration-200 hover:shadow-[0_0_20px_rgba(182,255,26,0.35)] active:scale-95 ${focusRing}`}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pedir por WhatsApp
          </a>
        </div>

        <div className="text-sm">
          <h2 className="font-display text-lg font-extrabold italic uppercase tracking-tight text-white">
            Horario
          </h2>
          <ul className="mt-3 space-y-1 text-[#D4D4D8]">
            {LOCAL.horarios.map((turno) => (
              <li key={turno.dia} className="flex justify-between gap-4">
                <span>{turno.dia}</span>
                <span className="text-right text-white">{turno.horas}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-[#A1A1AA]">{LOCAL.horarioNota}</p>
          <h2 className="mt-6 font-display text-lg font-extrabold italic uppercase tracking-tight text-white">
            Reseñas
          </h2>
          <p className="mt-3">
            <a
              href={LOCAL.google}
              target="_blank"
              rel="noopener noreferrer"
              className={textLink}
            >
              Google {LOCAL.googlePuntaje} · {LOCAL.googleOpiniones}
            </a>
          </p>
          <p className="mt-1">
            <a
              href={LOCAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={textLink}
            >
              Facebook {LOCAL.facebookPuntaje} · {LOCAL.facebookVotos}
            </a>
          </p>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-4 text-xs text-[#A1A1AA]">
        © 2026 {LOCAL.nombre}. Iquique, Chile.
      </p>
    </footer>
  );
}
