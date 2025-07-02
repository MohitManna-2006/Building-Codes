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
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-surface/70 rounded-2xl ring-1 ring-white/10 p-8 text-center"
            >
              <div className="text-4xl font-bold text-accent-500 mb-2">{benefit.stat}</div>
              <div className="text-lg font-semibold mb-2">{benefit.title}</div>
              <p className="text-sm text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
