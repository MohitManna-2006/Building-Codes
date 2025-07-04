import { motion } from "framer-motion";

export default function BenefitsGrid() {
  const benefits = [
    {
      stat: "99%",
      title: "Faster Checks",
      description: "Reduce weeks to minutes"
    },
    {
      stat: "$0",
      title: "Re-submittal Fees",
      description: "First-pass approval"
    },
    {
      stat: "540+",
      title: "Jurisdictions",
      description: "Complete US coverage"
    },
    {
      stat: "93%",
      title: "Reviewer Agreement",
      description: "Human-level accuracy"
    }
  ];

  return (
    <section className="mb-12 bg-[#f9fafe] dark:bg-transparent text-neutral-900 dark:text-neutral-100">
      <div className="rounded-3xl shadow-xl p-10 max-w-5xl mx-auto flex flex-col items-center dark:bg-transparent">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center">
          Why Choose Our AI Compliance Tool?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`rounded-2xl p-6 shadow-md dark:shadow-none flex flex-col items-center bg-white/70 dark:bg-charcoal ring-1 ring-neutral-200 dark:ring-charcoalLite hover:bg-brandPurple-50 dark:hover:bg-brandPurple-900/10`}
            >
              <span className="text-2xl font-semibold text-brand-500 mb-2">{benefit.stat}</span>
              <p className="text-lg text-gray-700 text-center font-semibold mb-1">{benefit.title}</p>
              <p className="text-sm text-gray-500 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
