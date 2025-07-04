import { motion } from "framer-motion";

export default function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L10 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Endless Delays",
      stat: "8 weeks",
      description: "average permit review lag",
      color: "text-red-400",
      bgColor: "bg-red-500/10"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Costly Rework",
      stat: "$34B",
      description: "annual re-design cost (US)",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      title: "Rule Overload",
      stat: "300+",
      description: "pages of codes per city",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#f9fafe] dark:bg-transparent text-neutral-900 dark:text-neutral-100">
      <div className="w-full px-6">
        <h2 className="w-full text-3xl lg:text-4xl font-bold mb-6 text-balance text-center">
          The Compliance Bottleneck Costing Billions
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-xl border border-brand-500 px-4 py-1 text-xs uppercase tracking-wide text-brand-500/90 mb-6">
            The Old Way
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Traditional building permit processes create massive delays, costly rework, and frustrated
            stakeholders across the entire construction industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={[
                "rounded-2xl p-8 text-center shadow-md dark:shadow-none bg-white/70 dark:bg-charcoal ring-1 ring-neutral-200 dark:ring-charcoalLite hover:bg-brandPurple-50 dark:hover:bg-brandPurple-900/10"
              ].join(" ")}
            >
              <div className={`${problem.bgColor} w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center`}>
                <div className={problem.color}>{problem.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <div className={`${problem.color} text-3xl font-bold mb-2`}>{problem.stat}</div>
              <p className="text-gray-400">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}