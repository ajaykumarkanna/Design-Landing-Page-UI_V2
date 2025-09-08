import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SocialProofSection } from "./components/SocialProofSection";
import { CommunitySection } from "./components/CommunitySection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F9FA' }}>
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <CommunitySection />
        <ContactSection />
      </main>
    </div>
  );
}