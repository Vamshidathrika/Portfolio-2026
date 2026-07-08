import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, CheckCircle2, HeartHandshake, Eye } from "lucide-react";

export default function About() {
  const marketingPhilosophy = [
    {
      title: "Data First",
      desc: "No guessing. Every strategy and budget allocation is backed by metrics and continuous A/B split-testing.",
      icon: Eye,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Full-Funnel Alignment",
      desc: "Matching click intent directly with product value propositions to maximize conversions and slash CAC.",
      icon: HeartHandshake,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const milestones = [
    {
      year: "2024 - Present",
      title: "Head of Growth & Performance",
      company: "Apex Digital Agency",
      desc: "Architecting scaling funnels for Enterprise SaaS clients. Oversaw $12M+ in annual ad spend.",
      icon: Briefcase,
    },
    {
      year: "2021 - 2024",
      title: "Senior Marketing Strategist",
      company: "Velocity Marketing Labs",
      desc: "Pioneered inbound SEO workflows resulting in a 320% average increase in organic client acquisitions.",
      icon: Award,
    },
    {
      year: "2018 - 2021",
      title: "PPC & Lead Gen Manager",
      company: "Skyline E-Commerce Group",
      desc: "Managed Google & Meta Ads strategy, scaling online sales and driving CPA reductions of up to 40%.",
      icon: GraduationCap,
    },
  ];

  const strengths = [
    "Full-Funnel CRO Testing",
    "Technical SEO Auditing",
    "High-Scale PPC Campaigns",
    "Data Analytics & Looker Studio",
    "Content Strategy & Copywriting",
    "B2B SaaS Lead Generation"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/20 dark:border-slate-800/20 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display"
          >
            Crafting Systems For Sustainable Brand Growth
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography & Strengths */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 space-y-8 text-left"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Engineering Predictable Growth
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                I build marketing engines that scale B2B SaaS and E-commerce brands. Over 7+ years, I have shifted the focus from vanity metrics to bottom-line results: CAC reduction, LTV expansion, and positive-ROI attribution. By combining creative copywriting, server-side data, and rigorous split-testing, I engineer high-ROAS marketing loops.
              </p>
            </motion.div>

            {/* Philosophy Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {marketingPhilosophy.map((phil) => {
                const Icon = phil.icon;
                return (
                  <div
                    key={phil.title}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${phil.color} flex items-center justify-center text-white mb-4 shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2">{phil.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{phil.desc}</p>
                  </div>
                );
              })}
            </motion.div>

            {/* Strengths Checklist */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Core Marketing Strengths</h4>
              <div className="grid grid-cols-2 gap-3">
                {strengths.map((str) => (
                  <div key={str} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium">{str}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="lg:col-span-6 text-left"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 pl-4">
              Career Journey
            </h3>
            
            {/* Timeline */}
            <div className="relative pl-6 border-l-2 border-slate-200/60 dark:border-slate-800/80 ml-4 space-y-8">
              {milestones.map((mil, idx) => {
                const Icon = mil.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
                    className="relative"
                  >
                    {/* Node Dot */}
                    <div className="absolute -left-[37px] top-1 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-primary flex items-center justify-center shadow-sm">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                    </div>

                    {/* Timeline Card */}
                    <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/30 border border-slate-200/40 dark:border-slate-800/40 hover:shadow-md hover:border-slate-350 dark:hover:border-slate-700/50 transition-all duration-300">
                      <span className="text-xs font-semibold text-primary dark:text-blue-400 bg-primary/5 dark:bg-primary/20 px-2.5 py-1 rounded-md">
                        {mil.year}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mt-3">
                        {mil.title}
                      </h4>
                      <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mb-2">
                        {mil.company}
                      </p>
                      <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed font-normal">
                        {mil.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
