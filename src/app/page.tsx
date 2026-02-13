import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import CredibilitySection from "@/components/CredibilitySection";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Hero />
      <CredibilitySection />
      <ServicesSection />
      <WorkSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
