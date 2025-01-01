import { Header } from "../components/header";
import { ProfileSection } from "../components/profile-section";
import { ProjectsSection } from "../components/projects-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="max-w-xl mx-auto pt-8">
        <ProfileSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
