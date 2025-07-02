import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SolutionSection() {
  const [activeTab, setActiveTab] = useState("architect");

  const tabs = [
    { id: "architect", label: "Architect" },
    { id: "engineer", label: "Engineer" },
    { id: "official", label: "Code Official" }
  ];

  const tabContent = {
    architect: {
      title: "For Architects",
      content: [
        "Upload your design drawings and get instant feedback on zoning compliance, setback requirements, and building code violations before submitting to the city.",
        "Reduce revision cycles from weeks to minutes with AI-powered pre-checks that catch issues early in the design process.",
        "Save thousands on consultant fees and resubmittal costs."
      ],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    engineer: {
      title: "For Engineers",
      content: [
        "Verify structural compliance and safety requirements with automated code analysis tailored to your specific engineering discipline.",
        "Cross-reference multiple jurisdictions simultaneously to ensure your designs meet all applicable standards.",
        "Generate detailed compliance reports that satisfy both internal QA and external review processes."
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    official: {
      title: "For Code Officials",
      content: [
        "Streamline your review process with AI-assisted plan checking that highlights potential issues and code references.",
        "Maintain consistency across your team with standardized analysis based on your jurisdiction's specific amendments.",
        "Reduce review time while improving thoroughness and accuracy of permit evaluations."
      ],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    }
  };

  const steps = [
    { number: "1", text: "Upload drawings (PDF/DWG)" },
    { number: "2", text: "AI parses local amendments" },
    { number: "3", text: "Checklist & pass/fail" }
  ];

  const features = [
    "Compliance Co-pilot (live chat + code references)",
    "Instant design validation (sub-1 min)",
    "Jurisdiction auto-mapping (540+ regions)",
    "One-click export to PDF/CSV"
  ];

  const expertise = [
    "Built by ex-permit reviewers & ML PhDs",
    "93% agreement with human plan-checkers",
    "Cuts re-submittals to zero"
  ];

  return (
    <section id="solution" className="py-24 lg:py-32 bg-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-xl border border-brand-500 px-4 py-1 text-xs uppercase tracking-wide text-brand-500/90 mb-6">
            Our Solution
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            AI-driven compliance, from upload to approval.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">How it works (high-level)</h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-sm font-semibold">
                      {step.number}
                    </div>
                    <span>{step.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Key features</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <svg className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Relevant expertise & efficiency</h3>
              <div className="space-y-3 text-gray-400">
                {expertise.map((item, index) => (
                  <motion.p
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    • {item}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="AI compliance dashboard interface"
              className="rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </motion.div>
        </div>

        {/* Use-case Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-surface/70 rounded-2xl ring-1 ring-white/10 p-8">
            <h3 className="text-xl font-semibold mb-8 text-center">Use-Case Scenarios</h3>

            <div className="flex justify-center mb-8">
              <div className="flex bg-white/5 rounded-xl p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-brand-500 text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <h4 className="font-semibold mb-3">{tabContent[activeTab as keyof typeof tabContent].title}</h4>
                  {tabContent[activeTab as keyof typeof tabContent].content.map((paragraph, index) => (
                    <p key={index} className="text-gray-400 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={tabContent[activeTab as keyof typeof tabContent].image}
                    alt={`${tabContent[activeTab as keyof typeof tabContent].title} scenario`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
