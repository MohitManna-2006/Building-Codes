import { motion } from "framer-motion";
import { Upload, MapPin, Settings, FileText, CheckCircle } from "lucide-react";

function StepCard({ step, title, description, icon }: { step: number, title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="w-52 h-52 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center text-center px-3 py-4 relative z-10">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-bold text-sm shadow-lg">
          {step}
        </div>
      </div>
      <div className="mb-1 mt-2 text-purple-500">{icon}</div>
      <h3 className="font-bold text-base mb-1 text-gray-900 dark:text-white leading-tight">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed px-1 overflow-hidden">{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: "Upload Your Plans",
      description: "Drag and drop your files—we're building support for all major formats including PDF and CAD files.",
      icon: <Upload className="w-5 h-5" />
    },
    {
      step: 2,
      title: "Select Jurisdictions",
      description: "Choose one location or multiple. Check state and local requirements. See how codes interact across boundaries.",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      step: 3,
      title: "Configure Settings",
      description: "Customize your preferences for more relevant, actionable, and personalized reports.",
      icon: <Settings className="w-5 h-5" />
    },
    {
      step: 4,
      title: "Get Your Report",
      description: "Receive detailed analysis with compliance status, specific citations, and actionable next steps.",
      icon: <FileText className="w-5 h-5" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-[#18132a] text-neutral-900 dark:text-neutral-100 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent tracking-tight text-center">
        How It Works
      </h2>
      <div className="relative w-[500px] h-[500px] mx-auto mt-16">
        {/* SVG Arrows */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 500 500">
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#22c55e" />
            </marker>
            <marker id="animated-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
              <polygon points="0 0, 8 4, 0 8" fill="#22c55e" />
            </marker>
          </defs>
          
          {/* Static Arrow Paths */}
          {/* Step 1 → 2 */}
          <motion.path
            d="M250 50 Q100 100 50 250"
            stroke="#22c55e"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
            className="opacity-30"
          />
          {/* Step 2 → 3 */}
          <motion.path
            d="M50 250 Q100 400 250 450"
            stroke="#22c55e"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
            className="opacity-30"
          />
          {/* Step 3 → 4 */}
          <motion.path
            d="M250 450 Q400 400 450 250"
            stroke="#22c55e"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            viewport={{ once: true }}
            className="opacity-30"
          />
          {/* Step 4 → 1 */}
          <motion.path
            d="M450 250 Q400 100 250 50"
            stroke="#22c55e"
            strokeWidth="3"
            fill="none"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            viewport={{ once: true }}
            className="opacity-30"
          />

          {/* Animated Traveling Arrow */}
          <motion.path
            d="M250 50 Q100 100 50 250 Q100 400 250 450 Q400 400 450 250 Q400 100 250 50"
            stroke="#22c55e"
            strokeWidth="4"
            fill="none"
            markerEnd="url(#animated-arrowhead)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear",
              repeatDelay: 0.5
            }}
            className="opacity-80"
          />
        </svg>
        
        {/* Step 1 - Top */}
        <div className="absolute left-[250px] top-[50px] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <StepCard {...steps[0]} />
        </div>
        {/* Step 2 - Left */}
        <div className="absolute left-[50px] top-[250px] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <StepCard {...steps[1]} />
        </div>
        {/* Step 3 - Bottom */}
        <div className="absolute left-[250px] top-[450px] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <StepCard {...steps[2]} />
        </div>
        {/* Step 4 - Right */}
        <div className="absolute left-[450px] top-[250px] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <StepCard {...steps[3]} />
        </div>
        
        {/* Center Node */}
        <div className="absolute left-[250px] top-[250px] transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center animate-pulse">
            <div className="w-4 h-4 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
