import hero1 from '@/app/assets/pexels-yankrukov-5480192.png';
import { Button } from '@/components/ui/button';
import Header from './Header';

const Section1 = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${hero1.src})` }}
    >
      <div className="w-full sticky top-0 z-50">
        <Header />
      </div>
      <div className="flex flex-col justify-center items-start w-full text-white text-3xl p-8 md:p-12 lg:p-16 xl:p-20 max-w-screen-xl mx-auto 2xl:mx-0 flex-grow">
        <div className="flex flex-col items-start justify-center gap-y-8 md:gap-y-10 lg:gap-y-12 w-full md:w-8/12 lg:w-6/12 xl:w-5/12">
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold tracking-wider font-mabry">
            AI-Powered Personalized Health & Nutrition
          </div>
          <Button
            className="text-primary text-lg md:text-xl lg:text-2xl p-4 md:p-5 lg:p-6 xl:p-8 rounded-full font-exo ml-0 md:ml-10 lg:ml-20"
            variant={'outline'}
          >
            Start Your Health Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section1;