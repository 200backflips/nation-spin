import { UsersIcon } from "lucide-react";

export interface Team {
  id: string;
  name: string;
  score: number;
}

export default function TeamCard({ name, score }: Team) {
  return (
    <div className="flex flex-col justify-between gap-2 bg-white p-2 border rounded-lg">
      <div className="flex items-start gap-2">
        <span className="bg-secondary p-3 rounded-lg">
          <UsersIcon />
        </span>
        <h3>{name?.length > 18 ? name.slice(0, 18) + "..." : name}</h3>
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center justify-center px-2 border rounded-full">
          -
        </button>
        <h2>{score}</h2>
        <button className="flex items-center justify-center bg-primary text-white px-2 border rounded-full">
          +
        </button>
      </div>
    </div>
  );
}
