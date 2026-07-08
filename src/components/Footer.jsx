export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 py-10 text-center select-none text-[11px] text-zinc-400 dark:text-zinc-500 font-medium">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Vamshi Krishna. Hand-crafted with React & Tailwind.</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/vamshi-krishna-42417122a/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
