import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "Upload Drawings",
      description: "Drag and drop your architectural plans or building docs. PDF, DWG, images supported."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI Review",
      description: "Our AI checks your plans against local codes and requirements in real time."
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2m-2 0v2a2 2 0 002 2h2a2 2 0 002-2v-2m0 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v6z" />
        </svg>
      ),
      title: "Permit Checklist",
      description: "Get a compliance report with pass/fail status and actionable recommendations."
    }
  ];

  return (
    <section className="w-full py-12 bg-white dark:bg-transparent border-t border-gray-100 dark:border-white/10 scroll-mt-20" id="how-it-works">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">How It Works</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-200 text-center mb-8">From upload to permit checklist in three simple steps.</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center bg-[#f7fafd] dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 shadow-sm text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              aria-label={step.title}
            >
              <div className="mb-4 flex items-center justify-center rounded-xl bg-white dark:bg-white/10 w-16 h-16 shadow">
                <span className="text-brand-500">{step.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-200">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
