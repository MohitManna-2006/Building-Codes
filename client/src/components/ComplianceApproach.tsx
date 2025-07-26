import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { UploadCloud, Sparkles, ClipboardCheck } from "lucide-react";

const steps = [
  {
    icon: <UploadCloud className="w-8 h-8" />,
    title: "Comprehensive Code Repository",
    description: "Unified, always-updated database of building codes. One source of truth for every requirement."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "AI-Powered Analysis",
    description: "AI instantly reads and interprets codes, understanding context like an expert—at computer speed."
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Streamlined Reporting",
    description: "Generate clear, actionable reports with code references and next steps. Export with confidence."
  }
];

const DURATION = 5.4; // total animation duration in seconds
const DOT_SIZE = 32; // px, w-8 h-8

export default function ComplianceApproach() {
  const progress = useMotionValue(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [dotPoints, setDotPoints] = useState<number[]>([0, 0, 0]);

  // Animation loop
  useEffect(() => {
    let start = Date.now();
    function loop() {
      const elapsed = ((Date.now() - start) / 1000) % DURATION;
      const prog = elapsed / DURATION;
      progress.set(prog);
      if (prog < 1 / 3) setActiveStep(0);
      else if (prog < 2 / 3) setActiveStep(1);
      else setActiveStep(2);
      intervalRef.current = setTimeout(loop, 16);
    }
    loop();
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [progress]);

  // Measure dot points: left of first card, center of middle card, right of last card
  useLayoutEffect(() => {
    function updatePoints() {
      if (!lineRef.current || cardRefs.current.length !== 3) return;
      const lineRect = lineRef.current.getBoundingClientRect();
      const firstCard = cardRefs.current[0];
      const middleCard = cardRefs.current[1];
      const lastCard = cardRefs.current[2];
      if (!firstCard || !middleCard || !lastCard) return;
      const firstRect = firstCard.getBoundingClientRect();
      const middleRect = middleCard.getBoundingClientRect();
      const lastRect = lastCard.getBoundingClientRect();
      // Align with marker positions:
      const firstDot = firstRect.left - lineRect.left; // left edge of first card
      const middleDot = middleRect.left - lineRect.left + middleRect.width / 2; // center of middle card
      const lastDot = lastRect.right - lineRect.left; // right edge of last card
      setDotPoints([firstDot, middleDot, lastDot]);
    }
    updatePoints();
    window.addEventListener('resize', updatePoints);
    return () => window.removeEventListener('resize', updatePoints);
  }, [cardRefs.current[0], cardRefs.current[1], cardRefs.current[2], lineRef.current]);

  // Interpolate dot position and progress line
  let dotLeft = 0;
  let lineLeft = 0;
  let lineWidth = 0;
  if (dotPoints.every((v) => v !== 0)) {
    const prog = progress.get();
    if (prog < 0.5) {
      // From firstDot to middleDot
      const local = prog / 0.5;
      dotLeft = dotPoints[0] + (dotPoints[1] - dotPoints[0]) * local - DOT_SIZE / 2;
      lineLeft = dotPoints[0];
      lineWidth = dotLeft + DOT_SIZE / 2 - dotPoints[0];
    } else {
      // From middleDot to lastDot
      const local = (prog - 0.5) / 0.5;
      dotLeft = dotPoints[1] + (dotPoints[2] - dotPoints[1]) * local - DOT_SIZE / 2;
      lineLeft = dotPoints[0];
      lineWidth = dotLeft + DOT_SIZE / 2 - dotPoints[0];
    }
    if (lineWidth < 0) lineWidth = 0;
  }

  return (
    <section className="w-full py-16 lg:py-20 bg-white dark:bg-[#18132a] scroll-mt-20 relative overflow-hidden" id="compliance-approach">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-blue-50/30 dark:from-purple-900/10 dark:via-transparent dark:to-blue-900/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Horizontal Layout: Text on Left, Steps on Right */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200/50 dark:border-purple-700/30">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">COMPLIANCE APPROACH</span>
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent mb-6 tracking-tight"
            >
              Our Approach to Compliance
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              We're reinventing compliance with faster, smarter, and more accessible tech—not just digitizing, but redefining the entire process.
            </motion.p>
          </div>

          {/* Right Side - Step Cards */}
          <div className="lg:w-1/2">
            <div className="relative w-full flex flex-col items-center">
              {/* Step cards with animated arrows between them */}
              <div className="flex flex-1 items-stretch justify-between w-full gap-8">
                {steps.map((step, idx) => (
                  <>
                    <motion.div
                      key={step.title}
                      ref={el => cardRefs.current[idx] = el}
                      className={`flex-1 flex flex-col items-center px-3 py-4 rounded-2xl shadow-md bg-gradient-to-br from-white via-[#f7fafd] to-[#f3f6fa] dark:from-charcoal dark:via-charcoalLite dark:to-charcoalLite/80 border border-gray-100 dark:border-charcoalLite/60 transition-all duration-300 max-w-xs min-h-[280px]`}
                      animate={activeStep === idx ? { scale: 1.08, boxShadow: "0 4px 32px #a78bfa33" } : { scale: 1, boxShadow: "0 2px 8px #0001" }}
                      style={{ zIndex: 10 }}
                    >
                      <motion.div
                        className="mb-3 flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 text-brand-500 shadow"
                        animate={activeStep === idx ? { scale: 1.15, backgroundColor: "#a78bfa22" } : { scale: 1, backgroundColor: "#f3f6fa" }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {step.icon}
                      </motion.div>
                      <span className={`font-semibold text-base mb-1 text-center ${activeStep === idx ? 'text-brand-500' : 'text-gray-900 dark:text-white/80'}`}>{step.title}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-300 text-center max-w-[200px]">{step.description}</span>
                    </motion.div>
                    {/* Arrow between cards (not after last card) */}
                    {idx < steps.length - 1 && (
                      <motion.div
                        key={`arrow-${idx}`}
                        className="flex items-center justify-center"
                        initial={{ opacity: 0.3, scale: 1 }}
                        animate={activeStep === idx ? { opacity: 1, scale: 1.25 } : { opacity: 0.3, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <svg width="32" height="24" viewBox="0 0 48 32" fill="none">
                          <path d="M8 16 H40" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                          <polygon points="40,16 32,12 32,20" fill="#22c55e" />
                        </svg>
                      </motion.div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
