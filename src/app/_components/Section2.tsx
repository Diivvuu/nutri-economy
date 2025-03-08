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
    <div className="flex flex-col justify-center items-center py-12 gap-y-12">
      <h2 className="text-primary text-4xl px-48 leading-normal text-center font-bold">
        If you're looking to change how you eat to manage a condition like
        diabetes or obesity or to support your overall health, NutriEconomy can
        help.
      </h2>
      <h2 className="text-dark text-[32px] pb-10 font-mabry">
        Explore AI-Powered Health & Nutrition Solutions with us.
      </h2>
      <div className="grid grid-cols-2 w-full gap-x-16 gap-y-12 px-48">
        {data.map(({ title, desc1, desc2 }, index) => (
          <div
            key={index}
            className="w-full bg-primary rounded-tr-[4rem] rounded-bl-[4rem] flex flex-col justify-start items-center gap-y-20 p-12 pb-17"
          >
            <div className="font-semibold text-[#C9E6E5] text-5xl font-exo">
              {title}
            </div>
            <div className="space-y-12 text-center">
              <div className="text-4xl font-normal text-white font-mabry">
                {desc1}
              </div>
              <div className="text-4xl text-white font-mabry">{desc2}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Button variant={"outline"} className='rounded-full text-2xl p-8 bg-secondary text-primary'>Start Your Personalized Health Journey →</Button>
      </div>
    </div>
  );
};

export default Section2;
