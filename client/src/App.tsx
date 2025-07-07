import PrelaunchBar from "./components/PrelaunchBar";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
// Placeholder: import FoundersCircle from "./components/FoundersCircle";
// Placeholder: import WhoShouldApply from "./components/WhoShouldApply";
// Placeholder: import TrustPrinciples from "./components/TrustPrinciples";
// Placeholder: import FinalEmailCapture from "./components/FinalEmailCapture";
// Placeholder: import StickyMobileCTA from "./components/StickyMobileCTA";
// Placeholder: import Countdown from "./components/Countdown";
// Placeholder: import LiveCounter from "./components/LiveCounter";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ProductVision from "./components/ProductVision";
import BenefitsGrid from "./components/BenefitsGrid";
import HowItWorks from "./components/HowItWorks";
import FAQContactSection from "./components/FAQContactSection";
import TeamGrid from "./components/TeamGrid";
import LeadCapture from "./components/LeadCapture";
import SecondCTA from "./components/SecondCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <PrelaunchBar />
      <TopBar />
      <Hero />
      {/* LiveCounter (positions filled, progress bar) */}
      {/* Countdown (application deadline) */}
      <ProblemSection />
      <ProductVision />
      {/* FoundersCircle (primary CTA, benefits, urgency) */}
      {/* WhoShouldApply (personas, CTA) */}
      {/* TrustPrinciples (pillars, badges) */}
      <BenefitsGrid />
      <HowItWorks />
      <FAQContactSection />
      {/* FinalEmailCapture (deep blue section, email form) */}
      <TeamGrid />
      <LeadCapture />
      <SecondCTA />
      <Footer />
      {/* StickyMobileCTA (mobile only) */}
    </div>
  );
}

export default App;
