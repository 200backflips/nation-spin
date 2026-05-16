import { UsersIcon } from "lucide-react";
import type { Team } from "@/hooks/teams";
import useTeams from "@/hooks/teams";
import { motion } from "motion/react";

type Props = Team & {
  delay: number;
};

export default function TeamCard({ id, name, score, delay }: Props) {
  const { updateTeamScore } = useTeams();

  return (
    <motion.div
      className="flex flex-col justify-between gap-2 bg-white p-2 border rounded-lg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex items-start gap-2">
        <span className="bg-secondary p-3 rounded-lg">
          <UsersIcon />
        </span>
        <h3 className="text-lg">
          {name?.length > 18 ? name.slice(0, 18) + "..." : name}
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
