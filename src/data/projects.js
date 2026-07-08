export const projects = [
  {
    id: 1,
    title: "AI Email Summarizer",
    industry: "Automations & AI",
    desc: "An automation pipeline that leverages LLMs to summarize founders' daily incoming emails.",
    results: "Saves 45m/day",
    tech: ["n8n Workflow", "OpenAI API", "Gmail API", "Notion API", "Slack Webhooks"],
    overview: "Designed for early-stage startup founders overwhelmed by email overload. The tool pulls incoming emails in real-time, extracts text content, and outputs high-quality action-oriented daily summaries directly to Slack.",
    challenge: "Parsing long nested email threads, maintaining structural data integrity, and classifying priority/spam accurately while maintaining data security.",
    strategy: "Implemented webhook listeners to capture incoming Gmail events, built dynamic JSON prompts for structured OpenAI responses, and synced summaries to a central Notion database with daily alerts on Slack.",
    metrics: [
      { label: "Daily Time Saved", value: "45 Minutes" },
      { label: "Categorization Accuracy", value: "98%" },
      { label: "Token Cost Reduction", value: "40%" },
    ],
    beforeAfter: {
      before: [
        "Founder spending 1.5+ hours daily scanning raw emails manually.",
        "Important client follow-ups lost in marketing newsletter noise.",
        "Manual triage leading to key business response delays."
      ],
      after: [
        "A structured AI digest delivered to Slack at 8:00 AM daily.",
        "High-priority emails automatically flagged with action items.",
        "Inbox zero achieved with zero manual reading needed."
      ]
    },
    timeline: [
      { step: "Week 1", title: "API Audit & Schema Mapping", desc: "Mapped email metadata schemas and analyzed priority classification logic." },
      { step: "Week 2", title: "Workflow Pipeline Build", desc: "Constructed Gmail webhook triggers and OpenAI assistant prompting parameters in n8n." },
      { step: "Week 3", title: "Slack & Notion Sync", desc: "Configured target digest formats, structured JSON outputs, and built Notion log sync." },
      { step: "Week 4", title: "Edge-case Optimization", desc: "Refined prompt rules for multi-thread emails and optimized categorizer accuracy." }
    ],
    myContribution: [
      "Configured secure OAuth API channels for Gmail and Slack integrations.",
      "Designed advanced prompting structures with dynamic JSON schemas for structural output validation.",
      "Optimized token consumption by sanitizing HTML emails before sending to OpenAI APIs."
    ],
    learnings: [
      "Dynamic prompt validation is essential to prevent LLM format hallucination when syncing with databases.",
      "Pre-filtering HTML headers is a cost-effective way to decrease API expenses by up to 50%."
    ],

    creatives: [
      { title: "n8n Workflow Structure", desc: "Trigger → Filter → LLM Categorizer → Slack Sync", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop" },
      { title: "Slack Digest Layout", desc: "Interactive block-kit layout with priorities", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" }
    ]
  },
  {
    id: 2,
    title: "Jira Board for Founders",
    industry: "Automations & AI",
    desc: "Structured tracking pipelines and automation triggers optimized for early-stage startups.",
    results: "100% Alignment",
    tech: ["Jira Software", "GitHub Actions", "Slack API", "Zapier"],
    overview: "Default Jira setups are often over-engineered for small teams. This configuration simplifies founder-level execution while keeping developers aligned without manual admin work.",
    challenge: "Keeping development cards in sync with actual code commits without requiring manual administrative overhead.",
    strategy: "Mapped custom lightweight states (Backlog -> Sprint -> QA -> Done), set up GitHub Action triggers to auto-advance cards on PR merge, and enabled automated daily Slack status digests.",
    metrics: [
      { label: "Card Transit Velocity", value: "+30%" },
      { label: "Team Adoption Rate", value: "100%" },
      { label: "Admin Time Saved", value: "5h/week" },
    ],
    beforeAfter: {
      before: [
        "Jira boards cluttered with incomplete cards and outdated tickets.",
        "Developers forgetting to advance task statuses manually on PR merge.",
        "Founders having to ask developers for status updates daily."
      ],
      after: [
        "Automated task progression mapped directly to GitHub PR merges.",
        "Clean founder-level sprint views showing blockages clearly.",
        "Daily automated summaries posted directly in Slack."
      ]
    },
    timeline: [
      { step: "Week 1", title: "Lightweight Sprint Mapping", desc: "Designed workflow stages specifically for fast-paced startup teams." },
      { step: "Week 2", title: "GitHub Webhook Binding", desc: "Wrote automation scripts linking PR triggers to Jira ticket transitions." },
      { step: "Week 3", title: "Slack Digest Config", desc: "Configured Zapier daily digest mapping for task completions." },
      { step: "Week 4", title: "Team Rollout & Training", desc: "Onboarded engineering team and ran adoption audit checks." }
    ],
    myContribution: [
      "Customized sprint configuration and states inside Jira workflow editor.",
      "Developed webhooks in Zapier linking development status to founder communications.",
      "Documented standard procedures for commit-message linking patterns."
    ],
    learnings: [
      "The best way to guarantee task board compliance is to automate transitions through engineering actions.",
      "Founders don't need to see ticket details; they just need active blocking items and sprint progress."
    ],

    creatives: [
      { title: "Simplified Jira board view", desc: "Clean status lanes optimized for speed", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" },
      { title: "GitHub-Jira Automation", desc: "Trigger mapping linking branches to tasks", img: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=400&auto=format&fit=crop" }
    ]
  },
  {
    id: 3,
    title: "Case Study on Sanjay",
    industry: "Digital Marketing",
    desc: "Organic audience audit and growth content strategy mapping for a high-influence creator profile.",
    results: "+180% Growth",
    tech: ["LinkedIn Organic", "Instagram Reels", "Content Hook Matrix", "CapCut", "Figma"],
    overview: "Branding audit, audience mapping, and organic growth positioning for Sanjay, a high-influence founder and content creator.",
    challenge: "Stagnating organic reach due to shifts in platform algorithms and reliance on oversaturated templates.",
    strategy: "Mapped high-CTR hooks customized to a founder demographic, created an editorial carousel calendar, and established an end-to-end vertical video editing workflow.",
    metrics: [
      { label: "Engagement Increase", value: "+180%" },
      { label: "Organic Inbound Leads", value: "2.4x Increase" },
      { label: "Weekly Impressions", value: "250K+" },
    ],
    beforeAfter: {
      before: [
        "Stagnant organic growth with less than 50 engagements per post.",
        "Overly generic templates that failed to capture brand voice.",
        "Inconsistent video editing quality and irregular scheduling."
      ],
      after: [
        "Weekly impressions surpassing 250,000 views organically.",
        "A customized hook matrix targeting high-value tech founders.",
        "Polished, dynamic vertical video batching with premium layouts."
      ]
    },
    timeline: [
      { step: "Week 1", title: "Target Audience Audit", desc: "Mapped competitor positioning and current follower persona details." },
      { step: "Week 2", title: "Hook Matrix Formulation", desc: "Engineered high-retention text hooks and custom typography templates." },
      { step: "Week 3", title: "Video Batching Pipeline", desc: "Wrote video scripts and set up video editing guidelines in CapCut." },
      { step: "Week 4", title: "Initial Campaign Release", desc: "Rolled out new formats and monitored real-time viewer retention charts." }
    ],
    myContribution: [
      "Engineered visual guidelines and custom branding color templates in Figma.",
      "Edited first batch of high-converting Instagram Reels and vertical clips.",
      "Parsed weekly analytical insights to optimize caption content and hashtag strategies."
    ],
    learnings: [
      "Creator positioning works best when addressing target client pain points directly, rather than general advice.",
      "The first 3 seconds of vertical video dictate over 80% of ultimate reach outcomes."
    ],

    creatives: [
      { title: "LinkedIn Carousel Templates", desc: "High-contrast visual design layouts", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=400&auto=format&fit=crop" },
      { title: "Instagram Hook Reels", desc: "Engaging text overlays on vertical frames", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&auto=format&fit=crop" }
    ]
  },
  {
    id: 4,
    title: "Meta & Google Ads Campaign",
    industry: "Digital Marketing",
    desc: "Scaling paid acquisition channels with highly structured creative tests and funnel tracking.",
    results: "4.8x ROAS",
    tech: ["Meta Ads Manager", "Meta Conversions API", "Google Tag Manager", "A/B Testing", "GA4"],
    overview: "Deploying high-converting visual creative loops and structured server-side attribution pipelines to scale customer acquisition spend profitably.",
    challenge: "High Customer Acquisition Costs (CAC) and post-iOS14 tracking attribution gaps.",
    strategy: "Configured Server-Side Conversions API (CAPI) to bypass browser ad blockers, built dynamic retargeting funnels, and ran continuous weekly creative testing cycles.",
    metrics: [
      { label: "Average ROAS", value: "4.8x" },
      { label: "CPA Reduction", value: "-25%" },
      { label: "Monthly Leads Generated", value: "1,200+" },
    ],
    beforeAfter: {
      before: [
        "Unreliable tracking pixels with up to 35% data loss on conversions.",
        "Meta Ads scaling leading directly to inflated acquisition costs.",
        "Static creative styles causing banner fatigue within two weeks."
      ],
      after: [
        "Near 100% conversion match rate using server-side Conversions API.",
        "Attained stable 4.8x ROAS while tripling monthly marketing budgets.",
        "A structured creative matrix that rotates fresh angles weekly."
      ]
    },
    timeline: [
      { step: "Week 1", title: "CAPI & Pixel Overhaul", desc: "Configured server-side event tracking and customized triggers in GTM." },
      { step: "Week 2", title: "Audience Pipeline Setup", desc: "Created detailed custom/lookalike audiences and retargeting pathways." },
      { step: "Week 3", title: "Creative Blueprint", desc: "Drafted high-impact video ad concepts and customized static hooks." },
      { step: "Week 4", title: "Scaling Phase", desc: "Launched creative testing, scaled winning assets, and optimized search ads." }
    ],
    myContribution: [
      "Configured GA4 tags, custom parameters, and Conversion API webhooks.",
      "Designed ad creative concepts, hooks, and directed high-converting video overlays.",
      "Supervised budget scaling structures across Meta and Google Search campaigns."
    ],
    learnings: [
      "Server-side tracking is no longer optional for media buying; it is crucial to feed machine-learning algorithms accurate data.",
      "Advantage+ Shopping campaigns scale best when fed 10+ varied creative angles at any time."
    ],

    creatives: [
      { title: "Attribution Dashboard", desc: "GA4 server-side reporting panel", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop" },
      { title: "Facebook Ad Angle Tests", desc: "High-contrast dynamic creative visual grid", img: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=400&auto=format&fit=crop" }
    ]
  },
  {
    id: 5,
    title: "Aashirwad Hospital Branding",
    industry: "Brand Identity",
    desc: "A complete visual identity overhaul and brand strategy for a multi-specialty healthcare facility.",
    results: "New Brand Launch",
    tech: ["Figma", "Adobe Illustrator", "Brand Strategy", "Vector Design"],
    overview: "Aashirwad Hospital required a modern, professional, and empathetic brand identity. The goal was to design a clean, cohesive visual system—starting with a custom vector logo that reflects care, trust, and medical excellence—and translate it across digital touchpoints, stationary, and signage.",
    challenge: "Combining elements of care (hands), maternal health (mother & child), and medical trust (the cross/cadeceus) into a single, cohesive, modern vector logo that works at small scales (e.g. prescription headers) and large formats (e.g. building signage).",
    strategy: "Developed a custom logo combining healing hands cradle, a mother-and-child silhouette, and a clean medical cross. Unified the brand colors with a professional teal (medical trust) and soft gold (care and warmth), establishing comprehensive brand guidelines for healthcare operations.",
    metrics: [
      { label: "Signage Visibility", value: "100% Unified" },
      { label: "Patient Perception Trust", value: "+45% Rating" },
      { label: "Brand Asset Templates", value: "15+ Deployed" },
    ],
    beforeAfter: {
      before: [
        "Inconsistent, outdated logo usage across digital reports and print materials.",
        "Mismatched color schemes failing to convey professional healthcare quality.",
        "No structured brand guidelines for hospital stationery or doctor prescriptions."
      ],
      after: [
        "A unified, modern vector identity implemented across all administrative logs.",
        "Empathy-driven color system (teal and gold) establishing professional trust.",
        "Complete stationery package (prescription pads, bills, certificates) fully standardized."
      ]
    },
    timeline: [
      { step: "Week 1", title: "Brand Identity Audit", desc: "Assessed existing hospital assets, mapped doctor/patient persona expectations, and researched local healthcare visual positioning." },
      { step: "Week 2", title: "Logo Concepts & Vectorizing", desc: "Sketched visual combinations of hands, cross, and mother-child care. Developed vector variations in Illustrator." },
      { step: "Week 3", title: "Typography & Color Systems", desc: "Selected clean sans-serif typography for high legibility on medical logs, and refined the corporate teal-gold color palette." },
      { step: "Week 4", title: "Brand Guidelines & Asset Delivery", desc: "Compiled logo variants, created letterhead/prescriptions templates, and finalized hospital identity guidelines." }
    ],
    myContribution: [
      "Designed and vectorized the core Aashirwad Hospital brand logo symbol.",
      "Developed the brand typography system and empathy-focused color palette.",
      "Created unified print-ready layouts for prescription pads, OPD invoices, and digital patient reports."
    ],
    learnings: [
      "Healthcare branding must balance clinical trust with warm empathy; combining medical symbols with human elements achieves this.",
      "Vector logos for hospitals must remain legible at very small scale on patient tags and invoice headers."
    ],

    creatives: [
      { title: "OPD Invoice & Letterhead", desc: "Hospital letterhead layout for medical log systems", img: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783321091/artboard_2_copy_720_grmc3v.png" }
    ]
  },
  {
    id: 6,
    title: "Nut Soul Brand Identity",
    industry: "Brand Identity",
    desc: "A bold, soulful visual identity crafted for a premium nut-based wellness food brand.",
    results: "Brand Launched",
    tech: ["Figma", "Adobe Illustrator", "Brand Strategy", "Packaging Design"],
    overview: "Nut Soul is a premium wellness snack brand centered around natural nut-based products. The brand required a fresh, modern identity that reflects wholesome nutrition, earthy warmth, and premium quality—one that could work seamlessly across packaging, digital storefronts, and social media.",
    challenge: "Crafting a brand personality that felt both premium and approachable, while distinctly standing apart from mainstream snack packaging that leans generic. The logo and color system had to evoke 'soul'—warmth, nature, and nourishment—without falling into clichéd health-food aesthetics.",
    strategy: "Developed a custom typographic wordmark with organic, hand-crafted character. Anchored the visual language in a warm earth-tone palette (deep terracotta, warm ivory, and forest green), crafted packaging mockups for the core product line, and established social media visual templates to ensure a unified brand presence at launch.",
    metrics: [
      { label: "Brand Assets Delivered", value: "20+ Files" },
      { label: "Packaging Variants", value: "3 SKUs" },
      { label: "Social Template Kit", value: "12 Designs" }
    ],
    beforeAfter: {
      before: [
        "No distinct brand identity or logo—operating with a generic placeholder name and design.",
        "Inconsistent packaging across product SKUs with no brand cohesion.",
        "Zero social media visual presence or content template system."
      ],
      after: [
        "A complete, soulful brand identity with a custom wordmark and iconographic logo.",
        "Unified, premium packaging across 3 product lines with branded color system.",
        "12-template social content kit ready for Instagram and e-commerce listings."
      ]
    },
    timeline: [
      { step: "Week 1", title: "Brand Discovery & Positioning", desc: "Researched the premium wellness snack market, mapped brand archetype (The Caregiver), and defined audience persona." },
      { step: "Week 2", title: "Logo & Wordmark Design", desc: "Developed multiple logomark concepts, refined the chosen direction into a clean vector system with light and dark variants." },
      { step: "Week 3", title: "Color, Type & Packaging", desc: "Finalized the earth-tone color palette and sans-serif typeface pairing. Designed packaging mockups for the hero product SKU." },
      { step: "Week 4", title: "Brand Guidelines & Social Kit", desc: "Compiled the brand bible, created social media templates, and packaged all deliverables for handoff." }
    ],
    myContribution: [
      "Designed and vectorized the Nut Soul logomark and custom typographic wordmark.",
      "Developed the earth-tone brand color palette and premium typography pairing system.",
      "Created packaging mockups for three product SKUs and a 12-piece social media design kit."
    ],
    learnings: [
      "Wellness food branding thrives on authenticity—organic textures and hand-drawn elements build emotional trust far better than sterile minimalism.",
      "Packaging is the first brand touchpoint; investing in cohesive SKU design pays dividends in shelf differentiation and perceived product premium."
    ],

    creatives: [
      { title: "Brand Logo & Wordmark", desc: "Custom vector logomark in warm earth-tone palette", img: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783321538/artboard_2_720_r6zevh.png" },
      { title: "Print Label Sheet - Almond", desc: "Wholesome nut spread label design variations", img: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783340707/03_page-0001_v1ywxh.jpg" },
      { title: "Print Label Sheet - Cashew", desc: "Premium quality product labeling assets", img: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783340726/06_page-0001_wre2eo.jpg" },
      { title: "Print Label - Red Chili Flakes", desc: "Clean typography packaging design for organic spices", img: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783340745/red_chilliflakes_page-0001_npb0fe.jpg" },
      { title: "Print Label - Panchameva", desc: "Detailed nutritional wellness product labeling layout", img: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783341113/panchameva_copy_page-0001_e781ex.jpg" },
      { title: "Print Label - Chia Seeds", desc: "Empathetic, clear label design showing organic certification", img: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783341121/chia_final_page-0001_wtttgl.jpg" },
      { title: "Print Label Sheet - Final 01", desc: "Print-ready layout sheet with product parameters", img: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783341160/lables_for_print_final_page-0001_py43lx.jpg" },
      { title: "Print Label Sheet - Final 02", desc: "Standardized vector template sheet for physical print", img: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783341162/lables_for_print_final_page-0002_litjse.jpg" },
      { title: "Print Label Sheet - Final 03", desc: "Backside layout with ingredient listings & barcode placement", img: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783341163/lables_for_print_final_page-0003_oorcgr.jpg" },
      { title: "Print Label Sheet - Final 04", desc: "Standard dimensions mapping for jar labels", img: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783341164/lables_for_print_final_page-0004_lm79cw.jpg" },
      { title: "Print Label Sheet - Final 05", desc: "Complete vector print bundle collection overview", img: "https://res.cloudinary.com/ddeyyxq14/image/upload/v1783341165/lables_for_print_final_page-0005_u36d3j.jpg" }
    ]
  }
];
