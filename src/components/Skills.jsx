export default function Skills() {
  const skillsCategories = [
    {
      title: "Graphic Designs",
      items: [
        { name: "Branding & Identity", status: "Advanced" },
        { name: "Print media & labels", status: "Advanced" },
        { name: "Social media & Digital face", status: "Expert" },
      ],
    },
    {
      title: "Video Editing",
      items: [
        { name: "Instagram Reels editing", status: "Expert" },
        { name: "Motion graphics", status: "Advanced" },
        { name: "AI videos END TO END", status: "Production" },
      ],
    },
    {
      title: "Automations & AI",
      items: [
        { name: "n8n Workflow Automation", status: "Ready" },
        { name: "RAG (Retrieval-Augmented Generation)", status: "Active" },
        { name: "LLM Integration", status: "Building currently" },
      ],
    },
    {
      title: "Digital Marketing",
      items: [
        { name: "Case study on Sanjay", status: "Completed" },
        { name: "Meta ads", status: "Active scaling" },
        { name: "Google ads", status: "Active scaling" },
      ],
    },
  ];

  const getSkillLevel = (status) => {
    switch (status) {
      case "Expert":
      case "Production":
      case "Completed":
        return 5;
      case "Advanced":
      case "Active scaling":
        return 4;
      case "Ready":
      case "Active":
        return 3;
      case "Building currently":
        return 2;
      default:
        return 3;
    }
  };

  return (
    <section id="skills" className="space-y-8 text-left select-none">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Capabilities
        </h2>
      </div>

      {/* Categories Bento Card */}
      <div className="p-8 rounded-[24px] bento-card dark:bento-card-dark shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillsCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-xs font-bold text-zinc-400 dark:text-zinc-550 uppercase tracking-widest">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="group/item flex items-center justify-between text-sm font-medium text-zinc-800 dark:text-zinc-200 p-2 -mx-2 rounded-xl transition-all duration-350 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 hover:translate-x-1 border border-transparent hover:border-indigo-500/10"
                  >
                    <span className="group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors duration-300">{item.name}</span>
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              i < getSkillLevel(item.status)
                                ? "bg-indigo-500 dark:bg-indigo-400 group-hover/item:bg-indigo-600 dark:group-hover/item:bg-indigo-300"
                                : "bg-zinc-200 dark:bg-zinc-800"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 bg-zinc-50 dark:bg-zinc-800/40 px-2.5 py-0.5 rounded transition-all duration-300 group-hover/item:bg-indigo-500/10 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400">
                        {item.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
