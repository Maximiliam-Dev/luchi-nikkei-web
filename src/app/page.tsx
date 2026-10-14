import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ReviewsSection } from "@/components/ReviewsSection";
import { getMenu } from "@/lib/menu";

export const revalidate = 60;

export default async function Home() {
  const items = await getMenu();

  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <MenuSection items={items} />
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <ReviewsSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
