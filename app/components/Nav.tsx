import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-6 mix-blend-difference">
      <Link href="/#top" className="font-display text-lg tracking-tight text-[var(--cream)] hover:opacity-80 transition-opacity">
        Shamil K
      </Link>
      <nav className="flex items-center gap-6 md:gap-8 text-sm text-[var(--cream)]">
        <Link href="/#projects" className="hover:opacity-60 transition-opacity">
          Work<sup className="ml-0.5 text-[10px]"></sup>
        </Link>
        <Link href="/projects" className="hover:opacity-60 transition-opacity font-medium">
          All Projects
        </Link>
        <Link href="/#contact" className="hover:opacity-60 transition-opacity">
          Contact
        </Link>
      </nav>
    </header>
  );
}
