import img from '@/app/assets/pexels-shvets-production-8900016.png';
import Image from 'next/image';

const Section4 = () => {
  return (
    <div className="flex flex-col items-center gap-y-16 px-6 md:px-12 lg:px-24 xl:px-30 my-25">
      <div className="bg-primary rounded-tr-[4rem] rounded-bl-[4rem] font-mabry py-6 md:py-12 px-6 md:px-12 w-full max-w-[85rem]">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-5/12 pr-0 md:pr-20 flex flex-col gap-y-4">
            <h2 className="font-bold text-2xl md:text-4xl text-white">
              You&apos;re not alone
            </h2>
            <p className="text-white text-base md:text-2xl font-normal">
              <span className="font-extrabold">In India,</span> 1 in 3 adults
              live with a chronic condition. With NutriEconomy, join a community
              using AI-powered nutrition to make healthier choices and manage
              health through food.
            </p>
          </div>
          <div className="w-full md:w-7/12 mt-6 md:mt-0 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-y-4">
            <div className="w-full">
              <Image
                src={img}
                alt="hero"
                className="w-full h-auto object-cover rounded"
              />
            </div>
            <div className="bg-secondary font-light text-black font-mabry text-base md:text-xl py-4 px-4 md:px-8 rounded-full sm:rounded-none sm:rounded-r-[2rem]">
              Whatever your condition is, NutriEconomy takes care of everything.
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col items-center gap-y-12 w-full px-6 md:px-12 lg:px-24 xl:px-50">
        <div className="space-y-4 text-center">
          <h2 className="text-primary font-bold text-2xl md:text-4xl">
            Healthier Outcomes
          </h2>
          <p className="text-base md:text-2xl font-normal tracking-wide">
            Research shows that NutriEconomy enhances health outcomes. A study
            on personalized nutrition found that using NutriEconomy led to:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
          {/* FIRST CIRCLE */}
          <div className="flex flex-col items-center gap-y-4">
            <div
              className="rounded-full 
                            w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[250px] 
                            h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[250px] 
                            flex items-center justify-center 
                            bg-secondary text-4xl sm:text-5xl md:text-6xl text-primary font-bold"
            >
              2.6x
            </div>
            <div className="text-center text-primary font-medium text-xl sm:text-2xl md:text-3xl leading-tight">
              <span className="font-bold">Improved quality</span> of life by{' '}
              <span className="font-bold">2.6 times</span> greater than control
            </div>
          </div>
          {/* SECOND CIRCLE */}
          <div className="flex flex-col items-center gap-y-4">
            <div
              className="rounded-full 
                            w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[250px] 
                            h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[250px] 
                            flex items-center justify-center 
                            bg-secondary text-4xl sm:text-5xl md:text-6xl text-primary font-bold"
            >
              2x
            </div>
            <div className="text-center text-primary font-medium text-xl sm:text-2xl md:text-3xl leading-tight">
              Improved bowel habits by{' '}
              <span className="font-bold">2 times</span> greater than control
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
