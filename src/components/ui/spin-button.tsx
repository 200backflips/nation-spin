import { useState } from "react";
import { motion } from "motion/react";
import { Dice5Icon } from "lucide-react";

export default function SpinButton({ onClick }: { onClick: () => void }) {
  const [rotation, setRotation] = useState(360);

  return (
    <button
      className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white text-xl font-semibold py-5 rounded-lg uppercase"
      onClick={() => {
        setRotation((r) => r + 360);
        onClick();
      }}
    >
      <motion.span animate={{ rotate: rotation }} transition={{ duration: 1 }}>
        <Dice5Icon className="size-7 fill-white stroke-emerald-600" />
      </motion.span>
      Spin
    </button>
  );
}
