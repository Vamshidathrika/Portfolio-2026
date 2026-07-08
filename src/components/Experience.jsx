import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, CheckCircle, TrendingUp } from "lucide-react";

export default function Experience() {
  const containerRef = useRef(null);
  
  // Track scroll inside the experience section to animate the timeline line height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  const experienceData = [
    {
      company: "Zenith Digital Group",
      position: "Lead Growth Marketer & CRO",
      duration: "Jan 2022 - Present",
      responsibilities: [
        "Direct $4.8M+ annual ad budgets across Google, Meta, and LinkedIn.",
        "Run landing page A/B split-tests to optimize checkout conversion rates (+34% avg).",
        "Deploy GA4 custom attribution loops and CRM pipeline integrations.",
      ],
      impact: "Managed $10M+ in spend, scaling client revenue by 3x on average.",
    },
    {
      company: "ClickLaunch Media Agency",
      position: "PPC Advertising Specialist",
      duration: "Mar 2020 - Dec 2021",
      responsibilities: [
        "Scaled Google PPC accounts for 15+ DTC and SaaS growth brands.",
        "Reduced client CPA by 28% utilizing smart automated bidding structures.",
        "Pioneered video advertising campaigns across TikTok and YouTube (+4.5% CTR).",
      ],
      impact: "Maintained a portfolio average 6.2x ROAS, saving $400k+ in ad waste.",
    },
    {
      company: "Horizon Franchise Networks",
      position: "SEO & Social Specialist",
      duration: "Jun 2018 - Feb 2020",
      responsibilities: [
        "Managed technical SEO structures for 35 clinical store locations.",
        "Engineered content hubs that grew organic keyword rankings from 2k to 18k.",
        "Drove patient appointment bookings by 45% through organic social channels.",
      ],
      impact: "Grew search impressions from 50k to 650k/mo, generating 5k organic leads/mo.",
    },
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/20 dark:border-slate-800/20 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display"
          >
            Professional Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
          {/* Central Vertical Line (hidden on small mobile, shown on md+) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block" />
          
          {/* Scroll-animated active path line overlay */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2 origin-top hidden md:block"
          />

          {/* Experience Timeline Rows */}
          <div className="space-y-12 relative">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.company}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  } relative`}
                >
                  {/* Outer circle Node (md+) */}
                  <div className="absolute left-6 md:left-1/2 top-8 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-primary flex items-center justify-center -translate-x-1/2 z-15 shadow-md hidden md:flex">
                    <Briefcase className="w-3.5 h-3.5 text-primary" />
                  </div>

                  {/* Left spacer for timeline alignment */}
                  <div className="w-full md:w-1/2" />

                  {/* Card Block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="w-full md:w-1/2 md:px-8 text-left"
                  >
                    <div className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/35 border border-slate-200/50 dark:border-slate-800/60 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700/60 transition-all duration-300 relative group overflow-hidden">
                      {/* Sub-bg hover accent */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-transparent group-hover:to-primary/5 transition-colors duration-500 -z-10" />

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.position}</h3>
                          <p className="text-xs font-bold text-primary dark:text-blue-400 mt-1">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 whitespace-nowrap bg-white dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700/40 px-2.5 py-1 rounded-lg w-fit">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Responsibilities list */}
                      <ul className="space-y-3 mb-6">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-655 dark:text-slate-400 leading-relaxed font-normal">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Impact Highlight */}
                      <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/40 dark:border-slate-800/40">
                        <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">Key Impact achieved</p>
                          <p className="text-xs font-bold text-slate-800 dark:text-white mt-0.5">{exp.impact}</p>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
