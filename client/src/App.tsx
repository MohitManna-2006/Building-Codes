import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import TrustedBy from "@/components/TrustedBy";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsGrid from "@/components/BenefitsGrid";
import HowItWorks from "@/components/HowItWorks";
import ProductVision from "@/components/ProductVision";
import TeamGrid from "@/components/TeamGrid";
import FAQContactSection from "@/components/FAQContactSection";
import LeadCapture from "@/components/LeadCapture";
// import SecondCTA from "@/components/SecondCTA";
import Footer from "@/components/Footer";
import PrelaunchBar from "@/components/PrelaunchBar";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-charcoal dark:text-neutral-100">
      <PrelaunchBar />
      <Navbar />
      <main>
        <Hero />
        {/* <TrustedBy /> */}
        <ProblemSection />
        <SolutionSection />
        <BenefitsGrid />
        <HowItWorks />
        <ProductVision />
        <TeamGrid />
        <FAQContactSection />
        <LeadCapture />
        {/* <SecondCTA /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
