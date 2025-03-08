import hero1 from '@/app/assets/pexels-yankrukov-5480192.png';
import { Button } from '@/components/ui/button';
import Header from './Header';

const Section1 = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero1.src})` }}
    >
      <div className="w-full sticky top-0 z-50">
        <Header />
      </div>
      <div className="flex flex-col justify-center items-start w-full text-white text-3xl pt-32 p-20">
        <div className="flex flex-col items-start justify-center gap-y-12 w-6/12">
          <div className="text-8xl font-semibold text-wrap tracking-wider font-mabry">
            AI-Powered Personalized Health <br />& Nutrition
          </div>
          <Button
            className="text-primary text-2xl p-8 rounded-full font-exo ml-20"
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
