import { Navbar } from "@/components/Navbar";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Projects } from "@/components/Projects";
import { SkillsExperience } from "@/components/SkillsExperience";
import { AboutStory } from "@/components/AboutStory";
import { ContactFooter } from "@/components/ContactFooter";
import { CustomCursor } from "@/components/CustomCursor";
import { LeadershipEducation } from "@/components/LeadershipEducation";
import { ProfessionalCredentials } from "@/components/ProfessionalCredentials";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0c14] text-slate-100 selection:bg-sky-500/25 selection:text-white">
      {/* Custom Precision Follower Cursor */}
      <CustomCursor />

      {/* Floating Modern Header */}
      <Navbar />

      {/* Component 1 & 2: 500vh Sticky Scrollytelling Canvas + Parallax Overlay */}
      <ScrollyCanvas
        totalFrames={90}
        sequencePathPrefix="/sequence/frame_"
      />

      {/* About and profile placeholder */}
      <AboutStory />

      {/* Featured project illustrations */}
      <Projects />

      {/* Leadership and education journey */}
      <LeadershipEducation />

      {/* Technical skills */}
      <SkillsExperience />

      {/* Verified credentials and activities */}
      <ProfessionalCredentials />

      {/* Modern Footer with Quick Connect & Live Time */}
      <ContactFooter />
    </main>
  );
}
