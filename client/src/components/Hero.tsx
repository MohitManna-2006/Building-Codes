import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ClipboardCheck } from "lucide-react";
import { saveLead } from "@/api/saveLead";

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
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center gap-6 px-4 sm:px-8 max-w-5xl mx-auto pt-24 sm:pt-32 bg-[#f9f9ff] dark:bg-transparent" style={{ zIndex: 1 }}>
      {/* Radial gradient + SVG lines - only show in light mode */}
      <div className="absolute inset-0 w-full h-full -z-10 block dark:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#eef0ff] via-white to-[#fafafe]" />
        <svg className="absolute inset-0 w-full h-full" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.10 }}>
          <g stroke="#7c3aed" strokeWidth="1">
            <line x1="0" y1="0" x2="100%" y2="100%" />
            <line x1="100%" y1="0" x2="0" y2="100%" />
            <line x1="0" y1="50%" x2="100%" y2="50%" />
            <line x1="50%" y1="0" x2="50%" y2="100%" />
          </g>
        </svg>
      </div>
      {/* Radial gradient + SVG lines - only show in dark mode */}
      <div className="absolute inset-0 w-full h-full -z-10 hidden dark:block">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#2d2250] via-charcoal to-transparent opacity-60" />
        <svg className="absolute inset-0 w-full h-full" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.13 }}>
          <g stroke="#a78bfa" strokeWidth="1">
            <line x1="0" y1="0" x2="100%" y2="100%" />
            <line x1="100%" y1="0" x2="0" y2="100%" />
            <line x1="0" y1="50%" x2="100%" y2="50%" />
            <line x1="50%" y1="0" x2="50%" y2="100%" />
          </g>
        </svg>
      </div>
      {/* Hero content */}
      <div className="flex flex-col items-center text-center gap-6 w-full">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          AI-Powered Code Compliance, Redefined.
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Instantly verify building plans with next-gen AI. Save time, reduce errors, and accelerate approvals.
        </p>
        {/* New CTA Block */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfaJ1G4TTxixsBWq_C5kQlBLCiXaCkORNZCXHWZFZLHylncmA/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-brandPurple-600 hover:bg-brandPurple-700 dark:bg-brandPurple-700 dark:hover:bg-brandPurple-600 text-white font-semibold rounded-xl shadow-lg px-8 py-4"
            aria-label="Take the 2-minute survey"
          >
            <ClipboardCheck className="w-5 h-5" />
            Take the Survey
          </motion.a>
          <p className="max-w-md text-center text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            Your feedback shapes the future! Click above to take our quick survey and help us build the perfect tool for you. 🚀
          </p>
        </div>
        <div className="flex flex-col items-center mt-2">
          <ChevronDown className="w-8 h-8 text-brandPurple-600 dark:text-brandPurple-400 animate-bounce" aria-hidden="true" />
        </div>
      </div>
      {/* Waitlist module below hero */}
      <div className="w-full flex flex-col items-center mt-8">
        <button
          onClick={() => {
            const el = document.getElementById('lead-capture');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-8 py-4 rounded-xl bg-brandPurple-600 hover:bg-brandPurple-700 dark:bg-brandPurple-700 dark:hover:bg-brandPurple-600 text-white font-semibold shadow-lg transition text-lg"
        >
          Click here to join waitlist
        </button>
        <p className="text-sm text-gray-500 dark:text-neutral-400 mt-2">You'll be taken to our early access form below.</p>
      </div>
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
