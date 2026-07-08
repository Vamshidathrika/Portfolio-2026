import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function Tools() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Advertising", "SEO", "Analytics & Data", "CRM & CMS"];

  const toolsData = [
    { name: "Google Ads", category: "Advertising", desc: "Paid search, display, and shopping campaign scaling.", color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
    { name: "Meta Business Suite", category: "Advertising", desc: "FB & IG target configuration and commerce management.", color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20" },
    { name: "Google Analytics 4", category: "Analytics & Data", desc: "Event-based user path tracking and custom reporting.", color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
    { name: "Google Tag Manager", category: "Analytics & Data", desc: "Client & server-side container tracking deployment.", color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20" },
    { name: "SEMrush", category: "SEO", desc: "Organic competitor research and keyword gap audits.", color: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
    { name: "Ahrefs", category: "SEO", desc: "Backlink link profile verification and domain authority audits.", color: "text-blue-600 bg-blue-600/10 border-blue-600/20" },
    { name: "HubSpot", category: "CRM & CMS", desc: "Lead scoring systems, contact pipelines, and inbound loops.", color: "text-orange-600 bg-orange-600/10 border-orange-600/20" },
    { name: "Mailchimp", category: "CRM & CMS", desc: "Newsletter triggers and transactional email sequences.", color: "text-yellow-600 bg-yellow-600/10 border-yellow-600/20" },
    { name: "Looker Studio", category: "Analytics & Data", desc: "Interactive executive reporting dashboards.", color: "text-blue-400 bg-blue-400/10 border-blue-400/20" },
    { name: "Shopify", category: "CRM & CMS", desc: "E-commerce catalog management and cart checkouts.", color: "text-green-500 bg-green-500/10 border-green-500/20" },
    { name: "WordPress", category: "CRM & CMS", desc: "Open-source landing pages and blogging architecture.", color: "text-sky-600 bg-sky-600/10 border-sky-600/20" },
    { name: "Canva Pro", category: "CRM & CMS", desc: "Social asset template layouts and quick graphic edits.", color: "text-purple-500 bg-purple-500/10 border-purple-500/20" },
  ];

  // Filtering Logic
  const filteredTools = toolsData.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="tools" className="py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/20 dark:border-slate-800/20 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display"
          >
            Digital Marketing Stack
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-650 dark:text-slate-400 mt-4 text-sm max-w-lg mx-auto"
          >
            A look at the professional platforms and analytical software I leverage daily to optimize client funnels and track conversion metrics.
          </motion.p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Category Chips */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/10"
                    : "bg-white dark:bg-slate-800 text-slate-550 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search tools or capabilities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-750 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 focus:border-transparent text-slate-800 dark:text-slate-100 transition-all duration-200"
            />
          </div>

        </div>

        {/* Tools Cards Grid */}
        <div className="max-w-5xl mx-auto min-h-[250px]">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="group p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/50 dark:border-slate-800/60 shadow-sm text-left flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Tool Badge */}
                    <div className={`w-fit px-3 py-1 rounded-lg text-[10px] font-bold border uppercase tracking-wider ${tool.color}`}>
                      {tool.name}
                    </div>
                    
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                      {tool.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/40 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-widest">{tool.category}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
