import ProjectsComponent from '@/components/Projects';

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
      <div className="mt-8">
        <ProjectsComponent />
      </div>
    </div>
  );
}