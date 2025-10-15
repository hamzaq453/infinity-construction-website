import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import About1 from '@/components/Home/About1';
import Testimonials from '@/components/Home/TestimonialSlider/Testimonial';
import Service from '@/components/Home/Service';
import ProjectSection from '@/components/Home/ProjectSlider/ProjectSection';
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Hero />
        {/* <About/> */}
        <About1/>
        <Service/>
        <ProjectSection />
        <Testimonials/>
      </main>
      {/* <Footer /> */}
    </>
  );
}
