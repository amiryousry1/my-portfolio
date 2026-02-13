import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden">
      <Hero />
      <AboutSection />
      <WorkSection />
      <ProcessSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
