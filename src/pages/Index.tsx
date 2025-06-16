
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import ValuePropositions from "@/components/ValuePropositions";
import Testimonials from "@/components/Testimonials";
import ProductShowcase from "@/components/ProductShowcase";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <UseCases />
      <ValuePropositions />
      <Testimonials />
      <ProductShowcase />
      <ContactSection />
    </div>
  );
};

export default Index;
