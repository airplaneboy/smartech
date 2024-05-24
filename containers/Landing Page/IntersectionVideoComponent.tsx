'use client';
import React, { useRef, useEffect, useState } from 'react';

const IntersectionVideo = ({
  src,
  playsInline,
  style,
  loop,
  autoPlay,
  muted,
  width,
  height,
  preload,
  controls,
  className,
  fallbackSrc,
}: {
  src: string;
  playsInline?: boolean | undefined;
  style?: React.CSSProperties | undefined;
  loop?: boolean | undefined;
  autoPlay?: boolean | undefined;
  muted?: boolean | undefined;
  width?: string | number | undefined;
  height?: string | number | undefined;
  preload?: string | undefined;
  controls?: boolean | undefined;
  className?: string | undefined;
  fallbackSrc?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const observer = useRef<IntersectionObserver>();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current?.load();

          setIsVisible(true);
        } else {
          videoRef.current?.pause();

          setIsVisible(false);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0,
      }
    );

    if (videoRef.current) observer.current.observe(videoRef.current);

    return () => {
      // videoRef.current?.pause();
      observer?.current?.disconnect();
    };
  }, [isVisible]);

  function supportsHEVCAlpha() {
    const navigator = window.navigator;
    const ua = navigator.userAgent.toLowerCase();
    const hasMediaCapabilities = !!(navigator.mediaCapabilities && navigator.mediaCapabilities.decodingInfo);
    const isSafari = ua.indexOf('safari') != -1 && !(ua.indexOf('chrome') != -1) && ua.indexOf('version/') != -1;
    return isSafari && hasMediaCapabilities;
  }

  return (
    <>
      {' '}
      <span className='z-[999] text-5xl'>{supportsHEVCAlpha().toString()}</span>
      <video
        className={className}
        playsInline={playsInline}
        style={style}
        loop={loop}
        autoPlay={autoPlay}
        muted={muted}
        width={width}
        height={height}
        preload={preload}
        ref={videoRef}
        src={isVisible ? src : ''}
        controls={controls}>
        {fallbackSrc && (
          <>
            <source src={fallbackSrc} type='image/webp' />
            Your browser does not support the video tag.
          </>
        )}
      </video>
    </>
  );
};

export default IntersectionVideo;
