'use client';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const ScrollHeader = ({
  initialHeight,
  finalHeight,
  children,
}: {
  initialHeight: string;
  finalHeight: string;
  children: React.ReactNode;
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsCollapsed(scrollPosition > 0);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(
        'md:fixed md:top-16 max-md:top-0 max-md:sticky max-sm:static w-full text-gray-800 sm:backdrop-blur-sm border-b transition-all  duration-300 flex flex-col justify-center z-10 ',
        !isCollapsed ? initialHeight : finalHeight
      )}
    >
      {children}
    </div>
  );
};

export default ScrollHeader;
