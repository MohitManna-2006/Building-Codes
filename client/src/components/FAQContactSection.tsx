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
    <section className="mb-12 bg-[#f9fafe] dark:bg-charcoal text-neutral-900 dark:text-neutral-100">
      <div className="rounded-3xl bg-[#ecf3ff] dark:bg-[#1a1d24] shadow-xl p-10 max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4 text-center">Need Answers? We've Got You.</h2>
        <div className="grid lg:grid-cols-2 gap-8 w-full">
          <div className={`rounded-2xl p-6 shadow-md dark:shadow-none flex flex-col bg-white/70 dark:bg-charcoal ring-1 ring-neutral-200 dark:ring-charcoalLite`}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Frequently Asked Questions</h3>
            {/* FAQ Accordion or list here */}
            {faqs.map((faq, idx) => (
              <div key={faq.question} className="mb-4">
                <div className="font-semibold text-gray-700 dark:text-white mb-1">{faq.question}</div>
                <div className="text-gray-500 dark:text-neutral-200 text-sm">{faq.answer}</div>
              </div>
            ))}
          </div>
          <div className={`rounded-2xl p-6 shadow-md dark:shadow-none flex flex-col items-center bg-white/70 dark:bg-charcoal ring-1 ring-neutral-200 dark:ring-charcoalLite`}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Still have questions?</h3>
            <p className="text-gray-500 dark:text-neutral-200 mb-6">Email us or book a quick call.</p>
            <a
              href="mailto:team@comply360.com"
              className="inline-block bg-brand-500 px-5 py-3 rounded-md font-medium hover:bg-brand-600 text-white transition-colors mb-4"
            >
              Contact Support
            </a>
            <p className="text-sm text-gray-400 dark:text-neutral-400">Replies within 24 h.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
