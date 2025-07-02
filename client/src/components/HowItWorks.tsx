import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "1. Upload Drawings",
      description: "Drag and drop your architectural plans, engineering drawings, or any building documentation. We support PDF, DWG, and image formats."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "2. AI Review",
      description: "Our AI analyzes your plans against local building codes, zoning requirements, and jurisdiction-specific amendments in real-time."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0h2m-2 0v2a2 2 0 002 2h2a2 2 0 002-2v-2m0 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v6z" />
        </svg>
      ),
      title: "3. Permit Checklist",
      description: "Receive a comprehensive compliance report with pass/fail status, specific code references, and actionable recommendations."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Simple 3-step process that transforms complex compliance checks into automated intelligence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-brand-500/10 flex items-center justify-center">
                <div className="text-brand-500">{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
