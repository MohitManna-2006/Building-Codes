import { useState } from "react";
import { motion } from "framer-motion";
import { saveLead } from "../api/saveLead";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Simulated founding counter
  const positionsFilled = 47;
  const totalPositions = 100;
  const percentFilled = (positionsFilled / totalPositions) * 100;

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
    <section id="hero" className="relative min-h-[80vh] flex items-center pt-20 pb-16 bg-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#F8FAFC] via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 text-primary">
              Manual Code Compliance Dies in 2025.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              Comply360 is building the AI-native platform that transforms weeks of compliance checks into minutes of automated verification. We're selecting <span className="text-primary font-bold">100 founding members</span> to shape this transformation.
            </p>
            {/* Founding Counter */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-lg font-semibold text-primary">{positionsFilled}</span>
                <span className="text-gray-500 text-base">of {totalPositions} founding positions filled</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-accent rounded-full transition-all"
                  style={{ width: `${percentFilled}%` }}
                ></div>
              </div>
            </div>
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://docs.google.com/forms/d/17zvKfzJ9Mxa9xDQnYXZ5ouLoIMLFLPq8vqu53p3th3E/viewform?edit_requested=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-accent text-white font-semibold text-lg shadow-lg hover:bg-emerald-600 transition-colors text-center"
              >
                Apply to Join the Founder's Circle → 5-Min Survey
              </a>
              <a
                href="#final-email-capture"
                className="px-8 py-4 rounded-xl border border-accent text-accent font-semibold text-lg bg-white hover:bg-accent hover:text-white transition-colors text-center"
              >
                Just want updates? Join the waitlist
              </a>
            </div>
            {/* Trust Badge */}
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-primary text-sm font-medium border border-gray-200">
                <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                In consultation with 50+ industry professionals
              </span>
            </div>
          </motion.div>
          {/* Animated Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Placeholder for animated illustration */}
            <div className="w-full max-w-md aspect-[4/3] bg-gradient-to-br from-[#F8FAFC] to-white border border-gray-200 rounded-2xl shadow-xl flex items-center justify-center">
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="20" width="200" height="80" rx="16" fill="#F8FAFC" stroke="#E5E7EB" strokeWidth="2" />
                <path d="M30 60 Q60 20 110 60 Q160 100 190 60" stroke="#EF4444" strokeWidth="2" fill="none" opacity="0.7">
                  <animate attributeName="d" values="M30 60 Q60 20 110 60 Q160 100 190 60;M30 60 Q60 100 110 60 Q160 20 190 60;M30 60 Q60 20 110 60 Q160 100 190 60" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M30 60 Q60 80 110 60 Q160 40 190 60" stroke="#10B981" strokeWidth="3" fill="none" opacity="0.9">
                  <animate attributeName="d" values="M30 60 Q60 80 110 60 Q160 40 190 60;M30 60 Q60 40 110 60 Q160 80 190 60;M30 60 Q60 80 110 60 Q160 40 190 60" dur="3s" repeatCount="indefinite" />
                </path>
                <circle cx="30" cy="60" r="4" fill="#1E3A8A" />
                <circle cx="190" cy="60" r="4" fill="#1E3A8A" />
                <circle cx="110" cy="60" r="4" fill="#10B981" />
              </svg>
            </div>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-400">Chaotic lines resolving into a streamlined path</span>
          </motion.div>
        </div>
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
