import { motion } from "framer-motion";

export default function TeamGrid() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Sarah Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
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
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block rounded-xl border border-brand-500 px-4 py-1 text-xs uppercase tracking-wide text-brand-500/90 mb-6">
            Team
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet the builders</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl bg-surface/70 ring-1 ring-white/10 p-6 text-center transition hover:ring-brand-500/60"
            >
              <img
                src={member.image}
                alt={`${member.name} headshot`}
                className="mx-auto h-20 w-20 rounded-full object-cover ring-2 ring-brand-500/40 group-hover:ring-brand-500 mb-4 transition-all"
              />
              <h4 className="font-medium text-white">{member.name}</h4>
              <p className="text-xs text-gray-400">{member.role}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
