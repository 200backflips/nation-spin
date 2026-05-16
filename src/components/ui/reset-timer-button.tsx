import useCountdown from "@/hooks/countdown";
import { RotateCcwIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function ResetTimerButton() {
  const { pause, reset } = useCountdown();
  const [rotation, setRotation] = useState(0);

  return (
    <button
      className="flex items-center justify-center gap-2 bg-card px-3 border rounded-lg transition"
      onClick={() => {
        setRotation((r) => r + -360);
        pause();
        reset();
      }}
    >
      <motion.span
        animate={{ rotate: rotation }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <RotateCcwIcon className="size-6 stroke-2" />
      </motion.span>
    </button>
  );
}
