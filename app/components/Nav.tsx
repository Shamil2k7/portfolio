export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 mix-blend-difference">
      <a href="#top" className="font-display text-lg tracking-tight text-[var(--cream)]">
        Shamil K
      </a>
      <nav className="flex items-center gap-6 md:gap-10 text-sm text-[var(--cream)]">
        <a href="#projects" className="hover:opacity-60 transition-opacity">
          Work<sup className="ml-0.5 text-[10px]"></sup>
        </a>
        
        <a href="#contact" className="hover:opacity-60 transition-opacity">
          Contact
        </a>
      </nav>
    </header>
  );
}
