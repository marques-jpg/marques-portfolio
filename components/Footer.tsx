export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col sm:flex-row justify-between items-center text-xs text-ink-3 mt-auto pt-12 gap-4">
      <p>
        &copy; {currentYear} Guilherme Marques
      </p>
      <div className="flex gap-6">
        <a href="https://github.com/marques-jpg" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors duration-200">
          GitHub
        </a>
        <a href="mailto:guilherme@marques.at.eu.org" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors duration-200">
          Email
        </a>
        <a href="https://www.linkedin.com/in/guilherme-marques-3a1b7b368/" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors duration-200">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}