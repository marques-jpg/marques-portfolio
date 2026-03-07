export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full flex justify-between items-center text-sm text-gray-400 mt-auto pt-8">
      <p>
        &copy; {currentYear} Guilherme Marques - All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="https://github.com/marques-jpg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/guilherme-marques-3a1b7b368/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}