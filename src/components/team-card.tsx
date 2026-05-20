import { UsersIcon } from "lucide-react";
import type { Team } from "@/hooks/teams";
import useTeams from "@/hooks/teams";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import CircularButton from "./ui/circular-button";

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
  const { updateTeamScore, currentPlayingTeamId, setCurrentPlayingTeamId } =
    useTeams();
  const isCurrentPlayingTeam = id === currentPlayingTeamId;

  return (
    <div className="relative">
      <motion.button
        className={cn(
          "size-full flex flex-col justify-between gap-2 p-2 bg-card border rounded-lg",
          isCurrentPlayingTeam && "bg-accent",
        )}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        onClick={() => setCurrentPlayingTeamId(id)}
      >
        <div className="flex items-start gap-2">
          <span
            className={cn(
              "p-3 bg-secondary  text-black rounded-lg",
              iconColors[index % iconColors.length],
            )}
          >
            <UsersIcon className="size-4" />
          </span>
          <h4>{name?.length > 20 ? name.slice(0, 20) + "..." : name}</h4>
        </div>
        <div className="h-9" />
      </motion.button>
      <div className="flex items-center gap-3 p-2 absolute bottom-0">
        <CircularButton onClick={() => updateTeamScore(id, score - 1)}>
          -
        </CircularButton>
        <h2>{score ?? 0}</h2>
        <CircularButton
          className="bg-primary text-secondary"
          onClick={() => updateTeamScore(id, score + 1)}
        >
          +
        </CircularButton>
      </div>
    </div>
  );
}
