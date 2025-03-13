'use client';
import { useState } from 'react';
import DietForm from './_components/DietForm';
import DietHero from './_components/DietHero';
import DietTable from './_components/DietTable';

const page = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <div className="xl:mt-[9vh] bg-primary flex flex-col justify-center items-center gap-y-12 w-full">
      <DietHero />
      <DietForm
        formSubmitted={formSubmitted}
        setFormSubmitted={setFormSubmitted}
      />
      {!formSubmitted && <DietTable />}
    </div>
  );
};

export default page;
