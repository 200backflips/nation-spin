import { UsersIcon } from "lucide-react";
import type { Team } from "@/hooks/teams";
import useTeams from "@/hooks/teams";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = Team & {
  index: number;
};

const iconColors = [
  "bg-blue-200",
  "bg-green-200",
  "bg-orange-200",
  "bg-purple-200",
  "bg-olive-200",
  "bg-indigo-200",
  "bg-amber-200",
  "bg-emerald-200",
];

export default function TeamCard({ id, name, score, index }: Props) {
  const { updateTeamScore } = useTeams();

  return (
    <motion.div
      className="flex flex-col justify-between gap-2 bg-white p-2 border rounded-lg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1 + 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex items-start gap-2">
        <span
          className={cn(
            "bg-secondary p-3 rounded-lg",
            iconColors[index % iconColors.length],
          )}
        >
          <UsersIcon />
        </span>
        <h3 className="text-lg">
          {name?.length > 20 ? name.slice(0, 20) + "..." : name}
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="flex items-center justify-center px-2 border rounded-full"
          onClick={() => {
            updateTeamScore(id, score - 1);
          }}
        >
          -
        </button>
        <h2>{score ?? 0}</h2>
        <button
          className="flex items-center justify-center bg-primary text-white px-2 border rounded-full"
          onClick={() => {
            updateTeamScore(id, score + 1);
          }}
        >
          +
        </button>
      </div>
    </motion.div>
  );
}
