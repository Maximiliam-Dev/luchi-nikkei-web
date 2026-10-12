import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { Navbar } from "@/components/Navbar";
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
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
