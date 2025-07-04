import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { saveLead } from "../api/saveLead";

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("lead-capture");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return;
    }

    setIsLoading(true);
    try {
      await saveLead(formData);
      setFormData({ name: "", company: "", email: "" });
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    } catch (error) {
      console.error("Failed to save lead:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="lead-capture" className="py-24 lg:py-32 bg-white/2 dark:bg-transparent">
      <div className="max-w-3xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-surface/80 dark:bg-charcoalLite ring-1 ring-brand-500/30 dark:ring-charcoalLite shadow-xl rounded-3xl p-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-brand-500/10 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-24 h-24">
                  <rect x="20" y="30" width="80" height="60" fill="none" stroke="#8B5CF6" strokeWidth="2" />
                  <line x1="30" y1="40" x2="90" y2="40" stroke="#8B5CF6" strokeWidth="1" />
                  <line x1="30" y1="50" x2="90" y2="50" stroke="#8B5CF6" strokeWidth="1" />
                  <line x1="30" y1="60" x2="90" y2="60" stroke="#8B5CF6" strokeWidth="1" />
                  <line x1="30" y1="70" x2="90" y2="70" stroke="#8B5CF6" strokeWidth="1" />
                  <line x1="30" y1="80" x2="90" y2="80" stroke="#8B5CF6" strokeWidth="1" />
                  <circle cx="105" cy="35" r="10" fill="#34D399" opacity="0.8" />
                  <path d="M100 35 L103 38 L110 31" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
              <p className="text-gray-400 mb-8">
                Join thousands of architects and engineers already streamlining their compliance process.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-xl bg-white dark:bg-charcoalLite ring-1 ring-white/10 focus:ring-brand-500 focus:outline-none text-white peer placeholder-transparent"
                    placeholder="Full Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-6 text-sm text-brand-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-brand-500"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-xl bg-white dark:bg-charcoalLite ring-1 ring-white/10 focus:ring-brand-500 focus:outline-none text-white peer placeholder-transparent"
                    placeholder="Company"
                  />
                  <label
                    htmlFor="company"
                    className="absolute left-4 -top-6 text-sm text-brand-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-brand-500"
                  >
                    Company
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 rounded-xl bg-white dark:bg-charcoalLite ring-1 ring-white/10 focus:ring-brand-500 focus:outline-none text-white peer placeholder-transparent"
                    placeholder="Email Address"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-6 text-sm text-brand-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-brand-500"
                  >
                    Email Address
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 rounded-xl bg-brandPurple-600 hover:bg-brandPurple-700 dark:bg-brandPurple-700 dark:hover:bg-brandPurple-600 text-white font-semibold transition-all group relative disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto" />
                  ) : (
                    <>
                      Join Beta Waitlist
                      <motion.svg
                        className="w-4 h-4 inline ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-400 text-center">We reply within 24 h. No spam.</p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
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
              <span>Thanks {formData.name || "there"}! We'll be in touch.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
