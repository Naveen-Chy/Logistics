import {Slider} from '@/components/home/slider'
import WhyChooseUs from '@/components/home/whychoose'
import HeroSection from '@/components/home/herosection';
import ServicesSection from '@/components/home/tailoredcouriersolutions';
import Streamlined from '@/components/home/deliveries';
import { TestimonialsSlider } from '@/components/home/testimonialsslider';
import { BlogSlider } from '@/components/home/blog';

export default function Home() {
  return (
    <div>
      <Slider/>
      <WhyChooseUs />
      <HeroSection/>
      <ServicesSection/>
      <Streamlined/>
      <TestimonialsSlider/>
      <BlogSlider/>
    </div>
  );
}
