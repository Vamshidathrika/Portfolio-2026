import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Target, 
  AlertTriangle, 
  Settings, 
  Compass, 
  Activity, 
  Award, 
  Briefcase, 
  GraduationCap, 
  MessageSquare, 
  CheckCircle,
  FileCode,
  Sparkles,
  X
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const slideRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function CaseStudyPage({ project, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [lightboxImage, setLightboxImage] = useState(null);

  // Disable body scroll when lightbox is active
  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxImage]);



  if (!project) return null;

  const renderCreativesShowcase = () => {
    if (!project.creatives || project.creatives.length === 0) return null;
    const isBrandIdentity = project.industry === "Brand Identity";

    return (
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className={`space-y-6 ${isBrandIdentity ? "" : "border-t border-zinc-200/50 dark:border-zinc-900/50 pt-8"}`}
      >
        <motion.h2 variants={itemVariants} className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-2">
          <Award className="w-4 h-4 text-purple-500" /> Deliverables Showcase
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.creatives.map((cr, idx) => {
            const isLogoImage = project.industry === "Brand Identity";
            return (
              <motion.div 
                key={idx} 
                variants={scaleVariants}
                onClick={() => setLightboxImage(cr.img)}
                className="rounded-2xl border border-zinc-200/50 dark:border-zinc-900/80 bg-white dark:bg-zinc-950 overflow-hidden shadow-sm hover:border-purple-500/25 transition-all group flex flex-col cursor-pointer"
              >
                <div className={`w-full h-48 overflow-hidden relative flex items-center justify-center ${
                  isLogoImage 
                    ? "bg-white dark:bg-zinc-950 p-6" 
                    : "bg-zinc-100 dark:bg-zinc-900"
                }`}>
                  <img 
                    src={cr.img} 
                    alt={cr.title} 
                    className={`transition-transform duration-300 group-hover:scale-[1.04] ${
                      isLogoImage
                        ? "max-w-full max-h-full w-auto h-auto object-contain"
                        : "w-full h-full object-cover"
                    }`}
                  />
                  {!isLogoImage && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  )}
                </div>
                <div className="p-4 text-left flex-grow flex flex-col justify-center border-t border-zinc-100 dark:border-zinc-900">
                  <span className="block text-[9px] font-bold font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">{cr.title}</span>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 font-normal leading-normal">{cr.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    );
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#030303] text-zinc-800 dark:text-zinc-200 select-none pb-24 relative overflow-hidden transition-colors duration-300">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Premium Sticky Back Nav Bar */}
      <div className="sticky top-0 left-0 w-full z-40 bg-[#fafafa]/80 dark:bg-[#030303]/80 backdrop-blur-md border-b border-zinc-250/20 dark:border-zinc-900/50 py-4 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all cursor-pointer group bg-zinc-100 dark:bg-zinc-900/80 px-4 py-2 rounded-full border border-zinc-200/30 dark:border-zinc-800/30"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            Back to Portfolio
          </button>
          
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
              CASE STUDY &bull; {project.id}
            </span>
          </div>
        </div>
      </div>

      {/* Case Study Container */}
      <article className="max-w-3xl mx-auto px-6 sm:px-8 pt-12 space-y-16">
        
        {/* 1. HERO SECTION */}
        <motion.header 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100/50 dark:border-indigo-900/20 px-3.5 py-1 rounded-full text-indigo-650 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
            {project.industry}
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl font-black text-zinc-950 dark:text-white tracking-tight leading-tight">
            {project.title}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg font-normal text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {project.desc}
          </motion.p>

          {/* Results Badge */}
          <motion.div variants={scaleVariants} className="inline-flex items-center gap-3 p-1.5 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 border border-purple-500/10 rounded-2xl">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-450 p-2.5 rounded-xl text-white shadow-sm flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="pr-5 text-left">
              <span className="block text-[8px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest leading-none mb-1">Key Accomplishment</span>
              <span className="text-sm font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-450 bg-clip-text text-transparent leading-none">
                {project.results}
              </span>
            </div>
          </motion.div>
        </motion.header>

        {project.industry === "Brand Identity" && renderCreativesShowcase()}

        {/* 2. RESULTS & animated KPIs */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.h2 variants={itemVariants} className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-500" /> Measurable Business Impact
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((kpi, index) => (
              <motion.div 
                key={index} 
                variants={scaleVariants}
                className="p-5 rounded-[20px] bg-white dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-900/80 shadow-sm relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300"
              >
                {/* Micro accent top glow line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="block text-[8px] font-bold font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                  {kpi.label}
                </span>
                
                <span className="block text-2xl font-black text-zinc-950 dark:text-white tracking-tight mt-2.5 group-hover:scale-[1.02] transition-transform duration-300">
                  {kpi.value}
                </span>

                {/* Subtitle indicator */}
                <span className="block text-[9px] font-medium text-emerald-500 mt-1 flex items-center gap-1">
                  <CheckCircle className="w-2.5 h-2.5 shrink-0" /> Verified metric
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 3. BEFORE VS AFTER COMPARISON */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.h2 variants={itemVariants} className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" /> Before vs After Audit
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Before (Orange/Red) */}
            <motion.div 
              variants={slideLeftVariants}
              className="p-6 rounded-[22px] bg-red-500/[0.02] dark:bg-red-500/[0.01] border border-red-500/10 dark:border-red-500/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-bl-full pointer-events-none" />
              <h3 className="text-xs font-bold text-red-500 dark:text-red-400 uppercase tracking-wider mb-4">
                Prior State (The BottleNeck)
              </h3>
              <ul className="space-y-3.5">
                {project.beforeAfter?.before.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After (Emerald) */}
            <motion.div 
              variants={slideRightVariants}
              className="p-6 rounded-[22px] bg-emerald-500/[0.02] dark:bg-emerald-500/[0.01] border border-emerald-500/10 dark:border-emerald-500/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
              <h3 className="text-xs font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-wider mb-4">
                Optimized State (The Solution)
              </h3>
              <ul className="space-y-3.5">
                {project.beforeAfter?.after.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs text-zinc-800 dark:text-zinc-200 leading-relaxed font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* 4. OVERVIEW, CHALLENGE & STRATEGY */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-12 gap-8 border-t border-zinc-200/50 dark:border-zinc-900/50 pt-8">
            <div className="sm:col-span-4 space-y-2">
              <h2 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-500" /> Objective
              </h2>
              <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">The Target Goal</p>
            </div>
            <div className="sm:col-span-8">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                {project.overview}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-12 gap-8 border-t border-zinc-200/50 dark:border-zinc-900/50 pt-8">
            <div className="sm:col-span-4 space-y-2">
              <h2 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" /> The Challenge
              </h2>
              <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Roadblocks Faced</p>
            </div>
            <div className="sm:col-span-8">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                {project.challenge}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-12 gap-8 border-t border-zinc-200/50 dark:border-zinc-900/50 pt-8">
            <div className="sm:col-span-4 space-y-2">
              <h2 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Settings className="w-4 h-4 text-purple-500" /> The Strategy
              </h2>
              <p className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">The Playbook</p>
            </div>
            <div className="sm:col-span-8">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal">
                {project.strategy}
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* 5. EXECUTION & TIMELINE */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-6 border-t border-zinc-200/50 dark:border-zinc-900/50 pt-8"
        >
          <motion.h2 variants={itemVariants} className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-2">
            <Compass className="w-4 h-4 text-blue-500" /> Execution Roadmap
          </motion.h2>

          <div className="relative pl-6 border-l border-zinc-200 dark:border-zinc-900 space-y-8 ml-2 py-2">
            {project.timeline?.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[30px] top-1.5 w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 border-4 border-zinc-50 dark:border-[#030303] group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300" />
                
                <div className="space-y-1 text-left">
                  <span className="block text-[8px] font-mono font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest">
                    {step.step} &middot; {step.title}
                  </span>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 6. TOOLS USED */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-4"
        >
          <motion.h2 variants={itemVariants} className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-2">
            <FileCode className="w-4 h-4 text-indigo-500" /> Stack & Technology Integrated
          </motion.h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tool) => (
              <motion.span 
                key={tool} 
                variants={scaleVariants}
                className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100/60 dark:bg-zinc-900/80 border border-zinc-200/20 dark:border-zinc-800/40 px-3 py-1.5 rounded-lg select-none hover:border-indigo-500/20 transition-all"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* 7. CAMPAIGN CREATIVE SHOWCASE */}
        {project.industry !== "Brand Identity" && renderCreativesShowcase()}

        {/* 8. MY CONTRIBUTION & KEY LEARNINGS */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-zinc-200/50 dark:border-zinc-900/50 pt-8"
        >
          {/* Contribution */}
          <div className="space-y-4">
            <motion.h2 variants={itemVariants} className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-500" /> My Contribution
            </motion.h2>
            <ul className="space-y-3">
              {project.myContribution?.map((ct, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants}
                  className="flex gap-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal"
                >
                  <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  {ct}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Learnings */}
          <div className="space-y-4">
            <motion.h2 variants={itemVariants} className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-500" /> Key Takeaways
            </motion.h2>
            <ul className="space-y-3">
              {project.learnings?.map((ln, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants}
                  className="flex gap-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-normal"
                >
                  <CheckCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  {ln}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* 9. CLIENT TESTIMONIAL */}
        {project.testimonial && (
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="space-y-6 border-t border-zinc-200/50 dark:border-zinc-900/50 pt-8"
          >
            <motion.h2 variants={itemVariants} className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-indigo-500" /> Client Testimonial
            </motion.h2>

            <motion.div 
              variants={scaleVariants}
              className="p-7 rounded-[22px] bg-gradient-to-b from-white to-zinc-50/50 dark:from-zinc-950 dark:to-zinc-950/80 border border-zinc-200/60 dark:border-zinc-900/80 relative shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="text-zinc-300 dark:text-zinc-850 text-5xl font-serif absolute top-4 left-4 pointer-events-none select-none">“</div>
              
              <blockquote className="text-xs font-normal italic leading-relaxed text-zinc-600 dark:text-zinc-300 relative z-10 pl-4">
                {project.testimonial.quote}
              </blockquote>

              <div className="flex items-center gap-3 mt-6 border-t border-zinc-200 dark:border-zinc-900/60 pt-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-200/20 shadow-sm shrink-0">
                  <img 
                    src={project.testimonial.avatar} 
                    alt={project.testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-zinc-800 dark:text-zinc-100">{project.testimonial.author}</span>
                  <span className="block text-[9px] font-medium text-zinc-400 dark:text-zinc-500">{project.testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* 10. CALL TO ACTION (CTA) */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="pt-8 border-t border-zinc-200/50 dark:border-zinc-900/50"
        >
          <motion.div 
            variants={scaleVariants}
            className="p-8 rounded-[24px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center space-y-6 relative overflow-hidden shadow-xl select-none group"
          >
            
            {/* Background elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-black/10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />
            
            <div className="space-y-2 relative z-10">
              <h3 className="text-lg sm:text-2xl font-black tracking-tight">
                Want to Scale Your Business Growth?
              </h3>
              <p className="text-[11px] sm:text-xs text-white/80 max-w-md mx-auto leading-relaxed font-normal">
                Let's set up a custom audit call to discover bottlenecks in your campaigns, design flows, or task automations.
              </p>
            </div>

            <div className="relative z-10 pt-2 flex flex-col sm:flex-row gap-3 items-center justify-center">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  // Wait for overlay to fade out, then smooth scroll
                  setTimeout(() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      const offset = 80;
                      const elementPosition = el.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                  }, 150);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-50 transition-colors shadow-md text-center cursor-pointer"
              >
                Let's Collaborate
              </a>
              <button 
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-black/10 text-white border border-white/20 font-bold text-xs hover:bg-white/10 transition-colors text-center cursor-pointer"
              >
                Back to Portfolio
              </button>
            </div>
          </motion.div>
        </motion.section>

      </article>

      {/* Zoom Lightbox Modal */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center pointer-events-auto select-none"
              onClick={() => setLightboxImage(null)}
            >
              {/* Close Button top-right */}
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-white/80 hover:bg-white/20 transition cursor-pointer z-50"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Displaying Image Container */}
              <div 
                className="relative max-w-[85vw] max-h-[85vh] flex items-center justify-center p-2 select-text"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  src={lightboxImage}
                  alt="Zoomed deliverable asset"
                  className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/5"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
