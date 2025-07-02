import PrelaunchBar from "./components/PrelaunchBar";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import BenefitsGrid from "./components/BenefitsGrid";
import HowItWorks from "./components/HowItWorks";
import FAQContactSection from "./components/FAQContactSection";
import ProductVision from "./components/ProductVision";
import TeamGrid from "./components/TeamGrid";
import LeadCapture from "./components/LeadCapture";
import SecondCTA from "./components/SecondCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-surface text-white">
      <PrelaunchBar />
      <TopBar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <BenefitsGrid />
      <HowItWorks />
      <FAQContactSection />
      <ProductVision />
      <TeamGrid />
      <LeadCapture />
      <SecondCTA />
      <Footer />
    </div>
  );
}

export default App;
