import logo from '@/app/assets/nutriEconomy.png';
import Image from 'next/image';

const GetStarted = [
  'For New Providers',
  'Refer a Patient',
  'For Health Plans',
  'For Employers',
  'Log in',
];
const Resources = [
  'Our Food',
  'Blog',
  'Case Studies',
  'News & Media',
  'FAQs',
  'Careers',
];
const ContactUs = ['xxx-xxx-xxxx', 'Email us'];

const Footer = () => {
  return (
    <>
      <div className="bg-primary w-full font-mabry flex flex-col md:flex-row gap-y-4 items-start justify-center p-10 border-b-2 border-t-2 border-white">
        <div className="w-5/12 flex flex-col justify-start items-start ">
          <Image src={logo} alt="logo" className="md:w-5/12" />
        </div>
        <div className="w-full md:w-7/12 grid grid-cols-3 text-white items-start">
          <div className="flex flex-col justify-center items-start gap-y-2">
            <h3 className="text-lg xl:text-2xl font-bold">Get Started</h3>
            <div className="flex flex-col gap-y-1.5">
              {GetStarted.map((item, index) => (
                <a key={index} className="text-base xl:text-2xl font-light">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-y-2">
            <h3 className="text-lg xl:text-2xl font-bold">Resources</h3>
            <div className="flex flex-col gap-y-1.5">
              {Resources.map((item, index) => (
                <a key={index} className="text-base xl:text-2xl font-light ">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-y-2">
            <h3 className="text-lg xl:text-2xl font-bold">Contact us</h3>
            <div className="flex flex-col gap-y-1.5">
              {ContactUs.map((item, index) => (
                <a key={index} className="text-base xl:text-2xl font-light">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary w-full pl-10 pt-5 pb-2 space-y-12 text-white font-mabry">
        <h4 className="text-lg md:text-2xl">
          © 2025 Season Health. All rights reserved.
        </h4>
        <div className="flex items-center gap-x-8 text-base md:text-xl">
          <a>Privacy Policy</a>
          <a>Terms of Use</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
