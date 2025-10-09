import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import About1 from '@/components/Home/About1';
import Testimonials from '@/components/Home/TestimonialSlider/Testimonial';
import Service from '@/components/Home/Service';
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Hero />
        {/* <About/> */}
        <About1/>
        <Service/>
        <Testimonials/>
      </main>
      {/* <Footer /> */}
    </>
  );
}
