export default function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <h3 className="text-2xl font-semibold text-black dark:text-white mb-6">Experience & Volunteering</h3>
      
      <div className="space-y-8">
        {/* SINFO */}
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-lg font-medium text-black dark:text-white">Logistics & Event Operations</h4>
            <span className="text-sm text-gray-500">2023 - Present</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">SINFO (Semana Informática) | Lisbon</p>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>Managed end-to-end event production for one of Portugal's largest student-led tech events.</li>
            <li>Oversaw venue layout, technical AV infrastructure, and vendor management (catering/furniture).</li>
            <li>Optimized resources and coordinated on-site execution for thousands of attendees.</li>
          </ul>
        </div>

        {/* Secundário */}
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="text-lg font-medium text-black dark:text-white">Student Council Member</h4>
            <span className="text-sm text-gray-500">Previous</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Odivelas Secondary School</p>
          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
            <li>Active member of the Event Planning and Sports Departments, coordinating school-wide logistics and athletic tournaments.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}