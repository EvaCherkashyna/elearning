import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(document.documentElement.clientWidth);
    };

    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
