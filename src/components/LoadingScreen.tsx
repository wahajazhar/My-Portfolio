import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => (
  <AnimatePresence>
    {isLoading && (
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-6">
          <motion.div
            className="w-16 h-16 border-2 border-neon-blue/20 border-t-neon-blue rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p
            className="font-display text-sm tracking-[0.3em] text-neon-blue"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            LOADING
          </motion.p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default LoadingScreen;
