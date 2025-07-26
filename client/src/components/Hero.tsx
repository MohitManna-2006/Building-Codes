import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ClipboardCheck, ChevronRight } from "lucide-react";
import { saveLead } from "@/api/saveLead";
import AnimatedBlueprint from "./AnimatedBlueprint";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsLoading(true);
    try {
      await saveLead({ name: "Hero Signup", email });
      setEmail("");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    } catch (error) {
      console.error("Failed to save email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-white dark:bg-[#18132a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-indigo-50/40 dark:from-purple-900/20 dark:via-blue-900/10 dark:to-indigo-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-60" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16 px-6 md:px-10 py-16 lg:py-24">
        {/* Text Block */}
                  <div className="relative max-w-2xl mx-auto lg:mx-0 space-y-6 bg-gradient-to-br from-white/90 to-white/70 dark:from-[#23243a]/90 dark:to-[#23243a]/70 backdrop-blur-xl shadow-2xl ring-1 ring-white/20 dark:ring-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 text-center lg:text-left border border-white/20 dark:border-white/5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[0.9] tracking-tight bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent drop-shadow-sm">
            Transform Building Codes Into Instant Compliance
          </h1>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/20 backdrop-blur-sm ring-1 ring-purple-300/50 dark:ring-brandPurple-400/40 rounded-2xl px-6 py-4 shadow-lg border border-purple-200/30 dark:border-purple-400/20">
            <p className="text-lg md:text-xl text-purple-800 dark:text-brandPurple-100 font-semibold leading-relaxed md:max-w-xl mx-auto lg:mx-0 mb-0">
              The construction industry faces a <span className="text-purple-900 dark:text-purple-200 font-bold">$3.3 billion</span> compliance challenge. We're building AI that revolutionizes permit reviews.
            </p>
          </div>
          <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800/40 dark:to-gray-700/30 backdrop-blur-sm ring-1 ring-gray-200/50 dark:ring-gray-600/30 rounded-2xl px-6 py-4 shadow-lg border border-gray-200/30 dark:border-gray-600/20">
            <p className="text-lg md:text-xl text-gray-800 dark:text-neutral-100 font-medium leading-relaxed md:max-w-xl mx-auto lg:mx-0 mb-0">
              ConformaBuild is developing an <span className="text-purple-700 dark:text-purple-300 font-semibold">AI-powered platform</span> to transform building code compliance. Upload your plans, get comprehensive analysis, and accelerate your project timeline.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            <div className="flex flex-col items-center w-full sm:w-auto">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScPxIw47g8LN_kgXzU0J1VWkj4fLg_OEsf-W1Au9urnSz9Hdg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-8 rounded-xl text-base font-bold shadow-lg hover:shadow-xl inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 dark:from-purple-600 dark:to-purple-700 dark:hover:from-purple-500 dark:hover:to-purple-600 text-white transition-all duration-300 group w-full sm:w-auto justify-center transform hover:scale-105"
                aria-label="Take the 2-minute survey"
              >
                <ClipboardCheck className="w-5 h-5" />
                Take the Survey
                <motion.svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </a>
              <span className="block mt-2 text-xs sm:text-sm text-gray-500 leading-snug max-w-[18rem] sm:max-w-none">
                Your feedback shapes the future! Click <span className="font-semibold text-purple-600 underline decoration-purple-400/40 hover:decoration-purple-600 transition-colors">Take the Survey</span> above to help us build the perfect tool for you. 🚀
              </span>
            </div>
            <div className="flex flex-col items-center w-full sm:w-auto">
              <a
                href="#faq-contact"
                className="h-12 px-8 rounded-xl text-base font-bold shadow-lg hover:shadow-xl inline-flex items-center gap-2 border-2 border-purple-500 text-purple-600 dark:text-purple-400 bg-white dark:bg-[#23243a] hover:bg-purple-50 dark:hover:bg-[#23243a]/60 transition-all duration-300 group w-full sm:w-auto justify-center transform hover:scale-105"
              >
                Click here to join waitlist
                <motion.svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </a>
              <span className="block mt-2 text-xs sm:text-sm text-gray-500 leading-snug max-w-[18rem] sm:max-w-none">
                <span className="font-semibold text-purple-600 underline decoration-purple-400/40 hover:decoration-purple-600 transition-colors">Click here to join waitlist</span> will take you to the form below to enter your details and join our beta.
              </span>
            </div>
          </div>
        </div>
        {/* Illustration */}
        <figure className="shrink-0 w-72 md:w-80 lg:w-96 xl:w-[28rem] drop-shadow-xl">
          <div className="rounded-3xl overflow-hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-[#f4f6ff] to-[#e8ecff] dark:from-[#23243a] dark:to-[#1a1b2e] ring-1 ring-white/20 dark:ring-white/10 shadow-2xl">
            <AnimatedBlueprint />
          </div>
        </figure>
      </div>
      {/* Waitlist module below hero */}
      {/* Remove the duplicate waitlist button and subtext at the bottom of the hero section */}
      {/* Success Toast */}
      {showToast && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Thanks! We'll be in touch.</span>
          </div>
        </motion.div>
      )}
    </section>
  );
}
