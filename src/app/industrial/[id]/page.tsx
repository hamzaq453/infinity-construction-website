import { notFound } from "next/navigation";
import Hero from "@/components/Services/DetailPage/Hero";
import Overview from "@/components/Services/DetailPage/Overview";
import { industrialServicesData } from "@/components/Services/industrialData";
import Process from "@/components/Services/DetailPage/Process";
import Features from "@/components/Services/DetailPage/Features";
import Offer from "@/components/abouts/Offer";

interface PageProps {
  params: {
    id: string;
  };
}

const IndustrialDetailPage = ({ params }: PageProps) => {
  const { id } = params;

  // Find service by slug
  const service = industrialServicesData.services.find((s) => s.slug === id);

  // If service not found, use fallback to general detail page
  const detailData = service?.detailPage || industrialServicesData.detailPage;

  // If service doesn't exist and no fallback, redirect to general industrial page
  if (!service && !industrialServicesData.detailPage) {
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
      <section className="relative px-4 py-12 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <Offer />
        </div>
      </section>
      <Features
        heading={detailData.features.heading}
        description={detailData.features.description}
        features={detailData.features.features}
      />
    </div>
  );
};

export default IndustrialDetailPage;
