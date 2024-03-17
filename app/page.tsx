import Lenis from '@/components/Lenis';
import ParallaxSection from '@/components/ParallaxSection';
import FeatureSection from '@/containers/Landing Page/FeatureSection';
import HeroSection from '@/containers/Landing Page/HeroSection';
import FeatureSection2 from '@/containers/Landing Page/FeatureSection2';
import FeatureSection3 from '@/containers/Landing Page/FeatureSection3';
import BenefitSection from '@/containers/Landing Page/BenefitsSection';
import TestimonialSection from '@/containers/Landing Page/TestimonialSection';

export default function Home() {
  return (
    <Lenis>
      <main className='overflow-x-hidden'>
        <HeroSection />
        <ParallaxSection />
        <FeatureSection />
        <FeatureSection2 />
        <FeatureSection3 />
        <BenefitSection />
        <TestimonialSection />
        {/* <div className='flex flex-row justify-between items-center h-screen px-24 bg-red-500' /> */}
      </main>
    </Lenis>
  );
}
