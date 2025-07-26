import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadCapture from "./LeadCapture";

export default function FAQContactSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What file types do you support?",
      answer: "We plan to support PDF, DWG, DXF, and common image formats (JPG, PNG, TIFF). Our AI will be able extract and analyze building plans from virtually any standard architectural or engineering document format."
    },
    {
      question: "Which jurisdictions are covered?",
      answer: "We plan to cover 540+ jurisdictions across the United States, including major cities, counties, and states. Our coverage will include local amendments and variations to standard building codes."
    },
    {
      question: "Will city reviewers accept the report?",
      answer: "Yes, our reports will be designed to meet industry standards and include specific code references that reviewers recognize."
    },
    {
      question: "How do I join the beta?",
      answer: "Simply sign up for our waitlist using any of the email forms on this page. We'll notify you when beta access becomes available and provide early access to qualifying users."
    }
  ];

  return (
    <section id="faq-contact" className="py-20 md:py-24 bg-white dark:bg-[#18132a] text-neutral-900 dark:text-neutral-100 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-10">
        <span className="block w-12 h-1 rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-violet-500 mb-4"></span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-center">
          Need Answers? We've Got You.
        </h2>
      </div>
      <div className="w-full flex justify-center px-4">
        <div className="flex flex-col lg:flex-row gap-16 w-full max-w-5xl items-start lg:translate-x-8 h-auto lg:h-[500px]">
          {/* Lead Capture (left) */}
          <div className="w-full max-w-lg h-full bg-white/80 dark:bg-charcoal/80 backdrop-blur-md rounded-2xl shadow-xl ring-1 ring-brand-200/30 p-6 break-words">
            <LeadCapture />
          </div>
          {/* FAQ (right) */}
          <div className="w-full max-w-lg h-full bg-white/80 dark:bg-charcoal/80 backdrop-blur-md rounded-2xl shadow-xl ring-1 ring-brand-200/30 p-6 break-words overflow-hidden overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Frequently Asked Questions</h3>
            <div className="flex flex-col justify-start">
              {faqs.map((faq, idx) => (
                <div key={faq.question} className="mb-3 last:mb-0">
                  <div className="font-semibold text-gray-700 dark:text-white mb-0.5 text-lg">{faq.question}</div>
                  <div className="text-gray-500 dark:text-neutral-200 text-sm leading-snug">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
