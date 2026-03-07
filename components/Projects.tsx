export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <h3 className="text-2xl font-semibold text-black dark:text-white mb-6">Featured Projects & Mentorship</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-4">
          <h4 className="text-lg font-medium text-black dark:text-white">STEM Mentor & Project Lead ('Smart City')</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">IST, INESC-ID & Oeiras Municipality</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Mentoring K-12 schools in building futuristic smart city prototypes. Conducting monthly workshops on Programming, 3D Modeling, and Electronics. Active contributor to hands-on engineering initiatives like 'Oeiras Educa' and 'Lab in a Box'.
          </p>
        </div>

        {/* Projeto Rob9-16 */}
        <div className="border-l-2 border-gray-200 dark:border-gray-800 pl-4">
          <h4 className="text-lg font-medium text-black dark:text-white">Technical Mentor (Winter Camp)</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Rob9-16 @ Instituto Superior Técnico</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Led a 3-day immersive STEM program. Mentored children (ages 6-12) in building an Arduino-based Tic-Tac-Toe game, teaching core C++ programming logic and hands-on electronic prototyping (breadboarding/LEDs).
          </p>
        </div>
      </div>
    </section>
  );
}