import { motion } from "framer-motion";
import PDFScannerAnimation from './PDFScannerAnimation';

export default function ProductVision() {
  const timelineSteps = [
    { label: "Idea", status: "completed" },
    { label: "MVP", status: "active" },
    { label: "Beta", status: "upcoming" },
    { label: "Public", status: "upcoming" }
  ];

  return (
    <section className="w-full bg-white dark:bg-[#18132a] py-16 lg:py-20">
      <div className="px-4 md:px-12 lg:px-32 xl:px-64">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block rounded-full border border-brand-500/30 dark:border-brandPurple-600/30 px-6 py-2 text-xs uppercase tracking-wider text-brand-500 dark:text-brandPurple-400 mb-8 bg-brand-50/50 dark:bg-brandPurple-900/20 backdrop-blur-sm shadow-sm">
            Why we built ConformaBuild
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent tracking-tight">
            Our vision for painless permits
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 place-items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start justify-center h-full lg:pr-16"
          >
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
              After seeing countless projects delayed by archaic compliance processes, we envisioned a world where AI handles the bureaucracy so builders can focus on creating. Our mission is to eliminate the friction between great design and timely approval.
            </p>

            {/* Timeline */}
            <div className="relative mb-8 w-full">
              <div className="flex items-center justify-between gap-x-12">
                {timelineSteps.map((step, index) => (
                  <div key={step.label} className="flex flex-col items-center relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      animate={step.status === "active" ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.15, repeat: step.status === "active" ? Infinity : 0, repeatType: "loop", repeatDelay: 1 }}
                      viewport={{ once: true }}
                      className={`w-8 h-8 rounded-full mb-3 shadow-lg border-3 ${
                        step.status === "completed"
                          ? "bg-green-500 border-green-500 shadow-green-500/30"
                          : step.status === "active"
                          ? "bg-purple-600 border-purple-600 shadow-purple-600/40 ring-4 ring-purple-200 dark:ring-purple-900/30"
                          : "bg-gray-300 border-gray-300 dark:bg-gray-600 dark:border-gray-600"
                      }`}
                    />
                    <span
                      className={`text-sm font-semibold tracking-wide ${
                        step.status === "active"
                          ? "text-purple-600 dark:text-purple-400 font-bold"
                          : step.status === "completed"
                          ? "text-green-600 dark:text-green-400"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute top-4 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-purple-600 to-gray-300 dark:to-gray-600 opacity-60 -z-10 rounded-full shadow-sm"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-800/80 dark:to-gray-800/40 ring-1 ring-gray-200/50 dark:ring-gray-700/50 backdrop-blur-sm shadow-xl flex items-center justify-center p-8">
              <PDFScannerAnimation />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
