import { motion } from "framer-motion";

export default function TeamGrid() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "David Kumar",
      role: "AI Research Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Emily Zhang",
      role: "Compliance Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white dark:bg-charcoal text-neutral-900 dark:text-neutral-100 scroll-mt-20">
      <div className="rounded-3xl bg-[#ecf3ff] dark:bg-[#1a1d24] shadow-xl p-10 max-w-5xl mx-auto flex flex-col items-center">
        <div className="w-full flex justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center">Meet the Builders</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full justify-items-center">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center bg-white/70 dark:bg-charcoal rounded-2xl shadow-md dark:shadow-none ring-1 ring-neutral-200 dark:ring-charcoalLite p-6 w-80 h-80"
            >
              <img
                src={member.image}
                alt={`${member.name} headshot`}
                className="mx-auto h-20 w-20 rounded-full object-cover ring-2 ring-brand-500/40 group-hover:ring-brand-500 mb-4 transition-all"
              />
              <h4 className="font-medium text-gray-800 dark:text-white">{member.name}</h4>
              <p className="text-xs text-gray-500 dark:text-neutral-200">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
