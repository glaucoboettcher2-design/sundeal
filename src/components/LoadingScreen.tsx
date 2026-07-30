import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sundealLogo from "@/assets/sundeal-logo.png";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Basic timer to guarantee screen shows up. You can attach this to actual image load events later if needed.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f6f7f2]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="flex flex-col items-center"
          >
            {/* Logo Image */}
            <motion.img
              src={sundealLogo}
              alt="Sundeal Logo"
              className="w-48 md:w-64 mb-10 drop-shadow-xl"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Loading Bar Container */}
            <div className="w-48 md:w-64 h-1.5 bg-black/5 rounded-full overflow-hidden">
              {/* Animated Progress Bar */}
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #F5B000 0%, #D48C00 100%)"
                }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
