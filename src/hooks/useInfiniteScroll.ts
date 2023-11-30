import { useEffect, useState, useCallback } from 'react';

type OptionType = {
  onScrollEnd?: () => void;
};

type ReturnType = {
  isEnd: boolean;
};

const lockScroll = () => {
  document.body.style.overflow = 'hidden';
};

const unlockScroll = () => {
  document.body.style.overflow = '';
};

const useInfiniteScroll = ({ onScrollEnd }: OptionType): ReturnType => {
  const [isEnd, setIsEnd] = useState(false);

  const handleScroll = async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setIsEnd(true);
      lockScroll();
      if (onScrollEnd) await onScrollEnd();
      await unlockScroll();
      await setIsEnd(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isEnd };
};

export default useInfiniteScroll;
