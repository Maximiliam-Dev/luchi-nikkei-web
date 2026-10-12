import Image from "next/image";
import { Star } from "lucide-react";
import { REVIEWS } from "@/data/reviews";

const brandText =
  "bg-[linear-gradient(90deg,#FF1FA8,#FF8A3D,#FFE61F,#B6FF1A)] bg-clip-text text-transparent";

export function ReviewsSection() {
  return (
    <section id="resenas" className="scroll-mt-24 bg-[#0A0A0A] px-4 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#FFE61F]">
          Lo que dicen
        </p>
        <h2
          className={`mt-2 text-center font-display text-4xl font-extrabold italic uppercase tracking-tight sm:text-5xl ${brandText}`}
        >
          Reseñas
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-[#D4D4D8] sm:text-lg">
          Opiniones de quienes ya pidieron en Luchi Nikkei, Iquique.
        </p>

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:overflow-visible">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="min-w-[85%] snap-center rounded-2xl border border-[#2A2A2A] bg-[#1C1C1C] p-5 sm:min-w-0"
            >
              <div className="flex gap-1 text-[#FFE61F]" aria-hidden>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#D4D4D8]">
                “{review.text}”
              </p>
              {review.image ? (
                <Image
                  src={review.image}
                  alt={review.imageAlt ?? `Foto compartida por ${review.author}`}
                  width={640}
                  height={480}
                  className="mt-3 h-44 w-full rounded-xl object-cover"
                />
              ) : null}
              <p className="mt-4 font-display text-base font-semibold text-white">
                {review.author}
              </p>
              {review.time ? (
                <p className="text-xs font-medium text-[#A1A1AA]">{review.time}</p>
              ) : null}
              {review.meta ? (
                <p className="mt-1 text-xs font-semibold text-[#B6FF1A]">
                  {review.meta}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
