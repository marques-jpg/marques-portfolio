export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <p>
          &copy; {2026} Guilherme Marques. All rights reserved.
        </p>
        <p>
          Built with Next.js. Released under the{" "}
          <a 
            href="https://opensource.org/licenses/MIT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-black dark:hover:text-white transition-colors"
          >
            MIT License
          </a>.
        </p>
      </div>
    </footer>
  );
}