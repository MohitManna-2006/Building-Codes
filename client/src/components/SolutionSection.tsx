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
    { number: "3", text: "Checklist & pass/fail" },
    { number: "4", text: "Ready to go Code Compliance" },
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
    <section id="solution" className="py-12 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="rounded-3xl bg-[#f7fbff] dark:bg-transparent shadow-xl p-8 sm:p-12 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            AI-Driven Compliance, From Upload to Approval
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-start md:items-stretch">
            {/* How it works */}
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-center mb-4 text-gray-900 dark:text-white">How it works (high-level)</h3>
              <div className="flex flex-col gap-4 h-full">
                {steps.map((step, idx) => (
                  <div
                    key={step.number}
                    className={`flex items-center rounded-xl bg-white dark:bg-charcoalLite shadow-sm px-4 py-3 flex-1 ${idx % 2 === 1 ? 'bg-[#f3f6fa] dark:bg-charcoalLite/80' : ''}`}
                    style={{ minHeight: '64px', height: '100%' }}
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-500 text-white font-bold mr-4">{step.number}</span>
                    <span className="text-gray-900 dark:text-neutral-100 font-medium">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Key Features */}
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-center mb-4 text-gray-900 dark:text-white">Key Features</h3>
              <div className="flex flex-col gap-4 h-full">
                {features.map((feature, idx) => (
                  <div
                    key={feature}
                    className={`flex items-center rounded-xl bg-white dark:bg-charcoalLite shadow-sm px-4 py-3 flex-1 ${idx % 2 === 1 ? 'bg-[#f3f6fa] dark:bg-charcoalLite/80' : ''}`}
                    style={{ minHeight: '64px', height: '100%' }}
                  >
                    <span className="text-gray-900 dark:text-neutral-100 font-medium text-center w-full">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Expertise */}
          <div className="w-full mt-4">
            <div className="rounded-2xl bg-white/80 dark:bg-charcoalLite border border-gray-100 dark:border-charcoalLite p-6 shadow-sm flex flex-col items-center">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center">Relevant Expertise & Efficiency</h4>
              <ul className="text-gray-700 dark:text-neutral-300 text-center space-y-1">
                {expertise.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
