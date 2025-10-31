"use client";

import ServicesList from "@/components/Services/ServicesList";
import { industrialServicesData } from "@/components/Services/industrialData";

const IndustrialPage = () => {
  return (
    <>
      <ServicesList 
        pageTitle={industrialServicesData.pageTitle}
        heading={industrialServicesData.heading}
        description={industrialServicesData.description}
        services={industrialServicesData.services}
      />
    </>
  );
};

export default IndustrialPage;