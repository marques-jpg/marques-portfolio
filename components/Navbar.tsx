import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href="/" className="font-bold text-xl tracking-tight text-black dark:text-white hover:opacity-80 transition-opacity">
        Gonçalo Marques
      </Link>
      <div className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
        <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
        <Link href="/projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</Link>
        <Link href="/experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</Link>
        {/* O atributo 'download' força o browser a descarregar o ficheiro em vez de o abrir */}
        <a href="/cv.pdf" download="Goncalo_Marques_CV.pdf" className="hover:text-black dark:hover:text-white transition-colors">CV</a>
      </div>
    </nav>
  );
}