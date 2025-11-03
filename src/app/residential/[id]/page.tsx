import { notFound } from "next/navigation";
import Hero from "@/components/Services/DetailPage/Hero";
import Overview from "@/components/Services/DetailPage/Overview";
import { residentialServicesData } from "@/components/Services/residentialData";
import Process from "@/components/Services/DetailPage/Process";
import Features from "@/components/Services/DetailPage/Features";
import Offer from "@/components/abouts/Offer";

interface PageProps {
  params: {
    id: string;
  };
}

const ResidentialDetailPage = ({ params }: PageProps) => {
  const { id } = params;
  
  // Find service by slug
  const service = residentialServicesData.services.find(
    (s) => s.slug === id
  );

  // If service not found, use fallback to general detail page
  const detailData = service?.detailPage || residentialServicesData.detailPage;

  // If service doesn't exist and no fallback, redirect to general residential page
  if (!service && !residentialServicesData.detailPage) {
    notFound();
  }

  return (
    <div>
      <Hero 
        title={detailData.hero.title}
        tagline={detailData.hero.tagline}
        ctaText={detailData.hero.ctaText}
        ctaLink={detailData.hero.ctaLink}
      />
      <Overview 
        heading={detailData.overview.heading}
        description={detailData.overview.description}
        services={detailData.overview.services}
      />
      <Process 
        values={detailData.process.values}
        heading={detailData.process.heading}
        description={detailData.process.description}
      />
      <div className="my-16 max-w-6xl mx-auto">
        <Offer />
      </div>
      <Features 
        heading={detailData.features.heading}
        description={detailData.features.description}
        features={detailData.features.features}
      />
    </div>
  );
};

export default ResidentialDetailPage;

