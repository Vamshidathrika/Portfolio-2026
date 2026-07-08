import { motion } from "framer-motion";
import { projects } from "../data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Projects({ setSelectedProject }) {


  return (
    <motion.section 
      id="projects" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="space-y-8 text-left select-none"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Case Studies
        </h2>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-lg leading-relaxed font-normal">
          Explore granular breakdown metrics, setup flows, and growth audits for automations and marketing.
        </p>
      </motion.div>

      {/* Premium Bento Grid of Case Studies */}
      <motion.div 
        variants={containerVariants} 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50"
      >
        
        {/* Card 1: Jira Board Card (Wide, spans 2 cols) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.01, y: -2 }}
          onClick={() => setSelectedProject(projects.find(p => p.id === 2))}
          className="md:col-span-2 p-7 rounded-[24px] bento-card dark:bento-card-dark flex flex-col justify-between h-72 cursor-pointer transition-all duration-300"
        >
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            <span>Startup Task Pipeline</span>
            <span className="flex items-center gap-1.5 text-blue-500 font-bold text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Jira Active
            </span>
          </div>
          
          <div className="space-y-3.5 my-auto max-w-md">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900/60 rounded-xl border border-zinc-200/50 dark:border-zinc-800/40 flex items-center justify-between gap-2 shadow-sm">
              <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">AI Voice Screen Agent</span>
              <span className="text-[9px] font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded uppercase tracking-wider font-mono shrink-0">In Build</span>
            </div>
            <div className="p-3 bg-zinc-50 dark:bg-zinc-900/60 rounded-xl border border-zinc-200/50 dark:border-zinc-800/40 flex items-center justify-between gap-2 shadow-sm">
              <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 truncate">Sanjay Profile Growth Audit</span>
              <span className="text-[9px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded uppercase tracking-wider font-mono shrink-0">Done</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mt-auto pt-3 border-t border-zinc-200 dark:border-zinc-800/50">
            <div className="flex flex-wrap gap-1.5 min-w-0">
              <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/50 px-2 py-1 rounded-md uppercase tracking-wider">Jira</span>
              <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/50 px-2 py-1 rounded-md uppercase tracking-wider">Slack API</span>
              <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/50 px-2 py-1 rounded-md uppercase tracking-wider">Zapier</span>
            </div>
            <span className="shrink-0 text-xs font-bold text-blue-500 dark:text-blue-400 hover:underline">Details &rarr;</span>
          </div>
        </motion.div>

        {/* Card 2: Email Summarizer Card (Standard, spans 1 col) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.01, y: -2 }}
          onClick={() => setSelectedProject(projects.find(p => p.id === 1))}
          className="p-7 rounded-[24px] bento-card dark:bento-card-dark flex flex-col justify-between h-72 cursor-pointer transition-all duration-300"
        >
          <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            Email Summarizer
          </div>
          
          <div className="my-auto space-y-1">
            <div className="text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-none">45</div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold leading-normal">Messages digested today.</p>
          </div>

          <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-200 dark:border-zinc-800/50">
            <span className="text-[9px] font-bold text-blue-500 uppercase tracking-wider font-mono">100% Automated</span>
            <span className="text-xs font-bold text-blue-500 dark:text-blue-400 hover:underline">Details &rarr;</span>
          </div>
        </motion.div>

        {/* Card 3: PPC Ad Campaigns Card (Standard, spans 1 col) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.01, y: -2 }}
          onClick={() => setSelectedProject(projects.find(p => p.id === 4))}
          className="p-7 rounded-[24px] bento-card dark:bento-card-dark flex flex-col justify-between h-72 cursor-pointer transition-all duration-300"
        >
          <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            PPC Ad Campaigns
          </div>

          <div className="my-auto space-y-1">
            <div className="text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-none">4.8x</div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold leading-normal">Meta &amp; Google ROAS</p>
          </div>

          <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-200 dark:border-zinc-800/50">
            <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-wider font-mono">Scaling Live</span>
            <span className="text-xs font-bold text-blue-500 dark:text-blue-400 hover:underline">Details &rarr;</span>
          </div>
        </motion.div>

        {/* Card 4: Organic Growth Audit (Standard, spans 1 col) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.01, y: -2 }}
          onClick={() => setSelectedProject(projects.find(p => p.id === 3))}
          className="p-7 rounded-[24px] bento-card dark:bento-card-dark flex flex-col justify-between h-72 cursor-pointer transition-all duration-300"
        >
          <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            Organic Growth Audit
          </div>

          <div className="my-auto space-y-1.5">
            <div className="text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-none">+180%</div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold leading-normal">LinkedIn Engagement Increase &amp; Growth Strategy</p>
          </div>

          <div className="flex items-center justify-between gap-2 mt-auto pt-3 border-t border-zinc-200 dark:border-zinc-800/50">
            <div className="flex flex-wrap gap-1.5 min-w-0">
              <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/50 px-2 py-1 rounded-md uppercase tracking-wider">LinkedIn Ads</span>
              <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/50 px-2 py-1 rounded-md uppercase tracking-wider">Hook Strategy</span>
            </div>
            <span className="shrink-0 text-xs font-bold text-blue-500 dark:text-blue-400 hover:underline">Details &rarr;</span>
          </div>
        </motion.div>

        {/* Card 5: Aashirwad Hospital Branding Card (Standard, spans 1 col) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.01, y: -2 }}
          onClick={() => setSelectedProject(projects.find(p => p.id === 5))}
          className="p-7 rounded-[24px] bento-card dark:bento-card-dark flex flex-col justify-between h-72 cursor-pointer transition-all duration-300"
        >
          <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            Brand Identity
          </div>

          <div className="my-auto space-y-1.5">
            <div className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">Aashirwad Hospital</div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold leading-normal">Hospital Visual Branding Overhaul</p>
          </div>

          <div className="flex items-center justify-between gap-2 mt-auto pt-3 border-t border-zinc-200 dark:border-zinc-800/50">
            <div className="flex flex-wrap gap-1.5 min-w-0">
              <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/50 px-2 py-1 rounded-md uppercase tracking-wider">Figma</span>
              <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/50 px-2 py-1 rounded-md uppercase tracking-wider">Illustrator</span>
            </div>
            <span className="shrink-0 text-xs font-bold text-blue-500 dark:text-blue-400 hover:underline">Details &rarr;</span>
          </div>
        </motion.div>

        {/* Card 6: Nut Soul Brand Identity Card (Standard, spans 1 col) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.01, y: -2 }}
          onClick={() => setSelectedProject(projects.find(p => p.id === 6))}
          className="p-7 rounded-[24px] bento-card dark:bento-card-dark flex flex-col justify-between h-72 cursor-pointer transition-all duration-300"
        >
          <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            Brand Identity
          </div>

          <div className="my-auto space-y-1.5">
            <div className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight leading-none">Nut Soul</div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold leading-normal">Wellness Food Brand Launch</p>
          </div>

          <div className="flex items-center justify-between gap-2 mt-auto pt-3 border-t border-zinc-200 dark:border-zinc-800/50">
            <div className="flex flex-wrap gap-1.5 min-w-0">
              <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/50 px-2 py-1 rounded-md uppercase tracking-wider">Figma</span>
              <span className="text-[9px] font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/50 px-2 py-1 rounded-md uppercase tracking-wider">Packaging</span>
            </div>
            <span className="shrink-0 text-xs font-bold text-blue-500 dark:text-blue-400 hover:underline">Details &rarr;</span>
          </div>
        </motion.div>

      </motion.div>

    </motion.section>
  );
}
