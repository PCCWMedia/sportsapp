// import { motion } from 'framer-motion';
// import { useLocation } from 'react-router-dom';

// const PageTransition = ({ children }) => {
//   const location = useLocation();
  
//   return (
//     <motion.div
//       key={location.pathname}
//       initial={{ x: location.state?.isBack ? '-100%' : '100%' }}
//       animate={{ x: 0 }}
//       exit={{ x: location.state?.isBack ? '100%' : '-100%' }}
//       transition={{ duration: 0.5, ease: 'easeInOut' }}
//     >
//       {children}
//     </motion.div>

//   );
// };

// export default PageTransition; 