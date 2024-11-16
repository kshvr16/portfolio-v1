import LandingComponent from '@/components/landing-section/LandingComponent';
import AboutComponent from '@/components/about-section/AboutComponent';
import UnderConstructionComponent from '@/components/under-construction-section/UnderConstructionComponent';

export default function Home() {
  return (
      <main>
          <LandingComponent />
          <AboutComponent />
          <UnderConstructionComponent />
      </main>
  );
}
