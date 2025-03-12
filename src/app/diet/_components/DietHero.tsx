import Image from 'next/image';
import dietImg from '@/app/assets/pexels-vanessa-loring-5972008.jpg';

const DietHero = () => {
  return (
    <div
      className="w-full bg-secondary  bg-cover bg-center min-h-screen h-full pt-12 md:pt-0 px-20 md:px-40 xl:px-95 flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${dietImg.src})` }}
    >
      <div className="flex items-center w-full">
        <div className="flex flex-col justify-center gap-y-3 items-center text-primary font-mabry w-full">
          <h2 className="text-5xl font-exo font-semibold text-center leading-tight">
            The most advanced meal planning
          </h2>
          <p className="text-2xl text-center leading-tight">
            Generate hyper-personalized meal plans for individual users. Empower
            users to easily lose weight, form new habits, and reach their goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DietHero;
