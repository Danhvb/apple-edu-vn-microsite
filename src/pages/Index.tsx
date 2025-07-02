
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import ValuePropositions from "@/components/ValuePropositions";
import IPadFeatures from "@/components/iPadFeatures";
import MacFeatures from "@/components/MacFeatures";
import WhyiPad from "@/components/WhyiPad";
import WhyMac from "@/components/WhyMac";
import ProductShowcase from "@/components/ProductShowcase";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <UseCases />
      <ValuePropositions />
      <IPadFeatures />
      <MacFeatures />
      <WhyiPad />
      <WhyMac />
      <ProductShowcase />
      <ContactSection />
    </div>
  );
};

export default Index;
