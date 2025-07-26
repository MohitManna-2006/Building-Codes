import { motion } from "framer-motion";

export default function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L10 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Extended Review Times",
      stat: "8 weeks",
      description: "Research shows building permit issuance averaging 79 days. That's nearly three months of project delays, mounting costs, and lost opportunities while waiting for approval.",
      color: "text-red-400",
      bgColor: "bg-red-500/10"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "$3.3 Billion U.S. Market",
      stat: "$34B",
      description: "The U.S. code compliance market represents $3.3 billion annually, with projections reaching $14.73 billion globally by 2030. Most of this cost stems from inefficiency, not value.",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      title: "Fragmented Systems",
      stat: "300+",
      description: "With 50+ states and thousands of local jurisdictions, each with unique codes and amendments, the current system lacks any standardization or unified approach.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-[#18132a] text-neutral-900 dark:text-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stylish, prominent heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-purple-500 via-violet-600 to-purple-500 bg-clip-text text-transparent drop-shadow-xl tracking-tight"
        >
          The Compliance Challenge
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block rounded-full border border-brand-500 px-4 py-1 text-xs uppercase tracking-wide text-brand-500/90 mb-4 bg-white/80 dark:bg-charcoal/40 shadow-sm">
            The Old Way
          </div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto font-medium">
          Building permit processes create significant delays and costs across the construction industry. The system is outdated, fragmented, and crying out for innovation.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={[
                "rounded-2xl p-6 sm:p-5 text-center shadow-xl bg-white/60 dark:bg-charcoal/80 ring-1 ring-gray-100 dark:ring-charcoalLite/40 backdrop-blur-md border border-transparent hover:border-brand-400 hover:shadow-2xl transition-all duration-200 group relative min-h-[260px] flex flex-col items-center justify-center"
              ].join(" ")}
            >
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:ring-2 group-hover:ring-brand-400 group-hover:ring-offset-2 transition-all duration-200" />
              <div className={`w-14 h-14 mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-white/80 via-${problem.color.replace('text-', '')}/30 to-white/60 shadow-lg group-hover:scale-110 transition-transform duration-200 border-2 border-white dark:border-charcoalLite/40`}>
                <div className={problem.color}>{problem.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white/90 tracking-tight">
                {problem.title}
              </h3>
              <div className={`font-extrabold text-2xl mb-1 bg-gradient-to-r from-brand-500 via-brand-700 to-brand-500 bg-clip-text text-transparent ${problem.color}`}>
                {problem.stat}
              </div>
              <p className="text-gray-400 text-sm font-normal">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}