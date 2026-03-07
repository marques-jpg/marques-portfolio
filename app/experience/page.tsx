import ExperienceComponent from '@/components/Experience';

export default function ExperiencePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Experience</h1>
      <p className="text-gray-500 dark:text-gray-400">Events, logistics, and volunteering.</p>
      <div className="mt-8">
        <ExperienceComponent />
      </div>
    </div>
  );
}