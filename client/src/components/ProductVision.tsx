import { motion } from "framer-motion";

export default function ProductVision() {
  const timelineSteps = [
    { label: "Idea", status: "completed" },
    { label: "MVP", status: "active" },
    { label: "Beta", status: "upcoming" },
    { label: "Public", status: "upcoming" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-xl border border-brand-500 px-4 py-1 text-xs uppercase tracking-wide text-brand-500/90 mb-6">
            Why we built BuildConform
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our vision for painless permits</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              After seeing countless projects delayed by archaic compliance processes, we envisioned a world where AI handles the bureaucracy so builders can focus on creating. Our mission is to eliminate the friction between great design and timely approval.
            </p>

            {/* Timeline */}
            <div className="relative mb-8">
              <div className="flex items-center justify-between">
                {timelineSteps.map((step, index) => (
                  <div key={step.label} className="flex flex-col items-center relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`w-4 h-4 rounded-full mb-2 ${
                        step.status === "completed"
                          ? "bg-accent-500"
                          : step.status === "active"
                          ? "bg-brand-500 animate-pulse-brand"
                          : "bg-gray-600"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        step.status === "active" ? "text-brand-500 font-medium" : "text-gray-400"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute top-2 left-0 right-0 h-0.5 bg-gray-700 -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <p>Vision Illustration</p>
                <p className="text-sm">Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
