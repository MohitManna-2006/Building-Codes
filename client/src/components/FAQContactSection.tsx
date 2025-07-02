import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQContactSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What file types do you support?",
      answer: "We support PDF, DWG, DXF, and common image formats (JPG, PNG, TIFF). Our AI can extract and analyze building plans from virtually any standard architectural or engineering document format."
    },
    {
      question: "Which jurisdictions are covered?",
      answer: "We currently cover 540+ jurisdictions across the United States, including major cities, counties, and states. Our coverage includes local amendments and variations to standard building codes."
    },
    {
      question: "Will city reviewers accept the report?",
      answer: "Yes, our reports are designed to meet industry standards and include specific code references that reviewers recognize. We maintain a 93% agreement rate with human plan-checkers."
    },
    {
      question: "How do I join the beta?",
      answer: "Simply sign up for our waitlist using any of the email forms on this page. We'll notify you when beta access becomes available and provide early access to qualifying users."
    }
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-500/5 rounded-2xl shadow-inner ring-1 ring-white/10 p-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need answers? We've got you.
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* FAQ Accordion */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-8">Frequently Asked Questions</h3>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-surface/70 rounded-xl ring-1 ring-white/10 overflow-hidden">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-6 py-4 text-left font-medium flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      {faq.question}
                      <motion.svg
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    <AnimatePresence>
                      {openFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-gray-400">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-surface/70 rounded-xl ring-1 ring-white/10 p-8">
                <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
                <p className="text-gray-400 mb-6">Email us or book a quick call.</p>

                <a
                  href="mailto:team@buildconform.com"
                  className="inline-block bg-brand-500 px-5 py-3 rounded-md font-medium hover:bg-brand-600 transition-colors mb-4"
                >
                  <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact Support
                </a>

                <p className="text-sm text-gray-400">Replies within 24 h.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
