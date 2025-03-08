import Image from 'next/image';
import image1 from '@/app/assets/pexels-olly-774909.png';
import image2 from '@/app/assets/pexels-rdne-7580990.png';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const Section3 = () => {
  return (
    <div className="font-mabry w-full bg-secondary pt-12 pb-32 flex flex-col justify-center items-center gap-y-20">
      <h2 className="font-semibold text-[40px] text-center text-dark">
        Real Stories, Real Results
      </h2>
      <div className="flex items-end">
        <div className="z-20">
          <Image src={image1} alt="nice" />
        </div>
        <Card className="bg-white max-w-170 -mb-8 -ml-12 rounded-[3rem] px-16 z-10 gap-y-0">
          <CardContent className="text-2xl text-dark leading-tight">
            NutriEconomy completely transformed my diet! The AI meal plan helped
            me manage my diabetes effortlessly.
          </CardContent>
          <CardFooter className="py-0 flex justify-end w-full text-primary text-xl">
            Trisha P., 32
          </CardFooter>
        </Card>
      </div>
      <div className="flex items-end">
        <Card className="bg-white max-w-170 -mb-8 -mr-12 rounded-[3rem] px-16 z-10 gap-y-0">
          <CardContent className="text-2xl text-dark leading-tight text-right">
            I love the medicinal plant database! I found natural remedies for
            digestion issues that really work.
          </CardContent>
          <CardFooter className="py-0 flex justify-start w-full text-primary text-xl px-12">
            Aarav A., 35
          </CardFooter>
        </Card>
        <div className="z-20">
          <Image src={image2} alt="nice" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
