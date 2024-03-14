//@ts-ignore
import cx from 'clsx/lite';
import { HiChevronRight } from 'react-icons/hi2';

const HeroSection = () => {
  const sectionContentStyle = 'w-full h-full flex flex-col items-center justify-center gap-10';
  const ctaButton = 'capitalize border px-4 py-2 rounded-2xl items-center justify-center';
  return (
    <section className={'max-w-7xl mx-auto flex flex-row justify-between items-center min-h-screen px-24 '}>
      {/* <div className='inset-0 absolute w-full h-full bg-[linear-gradient(0deg,_rgba(52,50,44,0.7539390756302521)_0%,_rgba(46,100,97,0)_30%,_rgba(34,193,195,0)_100%)]' /> */}
      <div className={sectionContentStyle}>
        <h1 className='text-[80px] leading-[1] font-extrabold'>Your Learning Adventure Begins Here</h1>
        <p className='leading-8 text-lg font-medium text-gray-600'>
          Revolutionize the way you learn with our interactive and adaptive platform. Elevate your skills, broaden your
          horizons, and embark on a lifelong journey of discovery.
        </p>
        <div className='flex w-full gap-5'>
          <button
            className={cx(
              ctaButton,
              'bg-black text-white group flex gap-10 align-baseline hover:border-gray-500 hover:text-gray-500 hover:bg-gray-50 transition-all hover:shadow-lg hover:shadow-gray-300'
            )}>
            Start Learning Now
          </button>
          <button
            className={cx(
              ctaButton,
              'group flex gap-10 align-baseline hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition-all hover:shadow-lg hover:shadow-blue-300'
            )}>
            Explore Your Courses <HiChevronRight className='group-hover:text-blue-500 text-black' size={18} />
          </button>
        </div>
      </div>
      <div className='pointer-events-none w-full h-full bg-gradient-radial from-black via-white to-white flex items-center justify-center'>
        <video style={{ scale: 2 }} loop autoPlay muted width='720' height='720' preload='auto'>
          <source src='/parallax/video.webm' type='video/webm' />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
