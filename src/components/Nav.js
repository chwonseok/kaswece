import { useEffect, useState } from 'react';

import WebNav from './WebNav';
import MobileNav from './MobileNav';

export default function Nav() {
  const [resize, setResize] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setResize({ width: window.innerWidth });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return <>{resize.width <= 650 ? <MobileNav /> : <WebNav />}</>;
}
