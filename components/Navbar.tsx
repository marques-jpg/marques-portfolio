import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center pb-16 md:pb-20">
      <Link href="/" className="text-sm tracking-widest text-ink uppercase hover:opacity-60 transition-opacity">
        GM
      </Link>
      <div className="flex items-center gap-8 text-sm tracking-wide text-ink-2">
        <Link href="/" className="hover:text-ink transition-colors duration-200">Home</Link>
        <Link href="/projects" className="hover:text-ink transition-colors duration-200">Projects</Link>
        <Link href="/experience" className="hover:text-ink transition-colors duration-200">Experience</Link>
        <a href="/cv.pdf" download="Guilherme_Marques_CV.pdf" className="hover:text-ink transition-colors duration-200">CV</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}