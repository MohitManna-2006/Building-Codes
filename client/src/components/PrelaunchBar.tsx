import { motion } from "framer-motion";

export default function PrelaunchBar() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 h-9 bg-white/5 border-b border-white/10 glass-effect"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          🚧 BuildConform is in pre-launch beta — features & visuals still evolving.
        </div>
        <button className="hidden sm:inline-flex px-4 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium transition-colors">
          Request Early Access
        </button>
      </div>
    </motion.div>
  );
}
