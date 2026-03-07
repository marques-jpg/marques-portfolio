import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-end py-10">
      <div className="flex gap-8 text-sm font-medium text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
        <Link href="/experience" className="hover:text-white transition-colors">Experience</Link>
        <a href="/cv.pdf" download="Guilherme_Marques_CV.pdf" className="hover:text-white transition-colors">CV</a>
      </div>
    </nav>
  );
}