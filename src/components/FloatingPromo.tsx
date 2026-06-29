import { motion } from 'motion/react';

export default function FloatingPromo() {
  return (
    <motion.a
      href="https://auroraadv.co/?tab=wizard"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-32 h-32 bg-brand-gold text-brand-navy rounded-full flex items-center justify-center text-center p-4 shadow-2xl hover:scale-105 transition-transform z-50 font-bold text-sm border-4 border-white/20"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
    >
      Get this website for only $999
    </motion.a>
  );
}
