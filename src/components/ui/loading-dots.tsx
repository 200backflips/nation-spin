import { motion, type Variants } from "motion/react";

const dotVariants: Variants = {
  pulse: {
    scale: [1, 1.5, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function LoadingDots() {
  return (
    <motion.div
      animate="pulse"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className="flex items-center justify-center gap-5"
    >
      <motion.div
        className="size-2 rounded-full bg-primary will-change-transform"
        variants={dotVariants}
      />
      <motion.div
        className="size-2 rounded-full bg-primary will-change-transform"
        variants={dotVariants}
      />
      <motion.div
        className="size-2 rounded-full bg-primary will-change-transform"
        variants={dotVariants}
      />
    </motion.div>
  );
}
