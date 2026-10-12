import { Clock, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { site } from "@/data/site";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1FA8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]";

const brandText =
  "bg-[linear-gradient(90deg,#FF1FA8,#FF8A3D,#FFE61F,#B6FF1A)] bg-clip-text text-transparent";

const whatsappHref =
  "https://wa.me/56954248389?text=Hola%20Luchi%20Nikkei%2C%20quiero%20hacer%20un%20pedido";

export function ContactSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=16&hl=es&output=embed`;

  return (
    <section id="contacto" className="scroll-mt-24 bg-[#0A0A0A] px-4 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#FF1FA8]">
          Visítanos
        </p>
        <h2
          className={`mt-2 text-center font-display text-4xl font-extrabold italic uppercase tracking-tight sm:text-5xl ${brandText}`}
        >
          Contacto
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-[#D4D4D8] sm:text-lg">
          Retiro en el local o pedido por WhatsApp. Estamos en Juan Martínez 1946, Iquique.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#141414]">
            <iframe
              title="Mapa de Luchi Nikkei en Juan Martínez 1946, Iquique"
              src={mapSrc}
              className="h-72 min-h-[320px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-2xl border border-[#2A2A2A] bg-[#1C1C1C] p-5 sm:p-7">
            <ul className="space-y-4 text-sm sm:text-base">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FF1FA8]" aria-hidden />
                <div>
                  <p className="font-semibold text-white">Dirección</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[#D4D4D8] underline-offset-2 transition duration-200 hover:text-white hover:underline ${focusRing}`}
                  >
                    {site.address.full}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#FF1FA8]" aria-hidden />
                <div>
                  <p className="font-semibold text-white">Teléfono</p>
                  <a
                    href={`tel:${site.phoneTel}`}
                    className={`text-[#D4D4D8] underline-offset-2 transition duration-200 hover:text-white hover:underline ${focusRing}`}
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <InstagramIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#FF1FA8]" />
                <div>
                  <p className="font-semibold text-white">Instagram</p>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[#D4D4D8] underline-offset-2 transition duration-200 hover:text-white hover:underline ${focusRing}`}
                  >
                    {site.instagramHandle}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#B6FF1A]" />
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[#D4D4D8] underline-offset-2 transition duration-200 hover:text-white hover:underline ${focusRing}`}
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <p className="flex items-center gap-2 font-semibold text-white">
                <Clock className="h-5 w-5 text-[#FFE61F]" aria-hidden />
                Horario
              </p>
              <table className="mt-3 w-full text-sm">
                <caption className="sr-only">Horario de atención</caption>
                <tbody>
                  {site.hours.table.map((row) => (
                    <tr key={row.day} className="border-b border-[#2A2A2A]">
                      <th scope="row" className="py-2 text-left font-medium text-white">
                        {row.day}
                      </th>
                      <td className="py-2 text-right text-[#D4D4D8]">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3 text-xs text-[#A1A1AA]">{site.hours.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
