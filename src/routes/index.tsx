import { createFileRoute } from "@tanstack/react-router";
import { ClockIcon, Dice5Icon } from "lucide-react";
import TeamCard from "@/components/team-card";
import ManageGame from "@/components/manage-game";
import useTeams from "@/hooks/teams";
import useGetRandomCountry from "@/hooks/random-country";
import useCountdown from "@/hooks/countdown";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "motion/react";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function SpinButton({ onClick }: { onClick: () => void }) {
  const [rotation, setRotation] = useState(360);

  return (
    <button
      className="flex-1 flex items-center justify-center gap-2 bg-primary text-white text-2xl font-semibold py-6 rounded-lg uppercase"
      onClick={() => {
        setRotation((r) => r + 360);
        onClick();
      }}
    >
      <motion.span animate={{ rotate: rotation }} transition={{ duration: 1 }}>
        <Dice5Icon className="size-9 fill-white stroke-black" />
      </motion.span>
      Spin
    </button>
  );
}

function TimerButton() {
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
        "flex justify-center gap-2 bg-white text-2xl font-semibold px-4 py-6 border rounded-lg transition",
        {
          "bg-primary text-white": isRunning,
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
          <ClockIcon className="size-9" />
        </motion.span>
      ) : (
        <ClockIcon className="size-9" />
      )}
      <span className="w-14 text-left">{remainingSeconds}s</span>
    </button>
  );
}

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

function RouteComponent() {
  const { teams } = useTeams();
  const { remainingSeconds } = useCountdown();
  const { data: randomCountry, isLoading, refetch } = useGetRandomCountry();
  const countryName = randomCountry?.name.common;
  const countryFlag = randomCountry?.flags.png;
  const [nameAnimationKey, setNameAnimationKey] = useState(0);

  useEffect(() => {
    if (remainingSeconds === 0) {
      toast("Time's up!", {
        description: "Your turn is over. It is time for the next team to play.",
        icon: <ClockIcon className="size-4" />,
      });
    }
  }, [remainingSeconds]);

  const handleSpin = () => {
    setNameAnimationKey((key) => key + 1);
    refetch();
  };

  return (
    <>
      <div className="h-48 flex flex-col items-center gap-4 bg-accent border px-4 py-10 rounded-lg">
        <p className="uppercase">
          Use a <strong>single</strong> word associated with
        </p>
        <div className="h-14 w-full min-w-0 flex items-center justify-center gap-2">
          {isLoading ? (
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
          ) : (
            <>
              <img
                src={countryFlag}
                alt="National flag"
                className="h-7 shrink-0"
              />
              <h1
                key={nameAnimationKey}
                className={cn("uppercase", {
                  "text-3xl": countryName.length > 10,
                  "text-2xl": countryName.length > 13,
                  "text-xl": countryName.length > 16,
                  "text-lg": countryName.length > 19,
                  "text-base": countryName.length > 22,
                })}
              >
                {(countryName ?? "Unknown country")
                  .split("")
                  .map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.075, delay: index * 0.0375 }}
                    >
                      {letter}
                    </motion.span>
                  ))}
              </h1>
            </>
          )}
        </div>
        <div className="w-20 h-0.5 bg-primary" />
      </div>
      <div className="flex gap-2">
        <SpinButton onClick={handleSpin} />
        <TimerButton />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h2>{teams.length > 0 ? teams.length : "No"} Teams playing</h2>
          <ManageGame />
        </div>
      </div>
      <div
        className="flex-1 overflow-auto grid grid-cols-2 content-start gap-2"
        onScroll={(event) => {
          const { currentTarget } = event;
          const { scrollTop, clientHeight, scrollHeight } = currentTarget;

          currentTarget.classList.toggle("mask-t-from-90%", scrollTop > 0);
          currentTarget.classList.toggle(
            "mask-b-from-90%",
            scrollTop + clientHeight < scrollHeight,
          );
        }}
      >
        {teams.map((team, index) => (
          <TeamCard key={team.id} {...team} index={index} />
        ))}
      </div>
    </>
  );
}
