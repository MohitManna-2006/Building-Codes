import { motion } from "framer-motion";

export default function PrelaunchBar() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 h-12 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 dark:from-brandPurple-800 dark:via-brandPurple-700 dark:to-brandPurple-800 border-b border-yellow-600 dark:border-brandPurple-900 flex items-center shadow-lg"
      style={{ minHeight: '3rem' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-center w-full">
        <span className="flex items-center gap-2 text-base font-bold text-white tracking-wide">
          🚧 Pre-Launch Preview: comply360 is not live yet. This is a preview only.
        </span>
      </div>
    </motion.div>
  );
}
