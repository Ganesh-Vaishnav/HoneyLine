import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const PageLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[120] bg-[#1A1814] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 honeyline-grain pointer-events-none opacity-60" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            <div className="font-display italic text-[#F2E2A4] text-[64px] sm:text-[120px] md:text-[180px] leading-[0.85] tracking-tight">
              honeyline
            </div>
            <div className="mt-4 flex items-center gap-3 text-[#F2E2A4]/70">
              <span className="h-px w-10 bg-[#F2E2A4]/60" />
              <span className="font-body text-[10px] tracking-[0.35em] uppercase">Honeyline · Melbourne</span>
              <span className="h-px w-10 bg-[#F2E2A4]/60" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
