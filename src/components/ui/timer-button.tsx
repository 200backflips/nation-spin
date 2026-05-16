import useCountdown from "@/hooks/countdown";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ClockIcon } from "lucide-react";

export default function TimerButton() {
  const {
    remainingSeconds,
    isRunning,
    durationSeconds,
    start,
    pause,
    resume,
    reset,
  } = useCountdown();

  useEffect(() => {
    if (remainingSeconds === 0) {
      setTimeout(() => {
        reset();
      }, 2000);
    }
  }, [remainingSeconds, reset]);

  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 bg-card text-xl font-semibold px-3 border rounded-lg transition",
        {
          "bg-primary text-secondary": isRunning,
          "bg-destructive": isRunning && remainingSeconds < 4,
          "bg-amber-400": remainingSeconds === 0,
        },
      )}
      onClick={() => {
        if (isRunning) {
          return pause();
        }
        if (remainingSeconds === durationSeconds) {
          return start();
        }
        return resume();
      }}
    >
      {!remainingSeconds ? (
        <motion.span
          animate={{
            rotate: [0, 5, 0, -5, 0],
            translate: ["0px", "3px", "0px", "-3px", "0px"],
          }}
          transition={{
            duration: 0.1,
            repeat: 12,
          }}
        >
          <ClockIcon className="size-7" />
        </motion.span>
      ) : (
        <ClockIcon className="size-7" />
      )}
      <span className="w-11 text-left">{remainingSeconds}s</span>
    </button>
  );
}
