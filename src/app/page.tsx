import Hero from '@/components/home/Hero';
import PillarSection from '@/components/home/PillarSection';
import LatestNews from '@/components/home/LatestNews';

export default function Home() {
  return (

    <main className="transition-all duration-300">
      <Hero />
      
      <PillarSection />
      
      <LatestNews />
    </main>
  );
}