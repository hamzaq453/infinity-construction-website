import Hero from "@/components/Services/DetailPage/Hero";
import Overview from "@/components/Services/DetailPage/Overview";
import { industrialServicesData } from "@/components/Services/industrialData";
import Process from "@/components/Services/DetailPage/Process";
import Features from "@/components/Services/DetailPage/Features";
import Offer from "@/components/abouts/Offer";

const IndustrialDetailPage = () => {
  return (
    <div>
      <Hero title="Industrial Services" />
      <Overview heading={industrialServicesData.heading.firstLine} description={industrialServicesData.description} services={industrialServicesData.services.map(service => ({
        title: service.title,
        description: service.description,
        icon: service.icon.toString()
      }))} />
      
     
      <Process />
      <div className="my-16 max-w-6xl mx-auto">
      <Offer />
      </div>
      <Features />
    </div>
  );
};

export default IndustrialDetailPage;