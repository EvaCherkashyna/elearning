import { useState, useEffect } from 'react';

const useScroll = (elementId, position) => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let yourElement;
      let elementTop;
      let elementRect
      switch (position) {
        case "top_before":
          yourElement = document.getElementById(elementId);
          elementTop = yourElement.getBoundingClientRect().top - 300;
          break;
        case "top":
          yourElement = document.getElementById(elementId);
          elementTop = yourElement.getBoundingClientRect().top + 1000;

          break;
        case "center":
          yourElement = document.getElementById(elementId);
          elementRect = yourElement.getBoundingClientRect();
          elementTop = elementRect.top + elementRect.height / 2 + 500;
          break;
        case "bottom":
          yourElement = document.getElementById(elementId);
          elementRect = yourElement.getBoundingClientRect();
          elementTop = elementRect.bottom;
          break;
      }

      if (window.scrollY >= elementTop) {
        console.log(elementTop, window.scrollY, elementId)
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementId]);

  return isScrolled;
};

export default useScroll;
