import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import About1 from "@/components/Home/About1";
import Testimonials from "@/components/Home/TestimonialSlider/Testimonial";
import Service from "@/components/Home/Service";
import ProjectSection from "@/components/Home/ProjectSlider/ProjectSection";
import Project1 from "@/components/Home/Project/Project1";
import Offer from "@/components/abouts/Offer";
import ClientLoo from "@/components/Home/ClientLoo";
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Hero />
        {/* <About/> */}
        <ClientLoo />
        <About1 />
        <Service />
        {/* <ProjectSection /> */}
        <section className="relative px-4 py-12 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <Offer />
          </div>
        </section>
        <Project1 />
        <Testimonials />
      </main>
      {/* <Footer /> */}
    </>
  );
}
