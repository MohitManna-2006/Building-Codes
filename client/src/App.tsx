import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import TrustedBy from "@/components/TrustedBy";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ComplianceApproach from "@/components/ComplianceApproach";
import ProductVision from "@/components/ProductVision";
import TeamGrid from "@/components/TeamGrid";
import FAQContactSection from "@/components/FAQContactSection";
import LeadCapture from "@/components/LeadCapture";
// import SecondCTA from "@/components/SecondCTA";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col text-neutral-900 dark:text-neutral-100">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* Hero Section - Full height with gradient background */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-[#18132a] dark:via-purple-900/20 dark:to-blue-900/20">
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <Hero />
        </section>

        {/* Product Vision Section - Right after Hero */}
        <section className="relative bg-gradient-to-b from-white to-gray-50/50 dark:from-[#18132a] dark:to-[#18132a] py-8">
          {/* Visual connector */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
          <ProductVision />
        </section>

        {/* Problem Section */}
        <section className="relative bg-gradient-to-b from-white to-gray-50/50 dark:from-[#18132a] dark:to-[#18132a]">
          {/* Connecting element */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
          <ProblemSection />
        </section>

        {/* Solution Bridge - Striking transition */}
        <section className="relative py-16 bg-gradient-to-r from-purple-50/50 via-gray-50/50 to-blue-50/50 dark:from-purple-900/40 dark:via-[#18132a] dark:to-blue-900/40 overflow-hidden">
          {/* Directional background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/8 via-transparent to-blue-500/8 dark:from-purple-400/25 dark:via-transparent dark:to-blue-400/25"></div>
          <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-purple-500/15 dark:bg-purple-400/35 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-blue-500/15 dark:bg-blue-400/35 rounded-full blur-2xl animate-pulse"></div>
          
          {/* Directional arrows */}
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
            <div className="flex flex-col items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <div className="flex flex-col items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
          
          <div className="relative max-w-5xl mx-auto px-6">
            <div className="text-center">
              {/* Main heading with enhanced gradient */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-sm">
                Our Solution
              </h3>
              
              {/* Directional subtitle */}
              <div className="inline-block bg-gradient-to-r from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70 backdrop-blur-xl rounded-3xl px-8 py-4 shadow-2xl border border-white/30 dark:border-gray-700/30 mb-8">
                <p className="text-xl text-gray-700 dark:text-gray-200 font-semibold">
                  Here's how we're solving these challenges
                </p>
              </div>
              
              {/* Enhanced directional line */}
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
                <div className="w-16 h-1 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
              </div>
              
              {/* Call to action hint */}
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Scroll down to explore our comprehensive solution
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative bg-gradient-to-b from-gray-50/50 to-white dark:from-[#18132a] dark:to-[#18132a] py-4">
          {/* Visual connector */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
          <HowItWorks />
        </section>

        {/* Compliance Approach Section */}
        <section className="relative bg-gradient-to-b from-white to-gray-50/50 dark:from-[#18132a] dark:to-[#18132a] py-4">
          {/* Visual connector */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
          <ComplianceApproach />
        </section>

        {/* Key Features Section (SolutionSection) */}
        <section className="relative bg-gradient-to-b from-gray-50/50 to-white dark:from-[#18132a] dark:to-[#18132a] py-4">
          {/* Visual connector */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
          <SolutionSection />
        </section>

        {/* FAQ & Contact Section - Final section with footer transition */}
        <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-[#18132a] dark:to-[#18132a] py-4">
          {/* Connecting line to footer */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
          <FAQContactSection />
        </section>
      </main>
      
      {/* Footer with seamless transition */}
      <Footer />
    </div>
  );
}

export default App;
