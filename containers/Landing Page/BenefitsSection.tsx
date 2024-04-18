'use client';
//@ts-ignore
import cx from 'clsx/lite';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

const BenefitSection = () => {
  const ctaButton = 'capitalize border px-4 py-4 rounded-2xl items-center justify-center text-sm font-bold';

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();

    tl.to('.benefit-section', {
      scrollTrigger: {
        toggleClass: { targets: '.pin-spacer', className: '!flex-1' },
        trigger: '.benefit-section',
        endTrigger: '#item-4',
        pin: true, // pin the trigger element while active
        pinSpacing: false,
        start: 'center center',
        end: 'bottom top',
        scrub: 1,
        snap: 1,
        markers: false,
      },
    });

    tl.to('#item-1', {
      scrollTrigger: {
        toggleClass: { targets: '.pin-spacer', className: '!flex-auto' },
        trigger: '#item-1',
        scrub: true,
        markers: false,
        pin: true,
      },
    });

    tl.to('#item-2', {
      scrollTrigger: {
        toggleClass: { targets: '.pin-spacer', className: '!flex-auto' },
        trigger: '#item-2',
        scrub: true,
        markers: false,
        pin: true,
      },
    });

    tl.to('#item-3', {
      scrollTrigger: {
        toggleClass: { targets: '.pin-spacer', className: '!flex-auto' },
        trigger: '#item-3',
        scrub: true,
        markers: false,
        pin: true,
      },
    });

    tl.to('#item-4', {
      scrollTrigger: {
        toggleClass: { targets: '.pin-spacer', className: '!flex-auto' },
        trigger: '#item-4',
        scrub: true,
        markers: false,
        pin: true,
        pinSpacing: true,
      },
    });
  });

  return (
    <section
      className={
        'min-h-screen border-t-8 max-w-7xl mx-auto flex flex-row justify-between items-start py-32 px-24 gap-20'
      }>
      <div className='bg-grid-black/[0.2] relative !flex-1 benefit-section w-full h-full flex flex-col items-center justify-center gap-10'>
        <div className='h-full w-full min-w-screen -z-10 absolute pointer-events-none left-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />

        <h1 className='text-5xl tracking-tighter self-start leading-[1] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-500 to-orange-300'>
          Unlock Your Potential
        </h1>
        <p className='leading-8 text-lg font-medium text-gray-500'>
          We&apos;re passionate about making education accessible to everyone. Discover the key benefits that set us
          apart!
        </p>
        <div className='flex w-full gap-5'>
          <Link
            href='/auth/login'
            className={cx(
              ctaButton,
              'bg-blue-600 text-white hover:bg-gradient-to-r from-blue-400 via-fuchsia-500 to-orange-300 group flex gap-10 align-baseline transition-colors duration-100 border-none'
            )}>
            Start Your Learning Adventure
          </Link>
          <Link
            href='/auth/login'
            className={cx(
              ctaButton,
              'group flex gap-10 align-baseline hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition-colors text-blue-500 duration-100 bg-white'
            )}>
            Unlock Personalized Learning
          </Link>
        </div>
      </div>

      <div className='!flex-1 w-full flex flex-col items-center gap-[100vh]'>
        <div id='item-1' className=' z-[4] min-h-screen flex flex-col gap-5 items-center justify-center'>
          <video
            className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
            loop
            autoPlay
            muted
            preload='auto'>
            <source src='/assets/Article.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video>
          <div className='flex flex-col gap-3'>
            <span className=' font-bold text-xl text-gray-700'>Interactive Articles</span>
            <p className='text-sm  leading-6'>
              In addition to its extensive video library, we offer educational articles carefully curated to provide
              students with in-depth analysis, historical context, and practical insights that complement their learning
              journey
            </p>
          </div>
        </div>

        <div id='item-2' className='min-h-screen flex flex-col gap-5 items-center justify-center'>
          <video
            className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
            loop
            autoPlay
            muted
            preload='auto'>
            <source src='/assets/Video.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video>
          <div className='flex flex-col gap-3'>
            <span className=' font-bold text-xl text-gray-700'>Engaging Video Courses</span>
            <p className='text-sm leading-6'>
              Gain access to a vast library of handpicked video courses that provide students with engaging and
              informative content to supplement their learning and exam preparation.
            </p>
          </div>
        </div>

        <div id='item-3' className='min-h-screen flex flex-col gap-5 items-center justify-center'>
          <video
            className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
            loop
            autoPlay
            muted
            preload='auto'>
            <source src='/assets/Results.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video>
          <div className='flex flex-col gap-3'>
            <span className=' font-bold text-xl text-gray-700'>Structured Result Insights</span>
            <p className='text-sm leading-6'>
              Students can access comprehensive results analysis that provide insights into their strengths and
              weaknesses and expose areas where they may need to further review.
            </p>
          </div>
        </div>

        <div id='item-4' className='min-h-screen flex flex-col gap-5 items-center justify-center'>
          <video
            className='shadow-lg border-t shadow-gray-400 rounded-2xl w-full mr-[2px] border-0 overflow-hidden'
            loop
            autoPlay
            muted
            preload='auto'>
            <source src='/assets/Tests.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video>
          <div className='flex flex-col gap-3'>
            <span className=' font-bold text-xl text-gray-700'>Interactive Test Simulations</span>
            <p className='text-sm leading-6'>
              We offer interactive test that replicate the format, timing, and difficulty level of tests, giving
              students a chance to practice under realistic conditions and build confidence for test day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
