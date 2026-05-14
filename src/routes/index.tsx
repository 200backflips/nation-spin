import { createFileRoute } from "@tanstack/react-router";
import { Dice5Icon, UsersIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

const teams = [
  {
    id: crypto.randomUUID(),
    name: "Team Blim Blam",
    score: 42,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Dong",
    score: 171,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Blim Blam",
    score: 42,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Dong",
    score: 171,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Blim Blam",
    score: 42,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Dong",
    score: 171,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Blim Blam",
    score: 42,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Dong",
    score: 171,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Blim Blam",
    score: 42,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Dong",
    score: 171,
  },
  {
    id: crypto.randomUUID(),
    name: "Team Blim Blam",
    score: 42,
  },
];

function RouteComponent() {
  return (
    <>
      <div className="flex flex-col items-center gap-4 bg-accent border px-4 py-10 rounded-lg">
        <p className="uppercase">
          Use a <strong>single</strong> word associated with
        </p>
        <h1 className="uppercase">Brasil</h1>
        <div className="w-20 h-0.5 bg-primary" />
      </div>
      <button className="flex items-center justify-center gap-2 bg-primary text-white text-3xl font-semibold self-center px-8 py-4 rounded-lg uppercase">
        <Dice5Icon />
        Spin
      </button>
      <div>
        <div className="flex items-center justify-between">
          <h2>Teams</h2>
          <button>
            <h3 className="bg-amber-400 px-4 py-1 rounded-full">
              Manage teams
            </h3>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto grid grid-cols-2 gap-2">
        {teams.map((team) => (
          <div
            key={team.id}
            className="flex flex-col justify-between gap-2 bg-white p-2 border rounded-lg"
          >
            <div className="flex items-start gap-2">
              <span className="bg-secondary p-3 rounded-lg">
                <UsersIcon />
              </span>
              <h3>{team.name}</h3>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center px-2 border rounded-full">
                -
              </button>
              <h2>{team.score}</h2>
              <button className="flex items-center justify-center bg-primary text-white px-2 border rounded-full">
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
