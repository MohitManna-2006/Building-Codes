import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, MapPin, FileText } from 'lucide-react';

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
    "Quick design validation",
    "Jurisdiction auto-mapping",
    "One-click export to PDF/CSV"
  ];

  const expertise = [
    "Built by ex-permit reviewers & ML PhDs",
    "93% agreement with human plan-checkers",
    "Cuts re-submittals to zero"
  ];

  const featureIcons = [
    <Home className="w-6 h-6" />, // Compliance Co-pilot
    <Building2 className="w-6 h-6" />, // Instant design validation
    <MapPin className="w-6 h-6" />, // Jurisdiction auto-mapping
    <FileText className="w-6 h-6" /> // One-click export
  ];

  const getFeatureDescription = (feature: string) => {
    const descriptions = {
      "Compliance Co-pilot (live chat + code references)": "Get real-time assistance with live chat and instant access to relevant code references for your specific project requirements.",
      "Quick design validation": "Upload your designs and receive immediate feedback on compliance issues, saving weeks of revision cycles.",
      "Jurisdiction auto-mapping": "Our AI automatically identifies and applies the correct building codes for your specific jurisdiction from our database.",
      "One-click export to PDF/CSV": "Generate professional compliance reports and export data in multiple formats with just one click for easy sharing and documentation."
    };
    return descriptions[feature as keyof typeof descriptions] || "Advanced feature designed to streamline your compliance workflow.";
  };

  return (
    <section id="solution" className="pt-24 pb-24 lg:pt-32 lg:pb-36 scroll-mt-20 bg-white dark:bg-[#18132a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-blue-50/30 dark:from-purple-900/10 dark:via-transparent dark:to-blue-900/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Horizontal Layout: Text on Left, Features on Right */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200/50 dark:border-purple-700/30">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">CORE FEATURES</span>
              </div>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent mb-6 tracking-tight"
            >
              Key Features
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Powerful tools designed to revolutionize your compliance workflow
            </motion.p>
          </div>

          {/* Right Side - Features Grid */}
          <div className="lg:w-1/2 lg:-mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-800/80 dark:to-gray-800/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/20 dark:border-gray-700/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-400/10 dark:to-blue-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Icon container */}
                    <div className="relative flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <div className="text-white">
                          {featureIcons[idx]}
                        </div>
                      </div>
                      
                      {/* Feature number */}
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-700 dark:text-purple-300 font-bold text-xs">
                        {idx + 1}
                      </div>
                    </div>
                    
                    {/* Feature text */}
                    <div className="relative flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight min-h-[3rem] flex items-center">
                        {feature}
                      </h3>
                      
                      {/* Decorative line */}
                      <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-3"></div>
                      
                      {/* Feature description */}
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-1 text-sm">
                        {getFeatureDescription(feature)}
                      </p>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
