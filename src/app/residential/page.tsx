"use client";

import ServicesList from "@/components/Services/ServicesList";
import { residentialServicesData } from "@/components/Services/residentialData";
import Offer from "@/components/abouts/Offer";

const ResidentialPage = () => {
  return (
    <>
      <ServicesList 
        pageTitle={residentialServicesData.pageTitle}
        heading={residentialServicesData.heading}
        description={residentialServicesData.description}
        services={residentialServicesData.services}
      />
    </>
  );
};

export default ResidentialPage;