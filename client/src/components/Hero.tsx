import { useState } from "react";
import { motion } from "framer-motion";
import { saveLead } from "../api/saveLead";

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
    <section className="relative min-h-screen flex items-center pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Submit plans. Get AI compliance in minutes
              <span className="text-transparent bg-gradient-to-r from-brand-400 to-accent-500 bg-clip-text">
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Revolutionary AI-powered building permit checks automated for every US jurisdiction.
              Transform weeks of manual review into minutes of intelligent analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold transition-all shadow-lg"
              >
                <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Try a 30-second demo
              </motion.button>
              <button className="px-8 py-4 rounded-xl border border-white/20 hover:border-brand-500/60 text-white font-semibold transition-all">
                Watch AI in Action
              </button>
            </div>

            {/* Email Capture Form */}
            <div className="rounded-xl bg-surface/70 ring-1 ring-white/10 p-6 max-w-md">
              <h3 className="text-lg font-semibold mb-4">Join the Waitlist</h3>
              <form onSubmit={handleEmailSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-brand-500 focus:outline-none text-white placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-medium transition-colors disabled:opacity-50"
                >
                  {isLoading ? "..." : "Join"}
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-2">We'll only email you about beta access.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Demo Card Widget */}
            <div className="relative bg-surface/80 rounded-2xl ring-1 ring-white/10 p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold mb-2">Upload Your Plans</h3>
                <p className="text-sm text-gray-400">Drag & drop or click to upload</p>
              </div>

              <div className="border-2 border-dashed border-brand-500/30 rounded-xl p-12 text-center hover:border-brand-500/60 transition-colors cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-brand-500/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-sm text-gray-400 mb-2">Upload plan (PDF)</p>
                <button className="text-brand-500 text-sm font-medium hover:underline">
                  Choose File
                </button>
              </div>

              {/* Blueprint SVG Animation */}
              <div className="absolute -top-4 -right-4 w-20 h-20 animate-float">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <rect x="20" y="20" width="40" height="40" fill="none" stroke="#4B5563" strokeWidth="2" className="blueprint-svg" />
                  <line x1="25" y1="30" x2="55" y2="30" stroke="#4B5563" strokeWidth="1" className="blueprint-svg" />
                  <line x1="25" y1="40" x2="55" y2="40" stroke="#4B5563" strokeWidth="1" className="blueprint-svg" />
                  <line x1="25" y1="50" x2="55" y2="50" stroke="#4B5563" strokeWidth="1" className="blueprint-svg" />
                  <circle cx="65" cy="25" r="8" fill="none" stroke="#34D399" strokeWidth="2" opacity="0" className="blueprint-svg">
                    <animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.5s" fill="freeze" />
                  </circle>
                  <path d="M61 25 L64 28 L69 23" stroke="#34D399" strokeWidth="2" fill="none" opacity="0" className="blueprint-svg">
                    <animate attributeName="opacity" values="0;1" dur="0.3s" begin="3s" fill="freeze" />
                  </path>
                </svg>
              </div>
            </div>
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
