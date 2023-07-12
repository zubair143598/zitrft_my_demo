import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Draggable = ({ children }) => {
  const dragRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const width = useMotionValue(0);
  const height = useMotionValue(0);

  useEffect(() => {
    const updateDimensions = () => {
      const { width: dragWidth, height: dragHeight } = dragRef.current.getBoundingClientRect();
      width.set(dragWidth);
      height.set(dragHeight);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const xRange = useTransform(x, [0, window.innerWidth - width.get()], [0, window.innerWidth - width.get()]);
  const yRange = useTransform(y, [0, window.innerHeight - height.get()], [0, window.innerHeight - height.get()]);

  return (
    <motion.div
      ref={dragRef}
      drag
      dragConstraints={{ top: yRange, left: xRange, right: xRange, bottom: yRange }}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
};


export default Draggable;
