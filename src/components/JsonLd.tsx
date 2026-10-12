import { site } from "@/data/site";
import { getMenu } from "@/lib/menu";

export async function JsonLd() {
  const menu = await getMenu();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    image: [`${site.url}/logo.png`, `${site.url}/og.webp`],
    url: site.url,
    telephone: site.phoneTel,
    priceRange: site.priceRange,
    servesCuisine: ["Japanese", "Peruvian", "Sushi", "Hamburgers"],
    menu: `${site.url}/#menu`,
    acceptsReservations: false,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: site.hours.weekdays.open,
        closes: site.hours.weekdays.close,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: site.hours.sundayMorning.open,
        closes: site.hours.sundayMorning.close,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: site.hours.sundayEvening.open,
        closes: site.hours.sundayEvening.close,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.ratings.google.score,
      reviewCount: site.ratings.google.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [site.instagram, site.facebook],
    hasMenu: {
      "@type": "Menu",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Carta",
          hasMenuItem: menu.map((item) => ({
            "@type": "MenuItem",
            name: item.nombre,
            description: item.descripcion,
            offers: {
              "@type": "Offer",
              price: item.precio,
              priceCurrency: "CLP",
            },
          })),
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
