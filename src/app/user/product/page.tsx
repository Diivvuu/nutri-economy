import React from 'react';
import ProductHero from './_components/ProductHero';
import HealthyFoodMarketplace from './_components/HealthyFoodMarketplace';

const page = () => {
  return (
    <div className="xl:mt-[9vh]">
      <ProductHero />
      <HealthyFoodMarketplace />
    </div>
  );
};

export default page;
