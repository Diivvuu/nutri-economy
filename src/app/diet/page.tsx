import DietForm from './_components/DietForm';
import DietHero from './_components/DietHero';

const page = () => {
  return (
    <div className="xl:mt-[9vh]">
      <DietHero />
      <DietForm />
    </div>
  );
};

export default page;
