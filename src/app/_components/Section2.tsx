import { Button } from '@/components/ui/button';
import React from 'react';

type dataType = {
  title: string;
  desc1: string;
  desc2: string;
};

const data: dataType[] = [
  {
    title: 'Personalized Meal Plans',
    desc1: 'AI-generated diet recommendations',
    desc2: 'Tailored for your health goals & preferences',
  },
  {
    title: 'Medicinal Plant Database',
    desc1: 'Discover the benefits of natural remedies',
    desc2: 'Search & filter plants based on health needs',
  },
  {
    title: 'AI Symptom Checker',
    desc1: 'Get instant health insights',
    desc2: 'AI-powered disease prediction & wellness tips',
  },
  {
    title: 'Healthy Food Marketplace',
    desc1: 'Compare organic & superfoods',
    desc2: 'Read reviews & find the best deals',
  },
];

const Section2 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 gap-y-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl leading-none text-center font-extrabold font-mabry max-w-2xl lg:max-w-full px-12">
        If you're looking to change how you eat to manage a condition like
        diabetes or obesity or to support your overall health, NutriEconomy can
        help.
      </h2>
      <h2 className="text-dark text-xl md:text-2xl lg:text-3xl pb-10 font-mabry text-center">
        Explore AI-Powered Health & Nutrition Solutions with us.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full max-w-4xl lg:max-w-7xl">
        {data.map(({ title, desc1, desc2 }, index) => (
          <div
            key={index}
            className="w-full bg-primary rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col justify-start items-center gap-y-12 p-8"
          >
            <div className="font-semibold text-[#C9E6E5] text-2xl md:text-3xl lg:text-4xl font-exo text-center">
              {title}
            </div>
            <div className="space-y-8 text-center">
              <div className="text-lg md:text-xl lg:text-2xl font-normal text-white font-mabry">
                {desc1}
              </div>
              <div className="text-lg md:text-xl lg:text-2xl text-white font-mabry">
                {desc2}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Button
          variant={'outline'}
          className="rounded-full text-lg md:text-xl lg:text-2xl p-4 md:p-6 lg:p-8 bg-secondary text-primary"
        >
          Start Your Personalized Health Journey →
        </Button>
      </div>
    </div>
  );
};

export default Section2;
