import { useState } from "react";
import { motion } from "motion/react";
import { Dice5Icon } from "lucide-react";

export default function SpinButton({ onClick }: { onClick: () => void }) {
  const [rotation, setRotation] = useState(360);

  return (
    <button
      className="flex-1 flex items-center justify-center gap-2 bg-primary text-secondary text-2xl font-semibold py-6 rounded-lg uppercase"
      onClick={() => {
        setRotation((r) => r + 360);
        onClick();
      }}
    >
      <motion.span animate={{ rotate: rotation }} transition={{ duration: 1 }}>
        <Dice5Icon className="size-9 fill-secondary stroke-primary" />
      </motion.span>
      Spin
    </button>
  );
}
